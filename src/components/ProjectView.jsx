import styled from "styled-components";

import AddProjectForm from "./AddProjectForm.jsx";
import ProjectInfo from "./ProjectInfo.jsx";
import ProjectTasks from "./ProjectTasks.jsx";
import ProjectNoSelect from "./ProjectNoSelect.jsx";

const ProjectView = function ({
  projectName,
  taskList,
  projectDescription,
  selectedProjectView,
  onProjectCreate,
  onDeleteProject,
  onAddTask,
  onDeleteTask,
  isAddingProject,
}) {
  return (
    <SectionStyled>
      {/* SHOW THIS IF A PROJECT IS BEING ADDED */}
      {isAddingProject ? (
        <AddProjectForm onProjectCreate={onProjectCreate} />
      ) : selectedProjectView !== "" ? (
        <>
          {/* SHOW THIS IF A PROJECT IS SELECTED */}
          <ProjectInfo
            projectName={projectName}
            projectDescription={projectDescription}
            selectedProjectView={selectedProjectView}
            onDeleteProject={onDeleteProject}
            onAddTask={onAddTask}
          />
          <ProjectTasks
            projectId={selectedProjectView}
            onDeleteTask={onDeleteTask}
            taskList={taskList}
          />
        </>
      ) : (
        <>
          {/* SHOW THIS IF NO PROJECT IS SELECTED */}
          <ProjectNoSelect />
        </>
      )}
    </SectionStyled>
  );
};

{
  /* PROJECT STYLES - STYLED COMPONENTS */
}
const SectionStyled = styled.section`
  width: 80%;
  height: 97%;
  background-color: rgba(0, 0, 0, 80%);
  border-radius: 3rem 0 0 3rem;
  padding: 3rem;
  color: #9c9a9a;
  display: flex;

  @media (max-width: 1000px) {
    width: 70%;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 540px) {
    border-radius: 3rem 3rem 0 0;
    width: 100%;
    flex-grow: 2;
  }
`;

export default ProjectView;
