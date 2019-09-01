import React from 'react'
import { Slideshow, Slide } from '../components/Slideshow'
import styled from 'styled-components'

const Week1 = () => (
  <Slideshow>
    <Slide>
      <Center>
        <Title>Welcome</Title>
        <Subtitle>Media and Web Development</Subtitle>
        <Text>ICOM-101 / MTEC-617</Text>
      </Center>
    </Slide>
    <Slide>
      <Center>
        <Title>Dexter</Title>
        <Subtitle>He / Him / His</Subtitle>
        <Text><a href="mailto:dextershepherd@calarts.edu">dextershepherd@calarts.edu</a></Text>
        <Text>Artist working with Web Technologies</Text>
        <Text>Web Developer @ SandboxVR</Text>
        <Text>Office Hours - by appointment</Text>
      </Center>
    </Slide>
    <Slide>
      <Title>Course Resources</Title>
      <Text>Syllabus</Text>
      <Text>Slides</Text>
      <Text>Learn</Text>
      <Text>Github</Text>
    </Slide>
    <Slide>
      <Title> What this class is?</Title>
    </Slide>
    <Slide>
      <Title> What this class isn't?</Title>
    </Slide>
    <Slide>
      <Title> What are we building?</Title>
    </Slide>
  </Slideshow>
)

const Title = styled.h1``
const Subtitle = styled.h3``
const Text = styled.p``
const Center = styled.div`
  text-align: center;
`

export default Week1
