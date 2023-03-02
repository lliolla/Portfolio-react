import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'


const HeaderSocial = () => {
  return (
    <div className='header__socials' >
          <a href='https://www.linkedin.com/in/fanny-jobert-074871151/' target='_blank'> <AiFillLinkedin/> </a>  
          <a href='https://github.com/lliolla' target='_blank'> <AiFillGithub/></a>   
    </div>
      
  )
}

export default HeaderSocial
