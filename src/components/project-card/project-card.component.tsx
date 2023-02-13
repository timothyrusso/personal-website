import { ProjectCard, ProjectDescription, ProjectTitle, ProjectLink } from "./project-card.style";
import { FC } from "react";

type ProjectCardComponentProps = {
    title: string;
    link: string;
    description: string;
}

export const ProjectCardComponent: FC<ProjectCardComponentProps> = ({ title, link, description }) => {
    return (
        <ProjectCard>
            <ProjectLink href={link} target='_blank'>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectDescription>{description}</ProjectDescription>
            </ProjectLink>
        </ProjectCard>
    )
}