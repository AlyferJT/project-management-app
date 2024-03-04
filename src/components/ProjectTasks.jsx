import styled from "styled-components";
import Task from "./Task.jsx";

function ProjectTasks({ taskList, projectId, onDeleteTask }) {
  {
    /* THIS IS THE HANDLER TO THE PROJECT TASK LIST THAT IS SHOWN WITH THE PROJECT INFO */
  }

  return (
    <SectionStyled id="tasks">
      {taskList.length !== 0 ? (
        taskList.map((task, index) => {
          return (
            <Task
              projectId={projectId}
              onDeleteTask={onDeleteTask}
              taskId={index}
              key={index}
            >
              {task}
            </Task>
          );
        })
      ) : (
        <p id="noTask">
          No tasks on the project... Type a task and click on the &apos;Add
          task&apos; button.
        </p>
      )}
    </SectionStyled>
  );
}

{
  /* PROJECT STYLES - STYLED COMPONENTS */
}
const SectionStyled = styled.section`
  margin-left: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & #noTask {
    height: 100%;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: grey;
    text-align: center;
  }
`;

export default ProjectTasks;
