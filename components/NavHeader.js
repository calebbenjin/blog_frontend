import Image from 'next/image'
import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../public/logo.png'
import Link from 'next/link'

const NavHeader = ({ categories }) => {

  // console.log(categories)


  return (
    <header className='header'>
      <Navbar variant='light' px='4'>
        <Container>
          <Link href='/'>
            <a>
              <Navbar.Brand>
                <Image src={logo} alt='logo' width='150' height='25' />
              </Navbar.Brand>
            </a>
          </Link>
          <Nav className='ml-auto mobileNone'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Crypto</Nav.Link>
            <Nav.Link href='#pricing'>Indexes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default NavHeader
