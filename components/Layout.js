import React from 'react'
import Footer from './Footer'
import NavHeader from './NavHeader'

const Layout = ({children, categories, seo}) => {
  return (
    <>
      <NavHeader categories={categories} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
