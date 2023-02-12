import { ProjectsComponent, ProjectsGrid, ProjectCard, ProjectTitle, ProjectDescription, ProjectEnding, Link, ProjectLink } from "./projects.style";

export const Projects = () => {
    return (
        <ProjectsComponent>
            <h2>Projects</h2>
            <ProjectsGrid>
                <ProjectCard>
                    <ProjectLink href="https://github.com/timothyrusso/crwn-clothing" target='_blank'>
                        <ProjectTitle>crwn-clothing</ProjectTitle>
                        <ProjectDescription>Ecommerce web application made with React.js, Typescript, Redux and Firebase</ProjectDescription>
                    </ProjectLink>
                </ProjectCard>
                <ProjectCard>
                    <ProjectLink href="https://github.com/timothyrusso/news-explorer-frontend" target='_blank'>
                        <ProjectTitle>news-explorer</ProjectTitle>
                        <ProjectDescription>Full stack application where users can search news from a public API and save them in their profiles</ProjectDescription>
                    </ProjectLink>
                </ProjectCard>
                <ProjectCard>
                    <ProjectLink href="https://github.com/timothyrusso/react-around-api-full" target='_blank'>
                        <ProjectTitle>react-around</ProjectTitle>
                        <ProjectDescription>Social network full stack application where users can share, add, remove, or like photos</ProjectDescription>
                    </ProjectLink>
                </ProjectCard>
                <ProjectCard>
                    <ProjectLink href="https://github.com/timothyrusso/web_project_1" target='_blank'>
                        <ProjectTitle>learning-how-to-learn</ProjectTitle>
                        <ProjectDescription>Landing page with some cool css effects</ProjectDescription>
                    </ProjectLink>
                </ProjectCard>
                <ProjectEnding>More projects available on my <Link href="https://github.com/timothyrusso" target='_blank'>GitHub</Link> profile.</ProjectEnding>
            </ProjectsGrid>
        </ProjectsComponent>
    )
}