import React, { Component, useRef } from 'react'
import styled from 'styled-components'
import { useSpring, useTrail, useChain, config, animated } from 'react-spring'
import { Row, Col } from 'react-flexbox-grid'
import {
  space,
  width
} from 'styled-system'
import { Link } from 'gatsby'
import Bowser from 'bowser'
import { Body1, H2 } from '../../components/Typography'
import { SectionMax } from '../../components/Containers'
import { BlockReveal } from '../../components/Animation'
import { Button } from '../../components'
import useSiteMetadata from '../../components/SiteMetadata'

const HeroContainer = styled(Row)`
  ${space}
  background-position: center center;
  background-size: cover;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.greyBlue}
`
const RoundedImg = styled(Col)`
  background-image: url('/img/kg_flex_flag.jpeg');
  background-size:cover;
  background-position: top center;
  border-radius:20px;
  min-height:400px;
`
const Dots = styled.div`
  background-image: url('/img/dots-overlay-tall.png');
  height:100%;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  width: 200px;
}
`
const CTAwrapper = styled(Col)`
  ${width}
  ${space}
`
const TextContainer = styled(Col)`
  ${space}
  z-index:1;
  align-self:center;
`
const callKG = () => {
  window.open('tel:+15126302038', '_self')
}

const Hero = ({ hero }) => {
  const { menuLinks } = useSiteMetadata()

  return (
    <HeroContainer>
      <SectionMax m='auto!important' style={{ position: 'relative' }}>
        <Dots />
        <TextContainer p={4} lg={6} md={12}>
          <H2 color={'black'} m={0}> {hero.title} </H2>
          <Body1 maxWidth={['100%']} mb={4}>
            {hero.subtitle}
          </Body1>
          <Row>
            <CTAwrapper width={['100%', 'fit-content']} pr={[0, 2]}>
              <Button url={menuLinks[0].link} width={['100%', 'auto']} mb={2} color={'white'} bg={'black'}> Start training </Button>
            </CTAwrapper>
            <CTAwrapper width={['100%', 'fit-content']}>
              <Button onClick={() => callKG()} width={['100%', 'auto']} color={'black'} bg={'white'}> 📱 Or tap to call </Button>
            </CTAwrapper>
          </Row>
        </TextContainer>
        <RoundedImg className={'hidden-xs hidden-sm hidden-md'} lg={6} />
      </SectionMax>
    </HeroContainer>
  )
}

export default Hero
