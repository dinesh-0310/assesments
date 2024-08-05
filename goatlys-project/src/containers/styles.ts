import styled from "styled-components";

const FeedContainer = styled.div`
  width: 600px;
  margin: 0 auto;
  overflow-y: scroll;
  height: 90vh;
`;

const Header = styled.h1`
  color: #ffffff;
  text-align: left;
  margin-bottom: 1rem;
`;

const SubHeader = styled.p`
  color: #d1d1d1;
  text-align: left;
  margin-bottom: 2rem;
`;

export { FeedContainer, Header, SubHeader };
