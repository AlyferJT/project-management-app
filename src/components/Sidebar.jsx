import styled from "styled-components";

import ProjectButton from "./ProjectButton";
import Button from "./Button.jsx";

function Sidebar({ projectList, onSelect, onProjectAdd }) {
  return (
    <>
      <MenuStyled>
        <Button onClick={onProjectAdd} className="addBtn">
          Add project
        </Button>
        <h2>Your projects</h2>
        <section className="projectList">
          {projectList.map((project, index) => {
            return (
              <ProjectButton
                onClick={() => {
                  onSelect(index);
                }}
                id={index}
                key={index}
              >
                {project.projectName}
              </ProjectButton>
            );
          })}
        </section>
      </MenuStyled>
    </>
  );
}

{
  /* PROJECT STYLES - STYLED COMPONENTS */
}
const MenuStyled = styled.menu`
  height: 97vh;
  width: 36%;
  background-color: rgba(0, 0, 0, 80%);
  border-radius: 0 3rem 3rem 0;
  padding: 2rem;
  font-family: "Source Code Pro", monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: #9c9a9a;

  & h2 {
    margin-top: 2rem;
    font-size: 2.5rem;
    border-bottom: 1px solid #9c9a9a;
    padding-bottom: 1rem;
  }

  & .projectList {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 540px) {
    border-radius: 0 0 3rem 3rem;
    width: 100%;
    min-height: 2rem;
  }
`;

export default Sidebar;
