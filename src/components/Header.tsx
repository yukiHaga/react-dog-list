import styled, { css } from "styled-components";
import { Home } from "@styled-icons/boxicons-regular/Home";
import { FoodMenu } from "@styled-icons/boxicons-solid/FoodMenu";
import { AccessTime } from "@styled-icons/fluentui-system-regular/AccessTime";
import FlexContainer from "./FlexContainer";

// デバイスの小さい順にメディアクエリを書く。
// スマホのレイアウトを先に作って、pcはメディアクエリでどうにかする。
// どっちもメディアクエリでスタイルを定義すると、全部に定義する必要があり、無駄が多い。修正も大変。
const StyledHeader = styled.header``;

const Img = styled.img`
  display: block;
  margin: 0 auto;
  width: 160px;
  @media (min-width: 992px) {
    width: 240px;
  }
`;

const Nav = styled.nav``;

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  @media (min-width: 992px) {
    justify-content: center;
  }
  padding: 0;
`;

// リンクは文字の色が勝手に青になってしまうので、inheritを使って防ぐ
// bodyの継承された色を使う
const Link = styled.a`
  text-decoration: none;
  color: inherit;
  list-style: none;
  &:hover {
    opacity: 0.8;
    transition: all 0.3s ease-in-out 0s;
  }
`;

const Li = styled.li`
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-basis: auto;
  @media (min-width: 992px) {
    margin: 0 32px;
  }
`;

const iconStyle = css`
  margin-right: 8px;
`;

const NavHomeIcon = styled(Home)`
  ${iconStyle};
`;

const NavMenuIcon = styled(FoodMenu)`
  ${iconStyle};
`;

const NavAccessIcon = styled(AccessTime)`
  ${iconStyle}
`;

const Header = () => {
  const listContents = [
    ["HOME", <NavHomeIcon size="24" />],
    ["MENU", <NavMenuIcon size="24" />],
    ["ACCESS", <NavAccessIcon size="24" />],
  ];

  return (
    <StyledHeader id="top">
      <FlexContainer>
        <Img src={`${process.env.PUBLIC_URL}/cafe-logo.png`} alt="cafe logo" />
        {/* 文章構造にナビゲーションがあることをマークアップで示す */}
        <Nav>
          <Ul>
            {listContents.map(([text, icon], i) => {
              return (
                <Link href="/#" key={i}>
                  <Li>
                    {icon}
                    {text}
                  </Li>
                </Link>
              );
            })}
          </Ul>
        </Nav>
      </FlexContainer>
    </StyledHeader>
  );
};

export default Header;
