import styled from "styled-components";

export const ProjectCard = styled.li`
  border: 2px solid black;
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding: 0 20px;
  min-height: 138px;
  &:hover {
    cursor: pointer;
    border-color: white;
  }
`
export const ProjectLink = styled.a`
  color: black;
  text-decoration: none;
`

export const ProjectTitle = styled.h3`
  margin-bottom: 10px;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`

export const ProjectDescription = styled.p`
  margin-top: 0;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`