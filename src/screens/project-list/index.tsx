import { SearchPanel } from './SearchPanel';
import { List } from './List';
import { useEffect, useState } from 'react';
import { cleanObject, useDebounce, useMount } from 'utils';
import { useHttp } from 'utils/http';
import styled from '@emotion/styled';
import { Typography } from 'antd';

export const ProjectListScreens = () => {
  const [users, setUsers] = useState([]); // 用户列表
  const [list, setList] = useState([]); // 项目列表
  const [param, setParam] = useState({
    name: '',
    personId: '',
  }); // 请求参数
  const client = useHttp();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | any>(null);

  const debouncedParam = useDebounce(param, 200);

  // 请求项目列表
  useEffect(() => {
    setLoading(true);
    client('projects', { data: cleanObject(debouncedParam) })
      .then(setList)
      .catch((error) => {
        setLoading(false);
        setError(error);
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedParam]);

  // 请求用户列表
  useMount(() => {
    client('users', {}).then(setUsers);
  });
  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users} />
      {error ? <Typography.Text type={'danger'}>{error.message}</Typography.Text> : null}
      <List loading={loading} dataSource={list} users={users} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
