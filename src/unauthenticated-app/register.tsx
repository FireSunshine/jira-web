import { Button, Form, Input } from 'antd';
import { useAuth } from 'context/auth-context';

export const RegisterScreen = () => {
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

  const { register } = useAuth();

  const handleSubmit = (values: { username: string; password: string }) => {
    register(values);
  };
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item name="username">
        <Input type="text" placeholder="用户名" name="username" id="username" />
      </Form.Item>
      <Form.Item name="password">
        <Input type="password" placeholder="密码" name="password" id="password" />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};
