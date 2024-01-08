import {React} from 'react'
import { motion } from "framer-motion";
import '../Contact/Contact.css'
import{FaInstagram,FaFacebookF} from 'react-icons/fa'
import{MdOutlineLocationOn} from 'react-icons/md'
import{SlEnvolope} from 'react-icons/sl'
import{HiOutlinePhone} from 'react-icons/hi'


const pageVariants = {
  initial: {
    opacity: 0,
    transition: "opacity 2s ease-in",
  },
  in: {
    opacity: 1,
    transition: "opacity 2s ease-in",
  },
  out: {
    opacity: 0,
    transition: "opacity 2s ease-in",
  },
}

export default function Contact() {

  return (
    <motion.div  className='text-light' id="contact_detail" initial="out" animate="in" exit="out" variants={pageVariants}>
      <div className="container" id="contact">
        <h1 className="text-white  text-center">Connect With Us</h1>
        <div className="row">
          <div className="col-sm-6  text-C0C0C0">
            <hr/>
              <h2>Contact</h2>
              <h4><HiOutlinePhone/> +91 84088 35064</h4>
              <h4><SlEnvolope/> prafulbhole123@gmail.com</h4>
            <hr/>
              <h2>Meet</h2>
              <h4><MdOutlineLocationOn/> Housing Board Colony,Pithampur</h4>
            <hr/>
              <h2>Stay Updated</h2>
              <h4><FaFacebookF/>acebook <FaInstagram/> Instagram</h4>
            
          </div>
          <div className="col-sm-6">
            <hr/>
            <h2 className="text-C0C0C0 text-center">For Any Order Submit Below Form</h2>
            <form className="px-4"  action="/Orders.php" method="post" >
                      <div className="form-group my-3">
                    <input type="number" className="form-control" name ="mobile" id="mobile" placeholder="Enter Mobile" disabled/>
                </div>
              <div className="form-group my-3">
                    <input type="text" className="form-control" name ="name" id="name" placeholder="Enter Name" disabled/>
                </div>
              <div className="form-group my-3">
                    <input type="email" className="form-control" name ="email" id="email" placeholder="Enter Email" disabled/>
                </div>
              <div className="form-group my-3">
                  <textarea className="form-control" rows="2" name ="orderdetails" id="orderdetails" placeholder="Order Details" disabled></textarea>
                </div>
                <div className="form-group my-4 text-center" id="submit"> 
                  <h4>
                    <button className="text-C0C0C0 px-4 py-1 rounded" data-toggle="tooltip" data-placement="right" title="Form Is Under Progress" disabled>
                      Submit
                    </button>
                  </h4>
                </div>
              </form>	
            </div>
        </div>
      </div>
    </motion.div>
  )
}
