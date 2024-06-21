import React from "react"
import '../styles/Projects.css'
import ProjectCard from "./Porject-card"


interface Projects{
  title: string
  description: string
}

const Projects: React.FC<Projects> = ({}) => {
  return(
    <div className="project">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  )
}

export default Projects;