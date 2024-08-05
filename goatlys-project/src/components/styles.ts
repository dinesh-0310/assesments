import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #141414;
`;

const Form = styled.div`
  background-color: #1f1f1f;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const Title = styled.h2`
  color: #ffffff;
  text-align: center;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: #222;
  color: #fff;
`;

const InputArea = styled.textarea`
  width: 97%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: #222;
  color: #fff;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #3b82f6;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #2563eb;
  }
`;

const Link = styled.a`
  display: block;
  text-align: center;
  color: #3b82f6;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background-color: #1f1f1f;
  padding: 2rem;
  border-radius: 8px;
  width: 300px;
  position: relative;
`;

const PostContainer = styled.div`
  background-color: #1f1f1f;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const UserName = styled.div`
  font-weight: bold;
`;

const PostTime = styled.div`
  color: #a1a1a1;
  font-size: 0.875rem;
`;

const PostContent = styled.div`
  margin-top: 1rem;
  color: #d1d1d1;
`;

const PostFooter = styled.div`
  margin-top: 1rem;
  color: #a1a1a1;
  font-size: 0.875rem;
`;

const CreatePostContainer = styled.div`
  background-color: #1f1f1f;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  color: #ffffff;
`;
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #ffffff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

export {
  Container,
  Form,
  Title,
  Input,
  Button,
  Link,
  CloseButton,
  Overlay,
  ModalContainer,
  PostContainer,
  PostHeader,
  UserInfo,
  UserAvatar,
  UserName,
  PostTime,
  PostContent,
  PostFooter,
  CreatePostContainer,
  InputArea,
    LoaderWrapper,
    Spinner
};
