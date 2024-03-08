import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../Contact/Contact.css'
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { MdOutlineLocationOn } from 'react-icons/md';
import { SlEnvolope } from 'react-icons/sl';
import { HiOutlinePhone } from 'react-icons/hi';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const pageVariants = {
  initial: {
    opacity: 0,
    transition: 'opacity 2s ease-in',
  },
  in: {
    opacity: 1,
    transition: 'opacity 2s ease-in',
  },
  out: {
    opacity: 0,
    transition: 'opacity 2s ease-in',
  },
};

const firebaseConfig = {
  apiKey: "AIzaSyBsG0KrzJB-ESHsrHSPCHp2P_sjbM45uwA",
  authDomain: "clickographby-pb.firebaseapp.com",
  projectId: "clickographby-pb",
  storageBucket: "clickographby-pb.appspot.com",
  messagingSenderId: "124690737664",
  appId: "1:124690737664:web:70007d1d937aa4718246e5",
  measurementId: "G-K3RCFXR7JL"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default function Contact() {
  const [formData, setFormData] = useState({
    mobile: '',
    name: '',
    email: '',
    orderdetails: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add data to Firestore
      const docRef = await addDoc(collection(db, 'orders'), formData);
      console.log('Document written with ID:', docRef.id);

      // Reset the form after successful submission
      setFormData({
        mobile: '',
        name: '',
        email: '',
        orderdetails: '',
      });

      alert('Order submitted successfully!');
    } catch (error) {
      console.error('Error submitting order:', error.message);
      alert('Error submitting order. Please try again.');
    }
  };

  return (
    <motion.div className="text-light" id="contact_detail" initial="out" animate="in" exit="out" variants={pageVariants}>
      <div className="container" id="contact">
        <h1 className="text-white text-center">Connect With Us</h1>
        <div className="row">
          <div className="col-sm-6 text-C0C0C0">
            <hr />
            <h2>Contact</h2>
            <h4>
              <HiOutlinePhone /> +91 84088 35064
            </h4>
            <h4>
              <SlEnvolope /> prafulbhole123@gmail.com
            </h4>
            <hr />
            <h2>Meet</h2>
            <h4>
              <MdOutlineLocationOn /> Housing Board Colony, Pithampur
            </h4>
            <hr />
            <h2>Stay Updated</h2>
            <h4>
              <FaFacebookF />acebook <FaInstagram /> Instagram
            </h4>
          </div>
          <div className="col-sm-6">
            <hr />
            <h2 className="text-C0C0C0 text-center">For Any Order Submit Below Form</h2>
            <form className="px-4" onSubmit={handleSubmit}>
              <div className="form-group my-3">
                <input type="number" className="form-control" name="mobile" id="mobile" placeholder="Enter Mobile" onChange={handleInputChange} value={formData.mobile} />
              </div>
              <div className="form-group my-3">
                <input type="text" className="form-control" name="name" id="name" placeholder="Enter Name" onChange={handleInputChange} value={formData.name} />
              </div>
              <div className="form-group my-3">
                <input type="email" className="form-control" name="email" id="email" placeholder="Enter Email" onChange={handleInputChange} value={formData.email} />
              </div>
              <div className="form-group my-3">
                <textarea className="form-control" rows="2" name="orderdetails" id="orderdetails" placeholder="Order Details" onChange={handleInputChange} value={formData.orderdetails}></textarea>
              </div>
              <div className="form-group my-4 text-center" id="submit">
                <h4>
                  <button type="submit" className="text-C0C0C0 px-4 py-1 rounded">
                    Submit
                  </button>
                </h4>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
