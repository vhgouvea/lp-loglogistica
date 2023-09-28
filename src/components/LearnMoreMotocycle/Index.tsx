/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

export function Motoboy() {

  return (
    <section className="text-black">

    <div className="flex justify-center pt-9 pb-9 text-xl bg-gray-300">
        <p className="text-4xl text-black">Serviço mensal de Motoboys</p>
    </div>
        
    <div className="container">
        <div className="pt-12 pb-12 max-w-4xl mx-auto">
          <p>O Serviço que é o carro chefe da LOG. Motoboys treinados e especializados em diversos segmentos. Ao contratar um Motoboy da LOG, você terá a certeza de um serviço de qualidade e direcionado ao seu negócio.</p>
        </div>
        <div className="flex gap-x-12 max-w-5xl mx-auto mb-12">
            <img src="https://via.placeholder.com/400x400" alt="" />
            <div>
              <p className="mb-3">
              O Serviço que é o carro chefe da LOG. Motoboys treinados e especializados em diversos segmentos. Ao contratar um Motoboy da LOG, você terá a certeza de um serviço de qualidade e direcionado ao seu negócio. </p>
              <p>
              Motoboys treinados e com perfil especifico fornecidos ao cliente em tempo integral (full time - 44 horas mensais) ou parcial (part time - 20 horas mensais de 08-12 ou 14-18) e de forma exclusiva e dedicada. Também customizamos a jornada do motoboy de acordo com a demanda do cliente. 
              </p>
            </div> 
        </div>
        <div>
          <p>Mande sua mensagem</p>
          <form action="https://formsubmit.co/suporte@micasoft.com.br" method="POST" className="max-w-[560px] lg:w-[560px] w-[320px] sm:w-[420px] md:w-[620px]">
                <div className="flex flex-col max-w-lg gap-1">
                    <label className="titulo">Nome:</label>
                    <input type="text" id="nome" name="nome" required placeholder="nome:" className="border border-[#dad9d9] p-2"/>
                </div>
                <div className="flex flex-col max-w-lg gap-1 mt-8 mb-8">
                    <label className="titulo">E-mail</label>
                    <input type="email" id="email" name="email" required placeholder="email:" className="border border-[#dad9d9] p-2"/>
                </div>
                <div className="flex flex-col max-w-lg gap-1 mb-8">
                    <label className="titulo">Celular:</label>
                    <input type="tel" id="telefone" name="telefone" required placeholder="celular" className="border border-[#dad9d9] p-2 phone"/>
                </div>
                <div className="flex flex-col max-w-lg gap-1 mb-8">
                    <label className="titulo">Mensagem:</label>
                    <textarea id="mensagem" name="mensagem" className="border border-[#dad9d9] p-2 pb-16 resize-none" placeholder="Escreva sua mensagem aqui"></textarea>
                </div>
                <div className="flex justify-center max-w-lg"> 
                    <button type="submit" className="rounded-[70px] bg-[#9dec52] px-16 py-3 text-lg text-[#000000]  md:text-xl hover:hover:bg-[#6eca50] max-w-[296px] md:max-w-[316px]">Enviar</button>
                </div>
                <input type="hidden" name="accessKey" value="383fde878cd48e16c7291e2d859a561c"/>
            </form>
        </div>
    </div>

    </section>
  );
}
