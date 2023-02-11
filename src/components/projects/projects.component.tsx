import { ProjectsComponent, ProjectsGrid, ProjectCard, ProjectTitle } from "./projects.style";

export const Projects = () => {
    return (
        <ProjectsComponent>
            <h2>Projects</h2>
            <ProjectsGrid>
                <ProjectCard>
                    <ProjectTitle>Titolo</ProjectTitle>
                    <p>Descrizione</p>
                </ProjectCard>
                <ProjectCard>
                    <ProjectTitle>Titolo</ProjectTitle>
                </ProjectCard>
                <ProjectCard>
                    <ProjectTitle>Titolo</ProjectTitle>
                </ProjectCard>
            </ProjectsGrid>
        </ProjectsComponent>
    )
}