import { useState } from "react";
import styled from "styled-components";

import Sidebar from "./components/Sidebar";
import ProjectView from "./components/ProjectView";

const defaultProjectList = [
  {
    projectName: "One project",
    projectDescription: "This project is a must",
    taskList: ["First task", "Second task", "Third task"],
  },
  {
    projectName: "Another project",
    projectDescription: "This project is a must too",
    taskList: ["First task", "Second task", "Third task"],
  },
];

function App() {
  const [projectList, setProjectList] = useState(defaultProjectList);
  const [selectedProject, setSelectedProject] = useState("");
  const [isProjectAdd, setIsProjectAdd] = useState(false);

  {
    /* SET THE SELECTED PROJECT TO IT'S STATE */
  }
  function selectProject(projectId) {
    setIsProjectAdd(false);
    setSelectedProject(projectId);
  }

  {
    /* HANDLE ADD PROJECT TO THE PROJECT LIST */
  }

  function handleCreateProject(projectName, projectDescription) {
    setProjectList((prevProjectList) => {
      const newProjectList = [
        ...prevProjectList,
        {
          projectName: projectName,
          projectDescription: projectDescription,
          taskList: [],
        },
      ];

      return newProjectList;
    });
    setIsProjectAdd(false);
    setSelectedProject("");
  }

  {
    /* HANDLE DELETE A PROJECT WHEN DELETE PROJECT IS PRESSED */
  }
  function handleDeleteProject(projectId) {
    setSelectedProject("");

    setProjectList((prevProjectList) => {
      const newProjectList = [...prevProjectList];
      newProjectList.splice(projectId, 1);

      return newProjectList;
    });
  }

  {
    /* HANDLE ADD TASK TO A PROJECT */
  }
  function handleAddTask(projectId, newTask) {
    setProjectList((prevProjectList) => {
      const newProjectList = [...prevProjectList];
      const newTaskId = newProjectList[projectId].taskList.length;

      newProjectList[projectId].taskList[newTaskId] = newTask;

      return newProjectList;
    });
  }

  {
    /* HANDLE DELETE TASK FROM A PROJECT */
  }
  function handleDeleteTask(projectId, taskId) {
    setProjectList((prevProjectList) => {
      const newProjectList = [...prevProjectList];
      newProjectList[projectId].taskList.splice(taskId, 1);
      return newProjectList;
    });
  }

  return (
    <>
      {/*welcome && <Welcome onHide={handleHideWelcome} />*/}
      <Main>
        <Sidebar
          onProjectAdd={() => {
            setIsProjectAdd(true);
          }}
          onSelect={selectProject}
          projectList={projectList}
        />
        <ProjectView
          projectName={
            selectedProject !== "" && projectList[selectedProject].projectName
          }
          projectDescription={
            selectedProject !== "" &&
            projectList[selectedProject].projectDescription
          }
          taskList={
            selectedProject !== "" && projectList[selectedProject].taskList
          }
          selectedProjectView={selectedProject}
          onProjectCreate={handleCreateProject}
          onDeleteProject={handleDeleteProject}
          onAddTask={handleAddTask}
          onDeleteTask={handleDeleteTask}
          isAddingProject={isProjectAdd}
        />
      </Main>
    </>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  @media (max-width: 540px) {
    min-height: 100vh;
    flex-direction: column;
  }
`;

export default App;
