import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Uplaod from '../components/Upload'
const libraries = () => {
  return (
    <div>
        <Hero heading='Contribute' message='Scroll down ⬇ to submit the form below for contributing to copyright-free images.' />
        {/* <Contact /> */}
        <Uplaod/>
       
    </div>
  )
}

export default libraries