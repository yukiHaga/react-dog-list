import styled from "styled-components";
import {
  TwoColumnFlexContainer,
  TwoColumnPageContents,
  TwoColumnSide,
} from "./TwoColumnFlexContainer";

const MenuHeader = styled.h3`
  background-color: #594639;
  color: #fff;
  text-align: center;
  padding: 8px;
`;

// メニューは増える前提だから、増えてもhtmlをあまり書き換えなくても良いよう、骨格を作っておく。拡張しやすいコード。
const MenuList = styled.div``;

const MenuItem = styled.div``;

const MenuImg = styled.img`
  width: 100%;
  height: 200px;
  @media (min-width: 992px) {
    height: 400px;
  }
  object-fit: cover;
`;

const MenuTitle = styled.h3`
  font-weight: bold;
`;

const Related = styled.div``;

const CardLink = styled.a`
  color: inherit;
  text-decoration: none;
  text-align: center;
  &:hover {
    opacity: 0.8;
  }
`;

const CardImg = styled.img`
  display: block;
  margin: 0 auto;
`;

const CardTitle = styled.p`
  margin-top: 0;
  font-weight: bold;
`;

const Menu = () => {
  return (
    <TwoColumnFlexContainer>
      <TwoColumnPageContents>
        <MenuHeader>MENU</MenuHeader>
        <MenuList>
          <MenuItem>
            <MenuImg src={`${process.env.PUBLIC_URL}/pancake.jpeg`} />
            <MenuTitle>幸せのパンケーキセット ¥780（税込）</MenuTitle>
          </MenuItem>
        </MenuList>
      </TwoColumnPageContents>
      <TwoColumnSide>
        <aside>
          <Related>
            <CardLink href="/#">
              <CardImg src={`${process.env.PUBLIC_URL}/online-store.jpeg`} />
              <CardTitle>Y's cafe オンラインストア</CardTitle>
            </CardLink>
            <CardLink href="/#">
              <CardImg src={`${process.env.PUBLIC_URL}/online-store.jpeg`} />
              <CardTitle>Y's cafe オンラインストア</CardTitle>
            </CardLink>
            <CardLink href="/#">
              <CardImg src={`${process.env.PUBLIC_URL}/online-store.jpeg`} />
              <CardTitle>Y's cafe オンラインストア</CardTitle>
            </CardLink>
          </Related>
        </aside>
      </TwoColumnSide>
    </TwoColumnFlexContainer>
  );
};

export default Menu;
