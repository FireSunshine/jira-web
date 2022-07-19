import { Form, Input } from 'antd';
import { useAuth } from 'context/auth-context';
import { LongButton } from 'unauthenticated-app';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

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
      <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
        <Input
          type="text"
          placeholder="Username"
          name="username"
          id="username"
          prefix={<UserOutlined className="site-form-item-icon" />}
        />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
        <Input.Password
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          prefix={<LockOutlined className="site-form-item-icon" />}
        />
      </Form.Item>
      <Form.Item>
        <LongButton htmlType="submit" type="primary">
          注册
        </LongButton>
      </Form.Item>
    </Form>
  );
};
