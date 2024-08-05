import React, { useState } from "react";
import { Container, Form, Title, Input, Button, Link } from ".";

interface LoginProps {
  onLogin: (username: string, password: string) => void;
  onSwitchToSignup: () => void;
}

const Login: React.FC<LoginProps> = (props) => {
  const { onLogin, onSwitchToSignup } = props;
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <Container>
      <Form>
        <Title>WELCOME BACK</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="username"
            placeholder="Enter your email or username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Login now</Button>
        </form>
        <Link href="#">Forgot password?</Link>
        <Link onClick={onSwitchToSignup}>
          Not registered yet? Register &rarr;
        </Link>
      </Form>
    </Container>
  );
};

export { Login };
