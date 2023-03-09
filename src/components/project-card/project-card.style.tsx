import styled from "styled-components";

export type ProjectLinkProps = {
  isOn: boolean;
}

export type ProjectCardProps = {
  isOn: boolean;
}

export const ProjectCard = styled.li<ProjectCardProps>`
  border: 2px solid ${({ isOn }) => isOn ? 'white' : 'black'};
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding: 0 20px;
  min-height: 138px;
  &:hover {
    cursor: pointer;
    border-color: ${({ isOn }) => isOn ? 'hsl(166.6 100% 37.72%)' : 'white'};
  }
`
export const ProjectLink = styled.a<ProjectLinkProps>`
  color: ${({ isOn }) => isOn ? 'white' : 'black'};
  text-decoration: none;
  min-height: 138px;
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