import React from 'react'
import ProjectCard from '../common/ProjectCard/index'
import { cardDetailObjOne, cardDetailObjThree, cardDetailObjTwo } from '../common/ProjectCard/Data'
import { ProjectsBg, ProjectsCards, ProjectsContainer, ProjectsTitle } from './projectsElements'
const Projects = () => {
  return (
    <ProjectsContainer id="projects">
        <ProjectsBg>
          <ProjectsTitle>My Projects</ProjectsTitle>
          <ProjectsCards>
            <ProjectCard {...cardDetailObjOne}/>
            <ProjectCard {...cardDetailObjTwo}/>
            <ProjectCard {...cardDetailObjThree}/>
          </ProjectsCards>
        </ProjectsBg>
    </ProjectsContainer>
  )
}

export default Projects