import styled from "styled-components";
import { Container, Props } from "./FlexContainer";

// パソコン向けのスタイルだけ、メディアクエリを使って2カラムにするためのスタイルを追加する
const TwoColumnContainer = styled(Container)`
  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
  }
`;

const PageContents = styled.section`
  /* flex-basisに745pxを指定。普通にwidth: 745pxと指定しても良い */
  @media (min-width: 992px) {
    flex: 0 0 745px;
  }
`;

const Side = styled.div`
  @media (min-width: 992px) {
    flex: 0 0 300px;
  }
`;

export const TwoColumnPageContents = ({ children }: Props) => {
  return <PageContents>{children}</PageContents>;
};

export const TwoColumnSide = ({ children }: Props) => {
  return <Side>{children}</Side>;
};

export const TwoColumnFlexContainer = ({ children }: Props) => {
  return <TwoColumnContainer>{children}</TwoColumnContainer>;
};
