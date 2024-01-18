import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import goose from '../assets/goose.jpeg'

const Projects = () => {
  return (
    <div className='mx-10 p-10'>
      <Carousel variant='dark'>
        <Carousel.Item>
          <h1>Project1</h1>
          <img src={goose} />
        </Carousel.Item>
        <Carousel.Item>
          <h1>Project2</h1>
          <img src={goose} />
        </Carousel.Item>
        <Carousel.Item>
          <h1>Project3</h1>
          <img src={goose} />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Projects
