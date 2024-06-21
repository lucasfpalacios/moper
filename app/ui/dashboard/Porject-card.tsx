import { Card, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Link } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import Image from 'next/image'
import '../styles/Project-card.css'

interface ProjectCard {
  title: string
  description: string
}


const ProjectCard = ({}) => {
  return(
    <>
      <Card className='card-project p-5'>
        <CardBody>
          <Image
            className='card-image'
            src='/assets/3D-img.png'
            alt='Green double couch with wooden legs'
            width={600}
            height={600}
          />
          <Stack mt='6' spacing='3'>
            <Heading className='title' size='lg'>Proyecto 3D</Heading>
            <Text className='description'>
              Realizamos un planeamiento a travez de la incorporación de impresiones de piezas 3D
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Button className='card-button mt-5 p-3'>
          <Link href='#'>
            VER MÁS
          </Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default ProjectCard;