import { Button, Card } from 'antd';
import React, { useState } from 'react';
import { LoginScreen } from './Login';
import { RegisterScreen } from './register';

const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card>
        {isRegister ? <RegisterScreen /> : <LoginScreen />}
        <Button onClick={() => setIsRegister(!isRegister)}>{isRegister ? '去登录' : '去注册'}</Button>
      </Card>
    </div>
  );
};

export default UnauthenticatedApp;
