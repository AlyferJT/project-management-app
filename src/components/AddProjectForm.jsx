import styled from "styled-components";

import Button from "./Button.jsx";
import { useRef } from "react";

function AddProjectForm({ onProjectCreate }) {
  const projectName = useRef();
  const projectDesc = useRef();

  function handleClick(event) {
    event.preventDefault();
    onProjectCreate(projectName.current.value, projectDesc.current.value);
  }

  {
    /* THIS IS THE FORM THAT IS SHOWN WHEN ADDING A PROJECT */
  }
  return (
    <FormStyled>
      <input ref={projectName} placeholder="Project title" type="text" />
      <textarea ref={projectDesc} placeholder="Project description" />
      <Button className="addBtn" onClick={handleClick}>
        Submit project
      </Button>
    </FormStyled>
  );
}

{
  /* PROJECT STYLES - STYLED COMPONENTS */
}
const FormStyled = styled.form`
  width: 100%;
  heigth: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Arial";

  & input {
    font-family: "Arial";
    padding: 1rem;
    background: none;
    border: 1px solid grey;
    border-radius: 0.5rem;
    color: grey;
    min-width: 20rem;
    max-width: 20rem;
    transition: all 0.1s;

    &:focus {
      color: white;
    }
  }

  & textarea {
    font-family: "Arial";
    margin-top: 1rem;
    padding: 1rem;
    background: none;
    border: 1px solid grey;
    border-radius: 0.5rem;
    color: grey;
    min-width: 20rem;
    max-width: 20rem;
    min-height: 10rem;
    max-height: 25rem;
    transition: all 0.1s, height 0;

    &:focus {
      color: white;
    }
  }
`;

export default AddProjectForm;
