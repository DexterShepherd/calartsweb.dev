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
              <em>Introduction</em>
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

const SlideDesc = styled.p`
  margin: 0;
  padding: 0;
`

const Slides = styled.ul``

const Subtitle = styled.h3`
  margin-top: 0;
`

const Title = styled.h1``

export default Home
