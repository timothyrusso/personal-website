import {
  ProjectCard,
  ProjectDescription,
  ProjectTitle,
  ProjectLink,
} from './project-card.style';
import { FC, useContext } from 'react';
import { DarkModeContext } from '../../contexts/dark-mode-context';

type ProjectCardComponentProps = {
  title: string;
  link: string;
  description: string;
};

export const ProjectCardComponent: FC<ProjectCardComponentProps> = ({
  title,
  link,
  description,
}) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <ProjectCard darkMode={darkMode}>
      <ProjectLink href={link} target="_blank" darkMode={darkMode}>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
      </ProjectLink>
    </ProjectCard>
  );
};
