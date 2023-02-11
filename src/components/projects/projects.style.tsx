import styled from "styled-components";

export const ProjectsComponent = styled.section`
  margin-bottom: 0;
`

export const ProjectsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(400px, 1fr));
  list-style-type: none;
  gap: 20px;
  padding: 0;
  margin-bottom: 0;
`

export const ProjectCard = styled.li`
  border: 2px solid black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 20px;
  &:hover {
    color: white;
    cursor: pointer;
    border-color: white;
  }
`

export const ProjectDescription = styled.p`
  margin-top: 0;
`

export const ProjectEnding = styled.p`
  margin: 0;
`

export const Link = styled.a`
  color: black;
  &:hover {
    color: white;
  }
`