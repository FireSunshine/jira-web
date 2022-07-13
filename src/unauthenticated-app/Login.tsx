import { useAuth } from 'context/auth-context';
import React, { FormEvent } from 'react';

export const LoginScreen = () => {
  // interface Base {
  //   id: number;
  // }

  // interface Advance extends Base {
  //   name: string;
  // }

  // const test = (p: Base) => {};

  // const a = { id: 1, name: 'jack' };
  // // 鸭子类型(duck typing)：面向接口编程 而不是 面向对象编程
  // test(a);

  const { login } = useAuth();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLFormElement).value;
    const password = (event.currentTarget.elements[1] as HTMLFormElement).value;
    login({ username, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">用户名</label>
        <input type="text" name="username" id="username" />
      </div>
      <div>
        <label htmlFor="">密码</label>
        <input type="password" name="password" id="password" />
      </div>
      <button type="submit">登录</button>
    </form>
  );
};
