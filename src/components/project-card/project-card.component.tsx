import {
  ProjectCard,
  ProjectDescription,
  ProjectTitle,
  ProjectLink,
} from './project-card.style';
import { FC } from 'react';

type ProjectCardComponentProps = {
  title: string;
  link: string;
  description: string;
  isOn: boolean;
};

export const ProjectCardComponent: FC<ProjectCardComponentProps> = ({
  title,
  link,
  description,
  isOn,
}) => {
  return (
    <ProjectCard isOn={isOn}>
      <ProjectLink href={link} target="_blank" isOn={isOn}>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
      </ProjectLink>
    </ProjectCard>
  );
};
