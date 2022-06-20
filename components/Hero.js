import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import banner from '../public/Defi-1.jpeg'
import SearchInput from './SearchInput'
import Categories from './Categories'
import HeroTitle from './Title'

const Hero = () => {
  return (
    <section className='hero_section'>
      <Container>
        <HeroTitle />
        <div className='searchContainer'>
          <div className="searchBody">
            <SearchInput />
            <Categories />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
