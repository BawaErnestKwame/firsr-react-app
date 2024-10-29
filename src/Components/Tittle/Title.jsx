import React from 'react'
import './Tittle.css'

const Title = ({title,subTitle}) => {
  return (
    <div className='title'>
        <p> {title} </p>
        <h2> {subTitle} </h2>
    </div>
  )
}

export default Title
