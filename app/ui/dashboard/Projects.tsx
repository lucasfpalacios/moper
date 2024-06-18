import React from "react"
import '../styles/Projects.css'
import { ChakraProvider } from '@chakra-ui/react'
import Image from "next/image"

interface Projects{
  title: string
  description: string
}

const Projects: React.FC<Projects> = ({title, description}) => {
  return(
    <div>
      <div className="project">
        <h1>
          Proyecto San Nicolas
        </h1>
        <p className="description">
          Es un proyecto dedicado a la industria de artefactatos de iluminación
        </p>
        <Image className="project_img" src={"/assets/san-nicolas-img.png"} alt={"San Nicolas"} width={500} height={500} />
      </div>
    </div>
  )
}

export default Projects;