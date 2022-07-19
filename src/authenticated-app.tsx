import { Button } from 'antd';
import { useAuth } from 'context/auth-context';
import React from 'react';
import { ProjectListScreens } from 'screens/project-list';

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <Button danger onClick={() => logout()}>
        登出
      </Button>
      <ProjectListScreens />
    </div>
  );
};

export default AuthenticatedApp;
