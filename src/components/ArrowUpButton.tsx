import styled from "styled-components";
import { ArrowUp } from "@styled-icons/bootstrap/ArrowUp";

const Button = styled.button`
  background-color: #333;
  width: fit-content;
  border-radius: 5%;
  position: fixed;
  bottom: 40px;
  right: 40px;
`;

const StyledArrowUp = styled(ArrowUp)`
  color: #fff;
`;

const ArrowUpButton = () => {
  const handleClick = () => {
    window.location.href = "/#top";
  };
  return (
    <Button onClick={handleClick}>
      <StyledArrowUp size="32" />
    </Button>
  );
};

export default ArrowUpButton;
