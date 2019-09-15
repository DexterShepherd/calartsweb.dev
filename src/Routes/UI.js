import styled from 'styled-components'

export const FlexVertCenter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
export const TwoHalvesLayout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Half = styled.div`
  width: 50%;
`

export const FlexRow = styled.div`
  display: flex;
  justify-content: center;
`

export const FlexCol = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 6rem;
`

export const TextCenter = styled.div`
  text-align: center;
`

export const ReadabilityBlock = styled.div`
  max-width: 800px;
  padding: 16px;
  padding-left: 0;
`

export const CenterReadabilityBlock = styled(ReadabilityBlock)`
  margin: 0 auto;
`

export const VertCenter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Subtitle = styled.h3`
  font-size: 2em;
`
export const Text = styled.p`
  font-size: 2em;
`

export const List = styled.ul``
export const Item = styled.li``

export const TopSpacer = styled.div`
  width: 100%;
  padding-top: 10%;
`

export const Emoji = styled.img`
  padding: 8px;
`
