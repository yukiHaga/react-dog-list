import styled from "styled-components";
import FlexContainer from "./FlexContainer";
import Content from "./Content";
import Menu from "./Menu";

const StyledMain = styled.main`
  flex: 1 0 auto;
`;

const TopImgWrapper = styled.div`
  margin-bottom: 56px;
`;

const TopImg = styled.img`
  width: 100%;
  height: 240px;
  @media (min-width: 992px) {
    height: 240px;
  }
  object-fit: cover;
`;

const Span = styled.span`
  background-color: red;
  width: 100px;
  height: 100px;
`;

// 画面の幅いっぱいに表示したい要素は、コンテナの外側に配置する
const Main = () => {
  return (
    <StyledMain>
      <TopImgWrapper>
        <TopImg src={`${process.env.PUBLIC_URL}/top-image.jpeg`} />
      </TopImgWrapper>
      <FlexContainer>
        <Content />
        <Span>アイウエオ</Span>
      </FlexContainer>
      <Menu />
    </StyledMain>
  );
};

export default Main;
