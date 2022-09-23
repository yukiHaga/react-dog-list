import { ReactNode } from "react";
import styled from "styled-components";

// max-widthで、要素がこれ以上大きくならない最大の幅を指定できる。widthを指定したわけではない。
export const Container = styled.div`
  max-width: 1110px;
  padding: 0 15px;
  margin: 0 auto;
`;

export type Props = {
  children: ReactNode;
};

const FlexContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default FlexContainer;
