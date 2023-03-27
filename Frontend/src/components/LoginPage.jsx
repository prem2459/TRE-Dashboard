import React from 'react';
import LoginForm from './LoginForm';

function LoginPage(props) {
  const handleLogin = (username, password) => {
    // call a function to authenticate the user with the server
    // and redirect them to the dashboard if successful
  };

  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default LoginPage;
