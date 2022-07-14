import { SearchPanel } from './SearchPanel';
import { List } from './List';
import { useEffect, useState } from 'react';
import { cleanObject, useDebounce, useMount } from 'utils';
import { useHttp } from 'utils/http';

export const ProjectListScreens = () => {
  const [users, setUsers] = useState([]); // 用户列表
  const [list, setList] = useState([]); // 项目列表
  const [param, setParam] = useState({
    name: '',
    personId: '',
  }); // 请求参数
  const client = useHttp();

  const debouncedParam = useDebounce(param, 200);

  // 请求项目列表
  useEffect(() => {
    client('projects', { data: cleanObject(debouncedParam) }).then(setList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedParam]);

  // 请求用户列表
  useMount(() => {
    client('users', {}).then(setUsers);
  });
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};
