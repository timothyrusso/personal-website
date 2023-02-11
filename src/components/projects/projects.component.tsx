import { ProjectsComponent, ProjectsGrid, ProjectCard, ProjectDescription, ProjectEnding, Link } from "./projects.style";

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
                <ProjectEnding>More projects available on my <Link href="https://github.com/timothyrusso" target='_blank'>GitHub</Link> profile.</ProjectEnding>
            </ProjectsGrid>
        </ProjectsComponent>
    )
}