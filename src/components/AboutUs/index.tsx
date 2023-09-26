import React from 'react';
import ImageAboutUs from '../../assets/aboutus.jpg';

export function AboutUs() {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-between h-auto md:h-500">
      <div className="md:w-1/2">
        <img src={ImageAboutUs} alt="Sobre nós" className="w-full h-auto"></img>
      </div>
      <div className="w-full md:w-1/2 p-4 md:p-20 text-justify items-center">
        <div className="text-center md:h-50">
          <h1 className="text-title text-2xl md:text-xl font-poppins">Conheça a LOG</h1>
        </div>
        <p className="text-text text-sm md:text-xl font-normal font-poppins md:mt-4">
          A Log Transportes ao longo de seus 20 anos de existência tornou-se referência na prestação de serviço de entregas.
        </p>
        <p className="text-text text-sm md:text-xl font-normal font-poppins">
          Focada no segmento de entregas rápidas, a LOG TRANSPORTES oferece uma ampla gama de serviços, além dos projetos customizados visando redução de custos e maximização de resultados.
        </p>
      </div>
    </div>
  );
}