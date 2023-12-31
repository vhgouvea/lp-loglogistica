import React, { useState } from "react";
import {
  Button,
  Container, 
  Content, 
  ContentList, 
  ImageBackground, 
  ItemsList, 
  Text,
  TextButton
} from './styles';

import Logo from '../../assets/logo.png'

import ListaDados from './dadosHeader';
import { Link } from "react-router-dom";
import SmoothScrollAnchor from "../../hooks/SmoothScroll";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div id="home" className="w-full border-b border-gray-300">
      {/* Desktop Header (largura maior que 1024px) */}
      <div className="hidden px-8 lg:flex justify-between items-center h-20">
        <div className="w-32 h-20 flex items-center justify-center">
          <img src={Logo} alt="Logo" className="w-full h-16" />
        </div>
        <ul className="w-3/5 flex justify-between items-center p-0 m-0">
          {ListaDados.map((item, index) => (
            <li key={index} className="list-none">
              {item.name == "Home" ? (
                <a  className='text-base font-medium text-text transition duration-300 ease-in-out hover:border-b-2 hover:border-red-600 hover:text-red-600 hover:cursor-pointer focus:outline-none'>
                  <Link to='/'>Home</Link>
                </a>
              ) : (
                <SmoothScrollAnchor targetId={item.href} children={item.name} styles={'text-base font-medium text-text transition duration-300 ease-in-out hover:border-b-2 hover:border-red-600 hover:text-red-600 hover:cursor-pointer focus:outline-none'}/>
              )}
              {/* <a
                href={}
                className="text-base font-medium text-gray-500 transition duration-300 ease-in-out hover:border-b-2 hover:border-red-600 hover:text-red-600 hover:cursor-pointer focus:outline-none"
              >
                {item.name}
              </a> */}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center">
          <button className="bg-white w-32 h-10 font-medium text-base text-black border border-gray-400 rounded-md shadow-md hover:bg-red-600 hover:text-white hover:border-red-600 hover:cursor-pointer focus:outline-none transition duration-300 ease-in-out">
            <a href="https://loglogin.azurewebsites.net/" target="_blank" rel="noreferrer" className="text-button text-text">
              Área do Cliente
            </a>
          </button>
        </div>
      </div>

      {/* Mobile Header (largura menor ou igual a 1024px) */}
      <div className="lg:hidden flex justify-between items-center h-20">
        <div className="w-32 h-20 flex items-center justify-center ml-6">
          <img src={Logo} alt="Logo" className="w-full h-16" />
        </div>
        <div className="w-1/5 flex items-center justify-center">
          <button
            className="text-button text-base font-medium hover:cursor-pointer focus:outline-none text-text"
            onClick={toggleMenu}
          >
            Menu
          </button>
        </div>
      </div>

      {/* Dropdown para o menu hamburguer */}
      {menuOpen && (
        <div className="lg:hidden absolute top-20 right-0 left-0 bg-white border-b border-gray-300 z-50">
          <ul className="flex flex-col items-center p-0 m-0">
            {ListaDados.map((item, index) => (
              <li key={index} className="list-none mb-4 ">
                {item.name == "Home" ? (
                  <a  className='text-base font-medium text-text transition duration-300 ease-in-out hover:border-b-2 hover:border-red-600 hover:text-red-600 hover:cursor-pointer focus:outline-none'>
                    <Link to='/'>Home</Link>
                  </a>
                ) : (
                  <SmoothScrollAnchor targetId={item.href} children={item.name} styles={'text-base font-medium text-text transition duration-300 ease-in-out hover:border-b-2 hover:border-red-600 hover:text-red-600 hover:cursor-pointer focus:outline-none'}/>
                )}
              </li>
            ))}
            <button className="bg-white mb-4 w-32 h-10 font-medium text-base text-black border border-gray-400 rounded-md shadow-md hover:bg-red-600 hover:text-white hover:border-red-600 hover:cursor-pointer focus:outline-none transition duration-300 ease-in-out">
              <a href="https://loglogin.azurewebsites.net/" target="_blank" rel="noreferrer" className="text-button text-text">
                Área do Cliente
              </a>
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}
