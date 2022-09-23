import styled from "styled-components";
import FlexContainer from "./FlexContainer";

const StyledFooter = styled.footer`
  background-color: #333c5e;
  padding: 15px 0;
`;

const AnnotationWrapper = styled.div`
  text-align: center;
`;

const Annotation = styled.small`
  color: #fff;
  font-size: 12px;
  @media (min-width: 992px) {
    font-size: 15px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FlexContainer>
        <AnnotationWrapper>
          <Annotation>(c) 2020 Y's cafe All Rights Reserved.</Annotation>
        </AnnotationWrapper>
      </FlexContainer>
    </StyledFooter>
  );
};

export default Footer;
