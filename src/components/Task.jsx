import styled from "styled-components";
import deleteImg from "../assets/images/delete.svg";

function Task({ children, onDeleteTask, projectId, taskId, ...props }) {
  return (
    <FormStyled {...props}>
      <p>{children}</p>
      <img onClick={() => onDeleteTask(projectId, taskId)} src={deleteImg} />
    </FormStyled>
  );
}

{
  /* PROJECT STYLES - STYLED COMPONENTS */
}
const FormStyled = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  & p {
    font-size: 2rem;
    padding: 1rem;
    border-bottom: 1px solid grey;
    border-radius: 0.4rem;
  }

  & img {
    width: 2rem;
    filter: brightness(0) saturate(100%) invert(27%) sepia(87%) saturate(2322%)
      hue-rotate(343deg) brightness(111%) contrast(88%);
    transition: transform 0.2s;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;

export default Task;
