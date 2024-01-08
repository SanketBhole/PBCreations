import React from 'react'
import Vitems from './Vitems';
import Vdata from "./Vdata";
import './Videos.css';
import { motion } from "framer-motion";

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

export default function Videos() {
  return (
    <motion.div className='container text-light'id='videosection' initial="out" animate="in" exit="out" variants={pageVariants}>
    <div className="container" id="thumbnail">
        <h1 className="text-white text-center py-3">My Edit Work</h1>
        <Vitems data={Vdata}/>
    </div>
    </motion.div>
  )
}
