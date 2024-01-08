import React from 'react';
import { motion } from "framer-motion";
import './Gallery.css'
import{MdArrowDropDown} from 'react-icons/md'
import All from './Categories/All';
import FashionShoot from './Categories/FashionShoot';
import PreWedding from './Categories/PreWedding';
import Babies from './Categories/Babies';
import NightClub from './Categories/NightClub';
import Wedding from './Categories/Wedding';

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

export default function Gallery() {
  return (
    <>
      <motion.div className='container text-center text-C0C0C0' id="gallery" initial="out" animate="in" exit="out" variants={pageVariants}>
        <div className="container text-center"> 
          <button className="text-C0C0C0" type='button' data-bs-target="#portfol" data-bs-toggle="collapse" ><h1 className='text-white'>My Gallery <MdArrowDropDown/></h1>
            </button>
          </div>
          <div className="container collapse" id="portfol">
            <div className="card-body">
              <nav className="navbar navbar-expand-md justify-content-center">
                  <ul className="nav navbar-nav" role="tablist">
                  <li className="nav-item text-center px-3">
                      <button className="active text-C0C0C0" data-bs-toggle="tab" data-bs-target="#all"><h3>All</h3></button>
                    </li>
                    <li className="nav-item text-center px-3">
                      <button className="text-C0C0C0" data-bs-toggle="tab" data-bs-target="#fashion"><h3>Fashion Shoot</h3></button>
                    </li>
                    <li className="nav-item text-center px-3">
                      <button className="text-C0C0C0" data-bs-toggle="tab" data-bs-target="#prewed"><h3>Pre-Wedding</h3></button>
                    </li>
                    <li className="nav-item text-center px-3">
                      <button className="text-C0C0C0" data-bs-toggle="tab" data-bs-target="#babies"><h3>Babies</h3></button>  						
                    </li>
                    <li className="nav-item text-center px-3">
                      <button className="text-C0C0C0" data-bs-toggle="tab" data-bs-target="#nightclub"><h3>Night Club</h3></button>  						
                    </li>
                    <li className="nav-item text-center px-3">
                      <button className="text-C0C0C0" data-bs-toggle="tab" data-bs-target="#wedding"><h3>Wedding</h3></button>
                    </li>    
                  </ul> 
              </nav>
            </div>
          </div>
          <div className="tab-content" id="myTabs">
            <div className="tab-pane fade show active" id="all" role='tabpanel'>
              <All/>
            </div>
            <div className="tab-pane fade " id="fashion" role='tabpanel'>
              <FashionShoot/>
            </div>
            <div className="tab-pane fade" id="prewed" role='tabpanel'>
              <PreWedding/>
            </div>
            <div className="tab-pane fade" id="babies" role='tabpanel'>
              <Babies/>
            </div>
            <div className="tab-pane fade" id="nightclub" role='tabpanel'>
              <NightClub/>
            </div>
            <div className="tab-pane fade" id="wedding" role='tabpanel'>
              <Wedding/>
            </div>
          </div>
      </motion.div>
    </>
  );
}
