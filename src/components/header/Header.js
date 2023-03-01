import React from 'react'
import './header.css'
import Cta from './Cta'
import Me from '../../assets/me.png'

export const Header = () => {
  return (
    <header>
         <div className="container header__container">
            <h5>Bonjour je suis </h5>
            <h1>Fanny Jobert</h1>
            <h5 className="text-light">
                Dévellopeuse Web Frontend
            </h5>
           <Cta />
           <div className="me"> 
           <img src={Me} alt="ma photo" />
           </div>
         </div>
    </header>
  )
}
export default Header