import styled from 'styled-components';

export type ProjectLinkProps = {
  darkMode: boolean;
};

export type ProjectCardProps = {
  darkMode: boolean;
};

export const ProjectCard = styled.li<ProjectCardProps>`
  border: 2px solid ${({ darkMode }) => (darkMode ? 'white' : 'black')};
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding: 0 20px;
  min-height: 138px;
  &:hover {
    cursor: pointer;
    border-color: ${({ darkMode }) =>
      darkMode ? 'hsl(166.6 100% 37.72%)' : 'white'};
  }
`;
export const ProjectLink = styled.a<ProjectLinkProps>`
  color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
  text-decoration: none;
  min-height: 138px;
`;

export const ProjectTitle = styled.h3`
  margin-bottom: 10px;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;

export const ProjectDescription = styled.p`
  margin-top: 0;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;
