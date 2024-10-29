import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>

        <div className="about-left">
            <img src={about_img}alt=""  className='about-img'/>
            <img src={play_icon} alt=""  className='play-icon'/>
        </div>

        <div className="about-right">
           <h3>ABOUT UNIVERSITY</h3>
           <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aspernatur 
            asperiores iure, eaque eos eligendi, quae modi reprehenderit nesciunt velit eius nobis minus 
            minima officiis blanditiis eveniet dicta ipsum aliquam!
           Inventore, quis modi. Molestiae itaque suscipit quod soluta,
            fugit culpa, pariatur facere natus atque totam quis officiis velit doloremque 
            repudiandae dolorum alias provident facilis libero! Magnam alias saepe voluptatem ratione?</p>
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Fugit rem, ullam, nihil, 
                similique laudantium quisquam pariatur quaerat 
                consequatur reprehenderit ducimus quasi!
                 Fugiat iste quae
                 nobis rerum tenetur, ad eos quas!</p>
        </div>

      
    </div>
  )
}

export default About
