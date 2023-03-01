import React from 'react'
import Header from'./components/header/Header'
import Nav from'./components/nav/Nav'
import About from'./components/about/about'
import Experience from'./components/experience/Experience'
import Footer from'./components/footer/Footer'


export const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Footer/>
    </>
  )
}

export default App