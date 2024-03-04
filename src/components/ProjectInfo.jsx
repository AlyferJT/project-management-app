import styled from "styled-components";

import Button from "./Button";
import ProjectAddTask from "./ProjectAddTask";

function ProjectInfo({
  projectName,
  projectDescription,
  selectedProjectView,
  onDeleteProject,
  onAddTask,
}) {
  {
    /* THIS IS THE PROJECT INFO THAT IS SHOWN WHEN YOU SELECT A PROJECT IN THE SIDEBAR */
  }
  return (
    <MenuStyled>
      <h4>{projectName}</h4>
      <p>{projectDescription}</p>
      <Button
        onClick={() => onDeleteProject(selectedProjectView)}
        className="deleteBtn"
      >
        Delete project
      </Button>
      <ProjectAddTask projectId={selectedProjectView} onAddTask={onAddTask} />
    </MenuStyled>
  );
}

{
  /* PROJECT STYLES - STYLED COMPONENTS */
}
const MenuStyled = styled.menu`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
  justify-content: center;

  & h4 {
    font-size: 2.4rem;
    border-bottom: 1px solid grey;
  }

  & p {
    margin-top: 2rem;
    font-size: 1.3rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
    border-bottom: 1px solid grey;
    padding-bottom: 3rem;
    margin-bottom: 2rem;
  }
`;

export default ProjectInfo;
