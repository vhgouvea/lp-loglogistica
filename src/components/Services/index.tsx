import React from "react";
import { Card, ChipTitle, Container, ContentCard, ContentImage, ContentText, ContentTitle, Image, PageTitle, Text, Title } from "./styles";

import Motoboy from '../../assets/motoboy.jpg';
import Vans from '../../assets/vans.jpg';
import Funcionarios from '../../assets/funcionarios.jpg';
import CaixaTermica from '../../assets/caixa-termica.jpg';
import { Link } from "react-router-dom";

export function Services() {
  return  (
    <div id="services" className="w-full px-10 flex flex-col items-center justify-center">
      <div className="text-center h-5">
        <h1 className="text-title text-2xl md:text-xl font-poppins">Serviços</h1>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        <div className="bg-gray-100 rounded-lg border-2 border-b-red-600 shadow-2xl p-4 h-500">
          <img src={Motoboy} alt="Motoboy" className="w-full rounded-t-lg" />
          <h1 className="text-xl text-title pt-4">Serviço mensal de Motoboys</h1>
          <div className="h-60 flex flex-col justify-center items-center">
            <p className="text-base text-text pt-2">O Serviço que é o carro chefe da LOG. Motoboys treinados e especializados em diversos segmentos. Ao contratar um Motoboy da LOG, você terá a certeza de um serviço de qualidade e direcionado ao seu negócio.</p>
          </div>
          <div className="mt-auto">
            <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              <Link to='/Motoboys'>Veja mais</Link>
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg border-2 border-b-red-600 shadow-2xl p-4 h-500">
          <img src={Vans} alt="Vans" className="w-full rounded-t-lg" />
          <h1 className="text-xl text-title pt-4">Locação mensal de Veículos Utilitários com e sem motoristas</h1>
          <div className="h-56 flex flex-col justify-center items-center">
            <p className="text-base text-text pt-2">Acompanhando a crescente demanda de nossos clientes, a LOG TRANSPORTES oferece solução logística para o fornecimento de veículos utilitários, com ou sem motoristas habilitados para o transporte contínuo de mercadorias, de forma exclusiva e dedicada.</p>
          </div>
          <div className="mt-auto">
            <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              <Link to='/LocacaoVeiculos'>Veja mais</Link>
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg border-2 border-b-red-600 shadow-2xl p-4 h-500">
          <img src={CaixaTermica} alt="Caixa Termica" className="w-full rounded-t-lg" />
          <h1 className="text-xl text-title pt-4">Transporte de Material Biológico</h1>
          <div className="h-60 flex flex-col justify-center items-center">
            <p className="text-base text-text pt-2">A LOG TRANSPORTES possui alvará de Saúde emitido pela coordenação de vigilância sanitária municipal (visa), órgão responsável pela fiscalização e emissão da autorização para o transporte das amostras.</p>
          </div>
          <div className="mt-auto">
            <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              <Link to='/MaterialBiologico'>Veja mais</Link>
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg border-2 border-b-red-600 shadow-2xl p-4 h-500">
          <img src={Funcionarios} alt="Funcionarios" className="w-full rounded-t-lg" />
          <h1 className="text-xl text-title pt-4">Fornecimento de equipes administrativas</h1>
          <div className="h-60 flex flex-col justify-center items-center">
            <p className="text-base text-text pt-2">Quando o nosso parceiro necessita de colaborador para o seu quadro administrativo ou operacional, a LOG fornece profissional já adaptado e com experiência.</p>
          </div>
          <div className="mt-auto">
            <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              <Link to='/EquipesAdministrativas'>Veja mais</Link>
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}