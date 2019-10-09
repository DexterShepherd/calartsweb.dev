import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Container>
      <Header>
        <Title>Media and Web Development</Title>
        <Subtitle>
          <em>ICOM-101 / MTEC-617</em>
        </Subtitle>
        <p>Wednesday 2 - 4 | MachineLab ( B214a )</p>
      </Header>
      <Section>
        <Subtitle>Syllabus</Subtitle>
        <Link to="/syllabus">Syllabus</Link>
      </Section>
      <Section>
        <Subtitle>Slides</Subtitle>
        <Slides>
          <li>
            <SlideLink to="/week1">Week 1</SlideLink>
            <SlideDesc>
              <em>Welcome to the course!</em>
            </SlideDesc>
          </li>
          <li>
            <SlideLink to="/week2">Week 2</SlideLink>
            <SlideDesc>
              <em>Intro to HTML!</em>
              <p>
                <a href="https://youtu.be/NeJQqitDn1k">Video Lecture</a>
              </p>
              <p>
                <a href="https://loom.com/share/folder/99bbe8896bc54a3b8605dc1da8b5a506">feedback videos!</a>
              </p>
            </SlideDesc>
          </li>
          <li>
            <ExternalSlideLink href="http://dexterjshepherd.com/ICOM-101/week-3/#/">Week 3</ExternalSlideLink>
            <SlideDesc>
              <em>Intro to CSS!</em>
              <p>
                <a href="https://www.loom.com/share/df454fb9028f41d397f453eb8b92b8b4">Video Lecture</a>
              </p>
              <p>
                <a href="https://loom.com/share/folder/46828e76393b4955816877df5f8172c7">feedback videos!</a>
              </p>
            </SlideDesc>
          </li>
          <li>
            <SlideDesc>
              <em>Floats, Display Type, and Position</em>
              <p>
                <a href="https://www.youtube.com/watch?v=4Y9Oo4p26Vs">Video Lecture</a>
              </p>
            </SlideDesc>
          </li>
          <li>
            <ExternalSlideLink href="http://dexterjshepherd.com/ICOM-101/week-4/#/">Week 5</ExternalSlideLink>
            <SlideDesc>
              <em>FlexBox</em>
            </SlideDesc>
          </li>
        </Slides>
      </Section>
    </Container>
  )
}

const Header = styled.div`
  padding-bottom: 8px;
  border-bottom: 1px solid black;
`
const Container = styled.div`
  padding: 16px;
`

const Section = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid black;
`

const SlideLink = styled(Link)`
  display: inline-block;
  margin-bottom: 4px;
`

const ExternalSlideLink = styled.a`
  display: inline-block;
  margin-bottom: 4px;
`

const SlideDesc = styled.p`
  margin: 0;
  padding: 0;
`

const Slides = styled.ul`
  li {
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid #a1a1a1;
  }
`

const Subtitle = styled.h3`
  margin-top: 0;
`

const Title = styled.h1``

export default Home
