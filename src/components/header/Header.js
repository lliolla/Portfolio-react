import React from 'react'
import './header.css'
import Cta from './Cta'
import HeaderSocial from './HeaderSocial'
import Me from '../../assets/me.png'

export const Header = () => {
  return (
    <header>
        <section className="container header__container" id="home">
            <h5>Bonjour je suis </h5>
            <h1>Fanny Jobert</h1>
            <h5 className="text-light">
                Dévellopeuse Web Frontend
            </h5>
           <Cta />
           <HeaderSocial/>
           <a href='#Contact' className='scroll__down'>aller vers le bas</a >
           <div className="me"> 
             <img src={Me} alt="ma photo" />
           </div>
     
         </section>
    </header>
  )
}
export default Header