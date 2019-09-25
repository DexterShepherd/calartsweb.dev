import React from 'react'
import { Slideshow, Slide } from '../components/Slideshow'
import styled from 'styled-components'
import {
  Title,
  Subtitle,
  Text,
  List,
  Item,
  VertCenter,
  TextCenter,
  ReadabilityBlock,
  CenterReadabilityBlock
} from './UI'
import * as img from '../assets/week-2'

const Week2 = () => {
  return (
    <Slideshow>
      <Slide>
        <VertCenter>
          <Title>Welcome</Title>
          <Subtitle>Media and Web Development</Subtitle>
          <Text>
            <em>Week 2 - Introduction to HTML</em>
          </Text>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <Title>Agenda</Title>
          <List>
            <Item>
              <Text>What is HTML?</Text>
            </Item>
            <Item>
              <Text>The DOM</Text>
            </Item>
            <Item>
              <Text>Elements and Tags</Text>
            </Item>
            <Item>
              <Text>Typography</Text>
            </Item>
            <Item>
              <Text>Layout</Text>
            </Item>
            <Item>
              <Text>The Glitch Environment</Text>
            </Item>
          </List>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <Title>What is HTML?</Title>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <Subtitle>
            HTML <em>(Hyper-Text Markup Language)</em> is the content language of the web.
          </Subtitle>
          <Text>We use html to describe the content on a page.</Text>
          <Text>Text, Images, Links, and Layout are all described using HTML.</Text>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <ReadabilityBlock>
            <Text>
              Of the three languages we will learn this semester. HTML is the most important. You can strip away style
              or interaction and still have a functioning website, but to remove the HTML is to remove the{' '}
              <em>content</em> of the website.
            </Text>
          </ReadabilityBlock>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <Title>The DOM</Title>
          <Subtitle>Document Object Model</Subtitle>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <Title>Elements!</Title>
          <Subtitle>An element is the atomic unit of HTML</Subtitle>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <Subtitle>All web pages start as a collection of elements.</Subtitle>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <img width="70%" src={img.elements} />
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <Subtitle>That was an Image element</Subtitle>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <Subtitle>and that was a Header element</Subtitle>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <Subtitle>
            There are <em>a lot</em> of html elements.
          </Subtitle>
          <Text>Luckily many are redundant, and some are outside the scope of this course.</Text>
          <Text>
            <em>Here are the really important ones...</em>
          </Text>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <List>
            <Item>
              <Text>Heading - Titles and Subtitles ( 6 different levels ).</Text>
            </Item>
            <Item>
              <Text>Paragraph - The basic unit of text.</Text>
            </Item>
            <Item>
              <Text>Anchor - A link to another page.</Text>
            </Item>
            <Item>
              <Text>Image - Renders and Image.</Text>
            </Item>
            <Item>
              <Text>Div - Defines a section on the page.</Text>
            </Item>
            <Item>
              <Text>Span - Defines a section in a block of text.</Text>
            </Item>
            <Item>
              <Text>
                Strong - Defines a section of <strong>strong</strong> text ( usually bold ).
              </Text>
            </Item>
            <Item>
              <Text>
                Emphasis - Defines a section of <em>emphasized</em> text ( usually italic ).
              </Text>
            </Item>
            <Item>
              <Text>List and List Item - Define different types of lists ( This page is a big list :) ).</Text>
            </Item>
          </List>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <TextCenter>
            <Subtitle>With these building blocks we can build almost anything on the web.</Subtitle>
          </TextCenter>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <TextCenter>
            <Title>Elements and Tags in Code</Title>
          </TextCenter>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <TextCenter>
            <Text>
              We define <em>elements</em> in our code with <strong>tags</strong>
            </Text>
          </TextCenter>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <ReadabilityBlock>
            <Text>
              In this class the relationship between tags and elements is largely 1 to 1, but that isn't always the case
              with more advanced usage.
            </Text>
          </ReadabilityBlock>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <ReadabilityBlock>
            <TextCenter>
              <Text>An element usually consists of an opening tag, some content, and a closing tag.</Text>

              <Text style={{ fontSize: '3em' }}>
                <code>{'<p>some text</p>'}</code>
              </Text>
              <Text>This text defines a paragraph element</Text>
            </TextCenter>
          </ReadabilityBlock>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <ReadabilityBlock>
            <TextCenter>
              <Text>An element usually consists of an opening tag, some content, and a closing tag.</Text>

              <Text style={{ fontSize: '3em' }}>
                <code>
                  <Highlight>{'<p>'}</Highlight>
                  {'some text</p>'}
                </code>
              </Text>
              <Text>The opening tag is written with the tag name surrounded by {'< & >'} signs</Text>
            </TextCenter>
          </ReadabilityBlock>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <ReadabilityBlock>
            <TextCenter>
              <Text>Then the content</Text>

              <Text style={{ fontSize: '3em' }}>
                <code>
                  {'<p>'}
                  <Highlight>some text</Highlight>
                  {'</p>'}
                </code>
              </Text>
              <Text>
                The content comes directly after the opening tag. In most cases, content will be plain text, or other
                html elements.
              </Text>
            </TextCenter>
          </ReadabilityBlock>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <ReadabilityBlock>
            <TextCenter>
              <Text>and then the closing tag</Text>

              <Text style={{ fontSize: '3em' }}>
                <code>
                  {'<p>some text'}
                  <Highlight>{'</p>'}</Highlight>
                </code>
              </Text>
              <Text>The tag name preceeded by a slash, inside angle brackets.</Text>
            </TextCenter>
          </ReadabilityBlock>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <TextCenter>
            <Subtitle>HTML has a tree like structure.</Subtitle>
            <Text>This means we can embed tags withing other tags to form complex structures.</Text>
          </TextCenter>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <Text style={{ fontSize: '3em' }}>
            <code>
              <pre>
                {`
        <div>
          <h1>A header</h1>
          <p>Some Content</p>
          <p>
            <em>
              Something
              Emphasized
            </em>
          </p>
        </div>

        `}
              </pre>
            </code>
          </Text>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <ReadabilityBlock>
            <Text>
              Opening tags can also include extra information about the element in the form of <em>Attributes</em>
            </Text>
            <Text>
              We will work more with attributes in the coming weeks, but if you want some extra credit this week a
              couple are available right from the start.
            </Text>
          </ReadabilityBlock>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <ReadabilityBlock>
            <TextCenter>
              <Text>The Anchor tag defines a link between 2 pages.</Text>
            </TextCenter>

            <Text style={{ fontSize: '3em' }}>
              <pre>
                <code>{`
<a href="https://www.google.com">
  A link to google
</a>
                `}</code>
              </pre>
            </Text>
            <TextCenter>
              <Text>
                We can use the <em>href</em> attribute on the anchor tag to define where the link will link to.
              </Text>
            </TextCenter>
          </ReadabilityBlock>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <ReadabilityBlock>
            <Text style={{ fontSize: '3em' }}>
              <pre>
                <code>
                  {`
<a `}
                  <Highlight>href="https://www.google.com"</Highlight>
                  {`>
  A link to google
</a>
                `}
                </code>
              </pre>
            </Text>
            <TextCenter>
              <Text>
                All attributes are express as a <strong>name</strong> (href in this case), followed by an{' '}
                <strong>=</strong>, followed by their <strong>value</strong> ( usually wrapped in quotes ).
              </Text>
            </TextCenter>
          </ReadabilityBlock>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <ReadabilityBlock>
            <TextCenter>
              <Text>The Image tag displays an image</Text>

              <Text style={{ fontSize: '3em' }}>
                <pre>
                  <code>{`
<img src="cat.jpg">
                `}</code>
                </pre>
              </Text>
              <Text>
                We can use the <em>src</em> attribute on the Image tag to define the image we want to load.
              </Text>
              <img
                width="200px"
                src="https://thedreambeing.files.wordpress.com/2012/09/george-diffused-lighting1.jpg"
              />
            </TextCenter>
          </ReadabilityBlock>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <Title>Layout!</Title>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <Text>Broadly speaking, html elements default to one of 2 layout schemes.</Text>
          <List>
            <Item>
              <Text>Block elements start a new line on the page.</Text>
            </Item>
            <Item>
              <Text>Inline elements can exist on the same line as other inline elements.</Text>
            </Item>
          </List>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <Text>Most elements are Block level by default.</Text>
          <Text>Some notable exceptions are</Text>
          <List>
            <Item>
              <Text>Image</Text>
            </Item>
            <Item>
              <Text>Anchor</Text>
            </Item>
            <Item>
              <Text>Span</Text>
            </Item>
          </List>
        </VertCenter>
      </Slide>
      <Slide>
        <VertCenter>
          <Text>
            I find layout hard to understand in the abstract so lets take a break and go onto glitch for a demo.
          </Text>
          <a href="https://glitch.com/~icom-101-starting-point">Fork this project to get started on glitch</a>
        </VertCenter>
      </Slide>
    </Slideshow>
  )
}

const Highlight = styled.span`
  background-color: rgba(0, 255, 255, 0.8);
`

export default Week2
