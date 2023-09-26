import React, { useState } from "react";


const testimonialsData = [
  {
    id: 1,
    name: 'João Silva',
    image: '',
    text: 'Excelente serviço! Recomendo a todos.',
  },
  {
    id: 2,
    name: 'Maria Souza',
    image: '',
    text: 'Fiquei muito satisfeita com o atendimento.',
  },
  {
    id: 3,
    name: 'Pedro Alves',
    image: '',
    text: 'Profissionais altamente qualificados.',
  },
];

export function Testimonials() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };


  return (
    <div className="p-4">
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
              stroke-width="1.5"
              stroke="#ED1B24"
              className="h-6 w-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5" />
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
              className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </span>
        </button>
        <div className="text-center">
          <p className="text-2xl text-gray-700 relative font-poppins w-full">
            Depoimentos
          </p>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-base text-gray-500 font-normal font-poppins">
              "{testimonialsData[currentIndex].text}"
            </p>
            <p className="font-poppins text-gray-600 mt-2">
              - {testimonialsData[currentIndex].name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}