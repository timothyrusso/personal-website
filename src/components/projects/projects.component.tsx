import { ProjectsComponent, ProjectsGrid, ProjectCard, ProjectDescription } from "./projects.style";

export const Projects = () => {
    return (
        <ProjectsComponent>
            <h2>Projects</h2>
            <ProjectsGrid>
                <ProjectCard>
                    <h3>Titolo</h3>
                    <ProjectDescription>Descrizione</ProjectDescription>
                </ProjectCard>
                <ProjectCard>
                    <h3>Titolo</h3>
                    <ProjectDescription>Descrizione</ProjectDescription>
                </ProjectCard>
                <ProjectCard>
                    <h3>Titolo</h3>
                    <ProjectDescription>Descrizione</ProjectDescription>
                </ProjectCard>
                <ProjectCard>
                    <h3>Titolo</h3>
                    <ProjectDescription>Descrizione</ProjectDescription>
                </ProjectCard>
            </ProjectsGrid>
        </ProjectsComponent>
    )
}