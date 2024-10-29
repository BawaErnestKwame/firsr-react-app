import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Tittle/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
     <div className="container">
      <Title title='OUR PROGRAMS' subTitle='What We Offer' />
     <Programs/>
     <About/>
     <Title title='GALLERY' subTitle='Campus Photos'/>
     <Campus/>
     <Title title='TESTIMONIAL' subTitle='What a Student Says'/>
     <Testimonial/>
     <Title title='CONTACT US' subTitle='Gent In Touch'/>
     <Contact/>
     <Footer/>
     </div>
    </div>
  )
}

export default App
