import React, { useState } from 'react';
import { LoginScreen } from './Login';
import { RegisterScreen } from './register';

const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div>
      {isRegister ? <RegisterScreen /> : <LoginScreen />}
      <button onClick={() => setIsRegister(!isRegister)}>{isRegister ? '去登录' : '去注册'}</button>
    </div>
  );
};

export default UnauthenticatedApp;
