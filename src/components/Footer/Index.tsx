import React from "react";

import Logo from '../../assets/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faClock, faPhone } from "@fortawesome/free-solid-svg-icons";


export function Footer() {

    return (
        <footer id="contact" className="bg-gray-100 mt-8 sm:mt-16 md:mt-24 text-title">
          <div className="container pt-6 pb-6">
            <div className="sm:flex md:items-center sm:justify-between text-black sm:flex-row flex-col">
              <div className="text-center mb-5 sm:mb-0">
                <img src={Logo} alt="Logo" className="w-24 h-14 mx-auto" />
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-5 sm:gap-12 lg:gap-16 mt-2 sm:mt-0">
                <div className="text-center sm:text-left">
                  <p className="text-title font-bold">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    Nosso email
                  </p>
                  <p className="text-text text-sm">contato@loglogistica.com.br</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-title font-bold">
                    <FontAwesomeIcon icon={faClock} className="mr-2" />
                    Horário de funcionamento
                  </p>
                  <p className="text-text text-sm">Seg a Sex - 08 as 18h</p>
                  <p className="text-text text-sm">Sab 08 as 13h</p>
                </div>
                <div className="text-center sm:text-left mt-4 sm:mt-0">
                  <p className="text-title font-bold">
                    <FontAwesomeIcon icon={faPhone} className="mr-2" />
                    Entre em contato
                  </p>
                  <p className="text-text text-sm">(71) 9 8820-1350</p>
                  <p className="text-text text-sm">(71) 3555-2700</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-b-2 border-solid border-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5578.056768869889!2d-38.473401283016194!3d-12.988893777813278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b3889fb574b%3A0x3e98edcaaf0fdf3d!2sEdif%C3%ADcio%20Bahia%20Center!5e0!3m2!1spt-BR!2sbr!4v1695940394529!5m2!1spt-BR!2sbr"
              width="100%"
              height="250"
              loading="lazy"
              title="maps"
            ></iframe>
          </div>
          <div className="bg-gray-100 text-black flex justify-center py-3 sm:flex-row flex-col items-center">
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/suapagina" target="_blank" rel="noopener noreferrer">
                <svg width="22px" height="22px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                  {/* ...Ícone do Facebook */}
                </svg>
              </a>
              <a href="https://www.twitter.com/suapagina" target="_blank" rel="noopener noreferrer">
                <svg width="23px" height="23px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                  {/* ...Ícone do Twitter */}
                </svg>
              </a>
              <a href="https://www.linkedin.com/suapagina" target="_blank" rel="noopener noreferrer">
                <svg width="26px" height="26px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                  {/* ...Ícone do LinkedIn */}
                </svg>
              </a>
            </div>
          </div>
        </footer>
    );
}
