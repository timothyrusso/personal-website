import { useContext } from 'react';
import styled from 'styled-components';
import { DarkModeContext } from '../../contexts/dark-mode-context';

export const Projects = styled.section`
  margin-bottom: 35px;
`;

export const ProjectsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  list-style-type: none;
  gap: 20px;
  padding: 0;
  margin-bottom: 0;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export const ProjectEnding = styled.div`
  margin-top: 20px;
  padding: 0;
`;

export const Link = styled.a.attrs(() => {
  const { darkMode } = useContext(DarkModeContext);
  return { darkMode };
})`
  color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
  &:hover {
    cursor: pointer;
    color: ${({ darkMode }) => (darkMode ? 'hsl(166.6 100% 37.72%)' : 'white')};
  }
`;

export const IconLink = styled.a`
  align-self: center;
  margin-top: 25px;
  margin-left: 10px;
  max-height: 25px;
  &:hover {
    cursor: pointer;
  }
  img {
    max-width: 25px;
    max-height: 25px;
  }
`;
