import React from 'react'
import '../Footer/Footer.css'
import{FaInstagramSquare,FaFacebookSquare} from 'react-icons/fa'


export default function About() {
  return (
      <div class="container" id="footer">
        <a className='facebook text-C0C0C0 m-1' href="https://www.facebook.com/profile.php?id=100008186223305" target='_blank' rel='noreferrer'><FaFacebookSquare/></a>
        <a className='instagram text-C0C0C0 m-1' href="https://instagram.com/clickograph_by_pb?igshid=YmMyMTA2M2Y=" target='_blank' rel='noreferrer'><FaInstagramSquare/></a>
      </div>
  )
}
