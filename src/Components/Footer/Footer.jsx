import React from "react";
import {Link} from'react-router-dom'
import logo from '../img/logo.png'
import face from '../img/facebook.png'
import insta from '../img/instagram.png'
import whats from '../img/whatsapp.png'
export default function Footer() {
  return (
    <div className="grid grid-cols-3 justify-items-center self-center p-8 max-lg:grid max-lg:grid-cols-1 gap-8 bg-[rgba(0,0,0,0.74)]">
      <div className="adress flex flex-wrap flex-col justify-center items-center space-y-1 p-2">
        <h1>
          Adress : Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <h1>Phone : +123 456 7890</h1>
      </div>
     
      <div className="logo-info flex flex-wrap flex-col justify-evenly items-center gap-3 ">
        <img
          className="footer-img w-[50px] h-[50px] rounded-full"
          src={logo}
          alt=" logo"
        />
        <h1 className="text-xl">Company Name</h1>
        <div className="flex-1 text-center text-lg">
          <p>�� 2024 Ziad adel-Front-End Developer. All rights reserved.</p>
        </div>
        <div className="flex-1 text-center text-lg">
          <p>Privacy Policy</p>
        </div>
        <div className="flex-1 text-center text-lg">
          <p>Terms and Conditions</p>
        </div>
      </div>
     
      <div className="social-media flex flex-wrap p-5 justify-around items-center ">
      <Link className="ml-5" to="https://www.facebook.com/bimmerfixes/" ><img className="w-[35px] h-[35px]" src={face} alt=" "/> </Link>
      <Link className="ml-5" to="https://www.instagram.com/bimmerfixes/" ><img className="w-[35px] h-[35px]" src={insta} alt=" "/> </Link>
      <Link className="ml-5" to="https://wa.me/+2001147780404" ><img className="w-[35px] h-[35px]" src={whats} alt=" "/> </Link>
      </div>
    </div>
  );
}
