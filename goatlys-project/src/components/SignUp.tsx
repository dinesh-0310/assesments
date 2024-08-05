import React, { useState } from "react";
import { Button, CloseButton, Container, Form, Input, Link, Title } from ".";

interface SignupProps {
  onSignup: (email: string, username: string, password: string) => void;
  onSwitchToLogin: () => void;
}

const SignUp: React.FC<SignupProps> = (props) => {
  const { onSignup, onSwitchToLogin } = props;
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignup(email, username, password);
  };

  return (
    <Container>
      <Form >
        <CloseButton>&times;</CloseButton>
        <Title>SIGN UP</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Choose a preferred username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Choose a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Continue</Button>
        </form>
        <Link onClick={onSwitchToLogin}>
          Already have an account? Login &rarr;
        </Link>
      </Form>
    </Container>
  );
};

export { SignUp };
