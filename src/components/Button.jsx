import styled from "styled-components";

export default function Button({ children, ...props }) {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  font-family: "Arial";
  font-weight: bold;
  margin-top: 1rem;
  padding: 0.6rem 3rem;
  background-color: rgba(0, 0, 0, 0%);
  border-radius: 0.5rem;
  transition: color 0.2s ease-out, border 0.2s ease-out;

  &.deleteBtn {
    margin-top: 2rem;
    padding: 0.7rem 2rem;
    background-color: rgba(0, 0, 0, 0%);
    border: 1px solid rgb(120, 0, 0);
    color: rgb(120, 0, 0);
    transition: color 0.3s, border 0.3s;
    border-radius: 0.5rem;
    font-weight: bold;

    &:hover {
      cursor: pointer;
      color: red;
      border: 1px solid red;
    }
  }

  &.addBtn {
    border: 1px solid #325e2a;
    color: #325e2a;

    &:hover {
      cursor: pointer;
      border: 1px solid green;
      color: green;
    }
  }
`;
