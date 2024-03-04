import styled from "styled-components";

export default function ProjectNoSelect() {
  return (
    <DivStyled id="noProjectSelected">
      <p>Select a project, to view it...</p>
    </DivStyled>
  );
}

{
  /* PROJECT STYLES - STYLED COMPONENTS */
}

const DivStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & p {
    font-size: 2rem;
  }
`;
