import React, { useState, useEffect } from "react";


import Seculus from '../../assets/seculus.png';
import Morena from '../../assets/Morena.png';
import Propeg from '../../assets/propeg.png';
import Braskem from '../../assets/braskem.png';
import Pamcary from '../../assets/pamcary.png';
import Ortobom from '../../assets/ortobom.png';

const testimonialsData = [
  {
    id: 1,
    name: 'Seculus',
    image: Seculus,
    text: 'Com a prestação de serviços da Log, tivemos mais agilidade na entrega e devolução dos nossos produtos. E o mais importante, a satisfação dos nossos clientes.  Qualidade e excelência na prestação de serviços.  Eficiência, Pontualidade e Excelência.',
  },
  {
    id: 2,
    name: 'Morena',
    image: Morena,
    text: 'A Log Transportes atua nas empresas do Grupo há muitos anos e com ela conquistamos ainda maior agilidade e pontualidade nas entregas.   Normalmente descobrimos a qualidade de uma empresa, quando surge uma situação de crise. Sempre que tivemos uma falta de um motorista ou a necessidade de um acréscimo, mesmo que temporário, de serviço, a LOG sempre se mostrou solícita e efetiva, conquistando assim a credibilidade necessária para permanecer no Grupo.  Parceria, Pontualidade e Assiduidade.',
  },
  {
    id: 3,
    name: 'Braskem',
    image: Braskem,
    text: 'A confiabilidade nos serviços prestados profissionalismo da Equipe, confiabilidade, respeito e atenção aos clientes!',
  },
  {
    id: 4,
    name: 'Propeg',
    image: Propeg,
    text: 'Entregas eficazes e pontuais. Disponibilidade imediata de atender nossas demandas. Empresa séria e parceira.  Comprometimento, agilidade, disponibilidade e seriedade na prestação do serviço, otimizando as demandas de nossa empresa.  Comprometimento, parceria e disponibilidade.',
  },
  {
    id: 5,
    name: 'Pamcary',
    image: Pamcary,
    text: 'Agilidade nas entregas de nossa carteira de clientes. O envolvimento direto das pessoas de comando que atuam em parceria conosco.  Agilidade, confiabilidade e competência.',
  },
  {
    id: 6,
    name: 'Ortobom',
    image: Ortobom,
    text: 'Na verdade já tínhamos este serviço porém era feito por funcionários próprios da fábrica. Com a LOG permanecemos com a mesma qualidade.  Bom serviço de logistica com custo beneficio adequado.  Qualidade, Pontualidade e Presteza.',
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
    setProgress(0); // Reinicia o progresso ao mudar de depoimento
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
    setProgress(0); // Reinicia o progresso ao mudar de depoimento
  };

  useEffect(() => {
    const maxProgress = 100; // Valor máximo do progresso
    const intervalTime = 50; // Intervalo de tempo para atualizar o progresso (em milissegundos)
    const steps = (5000 / intervalTime); // Número de etapas para 5 segundos

    let currentStep = 0;
    let progressTimeout:any;

    const incrementProgress = () => {
      currentStep++;
      const newProgress = (currentStep / steps) * maxProgress; // Corrigido aqui
      setProgress(newProgress);

      // Se o progresso atingir o máximo, mude para o próximo depoimento
      if (newProgress >= maxProgress) { // Corrigido aqui
        handleNext();
      }
    };

    // Define um temporizador para incrementar o progresso com base no intervalo de tempo
    progressTimeout = setInterval(incrementProgress, intervalTime);

    // Limpa o temporizador quando o componente é desmontado ou currentIndex muda
    return () => {
      clearInterval(progressTimeout);
    };
  }, [currentIndex, progress]);

  // Define um temporizador para mudar automaticamente de depoimento a cada 5 segundos
  useEffect(() => {
    const autoChangeTimeout = setTimeout(handleNext, 5000);

    // Limpa o temporizador quando o componente é desmontado
    return () => {
      clearTimeout(autoChangeTimeout);
    };
  }, [currentIndex]);

  return (
    <div id="testimonial" className="p-4 mt-24 w-full">
      <div className="w-full mx-auto relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 items-center text-white rounded-md p-0"
          onClick={handlePrev}
        >
          <span className="inline-block h-6 w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ED1B24"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 items-center text-white p-0"
          onClick={handleNext}
        >
          <span className="inline-block h-6 w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ED1B24"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </button>

        <div className="text-center w-full">
          <p className="text-title text-2xl md:text-xl font-poppins">
            Depoimentos
          </p>
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-center items-center">
            <p className="text-base text-text font-normal font-poppins">
              "{testimonialsData[currentIndex].text}"
            </p>
            <p className="font-poppins text-gray-600 mt-2">
              <img
                src={testimonialsData[currentIndex].image}
                className="w-36 h-36"
                alt="Depoimento"
              />
            </p>
            <div className="w-full h-2 bg-white mt-2">
              <div
                className="h-2 bg-ED1B24"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}