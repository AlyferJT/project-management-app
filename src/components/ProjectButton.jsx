import styled from "styled-components";

function ProjectButton({ children, ...props }) {
  return (
    <>
      <ButtonStyled {...props}>{children}</ButtonStyled>
    </>
  );
}

{
  /* PROJECT STYLES - STYLED COMPONENTS */
}
const ButtonStyled = styled.button`
  padding: 1rem 2rem;
  background-color: rgba(0, 0, 0, 0%);
  border: none;
  margin-top: 1rem;
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 1.4rem;
  color: #9c9a9a;
  transition: color 0.2s, background-color 0.2s;

  &:first-of-type {
    margin: 0;
  }

  &:hover {
    background-color: #505250;
    color: white;
    cursor: pointer;
  }
`;

export default ProjectButton;
