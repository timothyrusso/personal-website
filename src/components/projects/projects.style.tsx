import styled from "styled-components";

export const ProjectsComponent = styled.section`
  margin-bottom: 35px;;
`

export const ProjectsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(400px, 1fr));
  list-style-type: none;
  gap: 20px;
  padding: 0;
  margin-bottom: 0;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat( auto-fit, minmax(300px, 1fr));
}
`

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

export const ProjectEnding = styled.li`
  margin: 0;
  list-style-type: none;
  padding: 0;
`

export const Link = styled.a`
  color: black;
`

export const ProjectLink = styled.a`
  color: black;
  text-decoration: none;
`