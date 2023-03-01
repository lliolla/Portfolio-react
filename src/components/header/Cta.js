import React from 'react'
import CV from '../../assets/cv.pdf'

export const Cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn' >Télécharger mon CV</a >
        <a href='#Contact' className='btn btn-primary' >Contactez-moi</a >
    </div>
  )
}
export default Cta