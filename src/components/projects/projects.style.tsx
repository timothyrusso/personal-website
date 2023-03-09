import styled from "styled-components";

export type LinkProps = {
  isOn: boolean;
}

export const Projects = styled.section`
  margin-bottom: 35px;;
`

export const ProjectsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(400px, 1fr));
  list-style-type: none;
  gap: 20px;
  padding: 0;
  margin-bottom: 0;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat( auto-fit, minmax(300px, 1fr));
}
`

export const ProjectEnding = styled.div`
  margin-top: 20px;
  padding: 0;
`

export const Link = styled.a<LinkProps>`
  color: ${({ isOn }) => isOn ? 'white' : 'black'};
  &:hover {
    cursor: pointer;
    color: ${({ isOn }) => isOn ? 'hsl(166.6 100% 37.72%)' : 'white'};
  }
`