import { SearchPanel } from './SearchPanel';
import { List } from './List';
import { useEffect, useState } from 'react';
import * as qs from 'qs';
import { cleanObject, useDebounce, useMount } from 'utils';

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreens = () => {
  const [users, setUsers] = useState([]); // 用户列表
  const [list, setList] = useState([]); // 项目列表
  const [param, setParam] = useState({
    name: '',
    personId: '',
  }); // 请求参数

  const debouncedParam = useDebounce(param, 200);

  // 请求项目列表
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [debouncedParam]);

  // 请求用户列表
  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};
