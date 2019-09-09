import React, { useState, useCallback, useEffect } from 'react'
import { useSpring, motion as m } from 'framer-motion'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

export const Slideshow = withRouter(({ children, location, match, history }) => {
  const [index, setIndex] = useState(0)
  const [socket, setSocket] = useState()
  const [socketOpen, setSocketOpen] = useState(false)
  const [follow, setFollow] = useState(true)
  const [room, setRoom] = useState('mtiid')
  if (children.filter(child => child.type.name !== 'Slide').length && process.env.NODE_ENV !== 'production') {
    throw 'Only slides can be direct descendants of slideshow'
  }
  const Slides = Array.isArray(children) ? children : [children]
  const slideCount = Slides.length

  const master = window.location.search.includes('master')

  useEffect(() => {
    if (match.params.index !== undefined) {
      setIndex(parseInt(match.params.index))
    }
  }, [])

  const onKeydown = useCallback(({ key }) => {
    if (key === ' ' || key === 'ArrowRight' || key === 'ArrowDown') {
      if (index < slideCount - 1) {
        setIndex(index + 1)
      }
    } else if (key === 'ArrowLeft' || key === 'ArrowUp') {
      if (index > 0) {
        setIndex(index - 1)
      }
    }
  })

  useEffect(() => {
    window.addEventListener('keydown', onKeydown)
    return () => window.removeEventListener('keydown', onKeydown)
  }, [onKeydown])

  useEffect(() => {
    // todo add slideshow id to room id
    setSocket(new WebSocket(`wss://connect.websocket.in/calartswebdev?room_id=1`))
  }, [])

  useEffect(() => {
    if (socket) {
      socket.onopen = () => setSocketOpen(true)
      socket.onmessage = ({ data }) => {
        const { type, index } = JSON.parse(data)
        if (type === 'UPDATE_INDEX') {
          if (follow) {
            setIndex(index)
          }
        }
      }
    }
  }, [socket, follow])

  useEffect(() => {
    if (socketOpen) {
      if (master) {
        socket.send(JSON.stringify({ type: 'UPDATE_INDEX', index }))
      }
    }
  }, [index, socketOpen])

  useEffect(() => {
    history.replace(match.path.replace(':index?', index) + location.search, { index })
  }, [index])

  const transformStyle = {
    y: `translateY(${-index * 100}vh)`
  }

  return (
    <>
      <Controls>
        <ConnectedIndicator connected={socketOpen && follow} master={master} onClick={() => setFollow(!follow)} />
      </Controls>
      <SlideIndicator>
        {Slides.map((_, i) => (
          <SlideIndicatorDot
            key={i}
            animate={{ scale: index == i ? 1.4 : 0.8 }}
            whileHover={{ scale: 1.5 }}
            onClick={() => setIndex(i)}
          />
        ))}
      </SlideIndicator>
      <SlideShowContainer>
        <SlideShowScroller
          animate={{ y: `${-index * 100}vh` }}
          transition={{ type: 'spring', stiffness: 100, damping: 100 }}
        >
          {children}
        </SlideShowScroller>
      </SlideShowContainer>
    </>
  )
})

export const Slide = ({ children }) => {
  return (
    <SlideContainer>
      <SlideCard>
        <SlideContent>{children}</SlideContent>
      </SlideCard>
    </SlideContainer>
  )
}

const SlideIndicator = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0;
  height: 100vh;
  margin-right: 24px;
  z-index: 1;
`

const SlideIndicatorDot = styled(m.a)`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: lightgray;
  margin: 8px;
`

const Controls = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
`

const ConnectedIndicator = styled.a`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: ${({ connected, master }) => (master ? 'lightblue' : connected ? 'lightgreen' : 'gray')};
  margin: 4px;
`

const SlideShowContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

const SlideShowScroller = styled(m.div)`
  margin: 0;
  border: 0;
  padding: 0;
`

const SlideContainer = styled.div`
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const SlideCard = styled.div`
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
  box-shadow: 1px 5px 32px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`

const SlideContent = styled.div`
  height: calc(100% - 64px);
  padding: 32px;
`

const Title = styled.h1`
  text-align: center;
`
