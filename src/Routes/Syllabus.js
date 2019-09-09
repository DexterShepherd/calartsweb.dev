import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import SyllabusMarkdown from './Syllabus.md'

const Syllabus = () => {
  const [raw, setRaw] = useState()
  useEffect(() => {
    fetch(SyllabusMarkdown)
      .then(resp => resp.text())
      .then(setRaw)
  }, [])
  return (
    <Container>
      <ReactMarkdown source={raw} />
    </Container>
  )
}

const Container = styled.div`
  padding: 16px;
`

export default Syllabus
