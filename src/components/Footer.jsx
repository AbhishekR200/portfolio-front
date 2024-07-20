import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";

function Footer() {
  return (
    <div>
         <div className='last'  id='contact'>
             
             <h3>CONTACT</h3>
             <p><span><FaEnvelope /></span>
             gmail: abhishek.offizial@gmail.com
             </p>
             <h6 className='forp'><span><FaPhone />
             </span> mobile: +91-9947560365</h6>
            <p className='add'> <span><FaRegAddressCard />
            </span> Palakkad, Kerala, India</p>
         </div>
    </div>
  )
}

export default Footer