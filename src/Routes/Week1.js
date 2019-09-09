import React from 'react'
import { Slideshow, Slide } from '../components/Slideshow'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import * as img from '../assets/week-1'

const Week1 = () => (
  <Slideshow>
    <Slide>
      <VertCenter>
        <Title>Welcome!</Title>
        <Subtitle>Media and Web Development</Subtitle>
        <Text>
          <em>ICOM-101 / MTEC-617</em>
        </Text>
      </VertCenter>
    </Slide>
    <Slide>
      <TextCenter>
        <Title>Dexter</Title>
        <Subtitle>He / Him / His</Subtitle>
        <Text>
          <a href="mailto:dextershepherd@calarts.edu">dextershepherd@calarts.edu</a>
        </Text>
        <Text>Artist working with Web Technologies</Text>
        <Text>Web Developer @ SandboxVR</Text>
        <Text>Office Hours - by appointment</Text>
      </TextCenter>
    </Slide>
    <Slide>
      <Title>Course Resources</Title>
      <List>
        <Item>
          <Text>
            <Link to="/syllabus">Syllabus</Link>
          </Text>
          <Text>Overview of the course. Week to week schedule is subject to change.</Text>
        </Item>
        <Item>
          <Text>
            <Link to="/">Slides</Link>
          </Text>
          <Text>All course slides will be posted here before class.</Text>
        </Item>
        <Item>
          <Text>Learn</Text>
          <Text>Calarts online learning portal. All assignments are submitted through Learn.</Text>
        </Item>
      </List>
    </Slide>
    <Slide>
      <Title>What we will learn.</Title>
      <List>
        <Item>
          <Text>
            How to <em>build</em> web pages with <strong>HTML</strong>
          </Text>
        </Item>
        <Item>
          <Text>
            How to <em>style</em> web pages with with <strong>CSS</strong>{' '}
          </Text>
        </Item>
        <Item>
          <Text>
            How to add <em>interactivity</em> to web pages with <strong>Javascript</strong>
          </Text>
        </Item>
        <Item>
          <Text>How to host a website with a custom domain name</Text>
        </Item>
      </List>
    </Slide>
    <Slide>
      <Title>What we won't learn.</Title>
      <List>
        <Item>
          <Text>Server Side programming</Text>
        </Item>
        <Item>
          <Text>Advanced Front End Frameworks</Text>
        </Item>
        <Item>
          <Text>Website builders and Content Management Systems</Text>
        </Item>
      </List>
    </Slide>
    <Slide>
      <Title>What are we actually building?</Title>
      <TwoHalvesLayout>
        <Half>
          <img width="80%" src={img.brock} alt="" />
        </Half>
        <Half>
          <Subtitle>Simple Static Sites</Subtitle>
          <Text>Sites that act as a hub for content, but don't always host the content themselves.</Text>

          <Text>
            We are less interested in building fully featured, rich media browsing portfolios, and more concerned with
            creating useful directories linking to content around the web.
          </Text>
        </Half>
      </TwoHalvesLayout>
    </Slide>
    <Slide>
      <VertCenter>
        <Title>Web Fundamentals.</Title>
      </VertCenter>
    </Slide>
    <Slide>
      <VertCenter>
        <Title>Visiting a website</Title>
      </VertCenter>
    </Slide>
    <Slide>
      <TopSpacer />
      <TextCenter>
        <Subtitle>You type an address into the browser and hit ENTER.</Subtitle>
      </TextCenter>
      <FlexVertCenter>
        <Emoji src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/129/female-technologist_1f469-200d-1f4bb.png" />
        <Emoji src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/129/male-technologist_1f468-200d-1f4bb.png" />
      </FlexVertCenter>
    </Slide>
    <Slide>
      <TextCenter>
        <Subtitle> Your ISP makes a request to a Domain Name Server ( DNS )</Subtitle>
      </TextCenter>
      <FlexVertCenter>
        <Emoji src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/129/open-book_1f4d6.png" />
      </FlexVertCenter>
      <CenterReadabilityBlock>
        <Text>
          Visiting a website is a lot like calling someone on the phone. Every website on the internet has a unique IP
          Address, like a phone number, that points to the server where that website is being hosted.
        </Text>

        <Text>The DNS acts like your address book and maps website names to website addresses.</Text>

        <Text>If you know the IP address of a website, you can bypass the DNS completely.</Text>
      </CenterReadabilityBlock>
    </Slide>

    <Slide>
      <TopSpacer />
      <TextCenter>
        <Subtitle>The DNS resolves your request</Subtitle>
      </TextCenter>
      <FlexVertCenter>
        <Emoji src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/129/right-pointing-magnifying-glass_1f50e.png" />
      </FlexVertCenter>
      <CenterReadabilityBlock>
        <Text>
          The DNS looks up the domain name you have requested, and returns the IP address of that website to your ISP
        </Text>
      </CenterReadabilityBlock>
    </Slide>
    <Slide>
      <TopSpacer />
      <TextCenter>
        <Subtitle>Your ISP forwards your request to the IP address returned from the DNS</Subtitle>
        <Emoji src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/129/black-rightwards-arrow_27a1.png" />
      </TextCenter>
    </Slide>
    <Slide>
      <TopSpacer />
      <TextCenter>
        <Subtitle>The website you have requested receives your request</Subtitle>
        <Emoji src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/129/open-hands-sign_1f450.png" />
      </TextCenter>
      <CenterReadabilityBlock>
        <Text>Once a web server receives a request, it is expected to generate a response.</Text>
        <List>
          <Item>
            A server at Twitter might dynamically generate your custom homepage and return that as the response.
          </Item>
          <Item>An API endpoint might calculate some data and return it in a machine readable format.</Item>
          <Item>
            A server hosting a static site may just return a prewritten chunk of html ( this is what we are doing! ).
          </Item>
        </List>
      </CenterReadabilityBlock>
    </Slide>
    <Slide>
      <TopSpacer />
      <TextCenter>
        <Subtitle>Your ISP returns the response to YOU</Subtitle>
      </TextCenter>
      <FlexVertCenter>
        <Emoji src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/129/female-technologist_1f469-200d-1f4bb.png" />
        <Emoji src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/129/male-technologist_1f468-200d-1f4bb.png" />
      </FlexVertCenter>
      <CenterReadabilityBlock>
        <Text>The response might be a webpage, a media asset, or some data for the webpage to render.</Text>
      </CenterReadabilityBlock>
    </Slide>
    <Slide>
      <VertCenter>
        <Title>Some key terms...</Title>
      </VertCenter>
    </Slide>
    <Slide>
      <Title>Server</Title>
      <ReadabilityBlock>
        <Text>
          A server is the computer that hosts your website. Servers make the internet work, but in this class we will
          avoid dealing with them directly wherever possible.
        </Text>
      </ReadabilityBlock>
    </Slide>
    <Slide>
      <Title>Client</Title>
      <ReadabilityBlock>
        <Text>
          The client refers to the computer that is visiting your website ( the opposite of the server ). All the code
          we write will be executed on the client.
        </Text>
      </ReadabilityBlock>
    </Slide>
    <Slide>
      <Title>Front End / Back End</Title>
      <Subtitle> Client Side / Server Side</Subtitle>
      <ReadabilityBlock>
        <Text>The front end and back end refer to the client and server side respectively.</Text>

        <Text>ex: "HTML is a front end language"</Text>
      </ReadabilityBlock>
    </Slide>
    <Slide>
      <TextCenter>
        <Subtitle>Week 1 Resources</Subtitle>
      </TextCenter>
      <ReadabilityBlock>
        <List>
          <Item>
            <Text>learn.calarts.edu</Text>
            <Text>
              I will track attendance and homework submission through learn. Make sure you have an account and are
              enrolled in this course.
            </Text>
          </Item>
          <Item>
            <Text>Glitch.me</Text>
            <Text>
              We will start using Glitch to write code next week, take a moment to make an account and get familiar with
              the UI.
            </Text>
          </Item>
          <Item>
            <Text>Codecademy and Freecodecamp</Text>
            <Text>
              This is where I learned to do this stuff. We won't use them in class but if you want to do some self
              directed study these are good starting points.
            </Text>
          </Item>
        </List>
      </ReadabilityBlock>
    </Slide>
  </Slideshow>
)

const FlexVertCenter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
const TwoHalvesLayout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Half = styled.div`
  width: 50%;
`

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
`

const FlexCol = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 6rem;
`

const TextCenter = styled.div`
  text-align: center;
`

const ReadabilityBlock = styled.div`
  max-width: 800px;
  padding: 16px;
  padding-left: 0;
`

const CenterReadabilityBlock = styled(ReadabilityBlock)`
  margin: 0 auto;
`

const VertCenter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Subtitle = styled.h3`
  font-size: 2em;
`
const Text = styled.p`
  font-size: 1.5em;
`

const List = styled.ul``
const Item = styled.li``

const TopSpacer = styled.div`
  width: 100%;
  padding-top: 10%;
`

const Emoji = styled.img`
  padding: 8px;
`

export default Week1
