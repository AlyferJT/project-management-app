import { useRef } from "react";
import styled from "styled-components";

export default function ProjectAddTask({ onAddTask, projectId }) {
  const input = useRef();

  function handleClick() {
    if (input.current.value !== "") {
      onAddTask(projectId, input.current.value);
      input.current.value = "";
    }
  }

  return (
    <FormStyled onSubmit={(event) => event.preventDefault()}>
      <input ref={input} placeholder="Type your task here..."></input>
      <button onClick={handleClick}>Add task</button>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;

  & input {
    padding: 1rem;
    border: 1px solid #9c9a9a;
    outline: none;
    border-radius: 0.5rem;
    background-color: rgba(0, 0, 0, 0%);
    color: #9c9a9a;
    transition: color 0.2s, border 0.2s;
    &:focus {
      border: 1px solid white;
      color: white;
    }
  }
  & button {
    margin-top: 0.5rem;
    padding: 1rem;
    border: 1px solid #9c9a9a;
    color: #9c9a9a;
    border-radius: 0.5rem;
    background: none;
    transition: color 0.2s, border 0.2s;
    &:hover {
      cursor: pointer;
      border: 1px solid white;
      color: white;
    }
  }
`;
