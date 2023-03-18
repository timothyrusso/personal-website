import { Projects, ProjectsGrid, ProjectEnding, Link } from './projects.style';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { projects } from '../../utils/constants';
import { FC } from 'react';

export type ProjectsComponentProps = {
  isOn: boolean;
};

export const ProjectsComponent: FC<ProjectsComponentProps> = ({ isOn }) => {
  return (
    <Projects>
      <h2>Projects</h2>
      <ProjectsGrid>
        {projects.map((project) => {
          return (
            <ProjectCardComponent
              key={project.id}
              title={project.title}
              link={project.link}
              description={project.description}
              isOn={isOn}
            />
          );
        })}
      </ProjectsGrid>
      <ProjectEnding>
        More projects available on my{' '}
        <Link
          href="https://github.com/timothyrusso"
          target="_blank"
          isOn={isOn}
        >
          GitHub
        </Link>{' '}
        profile.
      </ProjectEnding>
    </Projects>
  );
};
