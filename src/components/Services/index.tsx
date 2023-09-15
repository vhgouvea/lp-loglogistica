import React from "react";
import { Card, ChipTitle, Container, ContentCard, ContentImage, ContentText, ContentTitle, Image, PageTitle, Text, Title } from "./styles";

import Motoboy from '../../assets/motoboy.jpg';
import Vans from '../../assets/vans.jpg';
import Funcionarios from '../../assets/funcionarios.jpg';
import CaixaTermica from '../../assets/caixa-termica.jpg';

export function Services() {
  return (
    <Container>
      <ChipTitle>
        <PageTitle>Serviços</PageTitle>
      </ChipTitle>
      <ContentCard>
        <Card>
          <ContentImage>
            <Image src={Motoboy} />
          </ContentImage>
          <ContentTitle>
            <Title>Serviço mensal de Motoboys</Title>
          </ContentTitle>
          <ContentText>
            <Text>O Serviço que é o carro chefe da LOG. Motoboys treinados e especializados em diversos segmentos. Ao contratar um Motoboy da LOG, você terá a certeza de um serviço de qualidade e direcionado ao seu negócio.</Text>
          </ContentText>
          <div>
            <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              Veja mais
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </button>
          </div>
        </Card>

        <Card>
          <ContentImage>
            <Image src={Vans} />
          </ContentImage>
          <ContentTitle>
            <Title>Locação mensal de Veículos Utilitários com e sem motoristas</Title>
          </ContentTitle>
          <ContentText>
            <Text>Acompanhando a crescente demanda de nossos clientes, a LOG TRANSPORTES oferece solução logística para o fornecimento de veículos utilitários, com ou sem motoristas habilitados para o transporte contínuo de mercadorias, de forma exclusiva e dedicada.</Text>
          </ContentText>
          <div>
            <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              Veja mais
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </button>
          </div>
        </Card>
        <Card>
          <ContentImage>
            <Image src={CaixaTermica} />
          </ContentImage>
          <ContentTitle>
            <Title>Transporte de Material Biológico</Title>
          </ContentTitle>
          <ContentText>
            <Text>A LOG TRANSPORTES possui alvará de Saúde emitido pela coordenação de vigilância sanitária municipal (visa), órgão responsável pela fiscalização e emissão da autorização para o transporte das amostras.</Text>
          </ContentText>
          <div>
            <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              Veja mais
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </button>
          </div>
        </Card>

        <Card>
          <ContentImage>
            <Image src={Funcionarios} />
          </ContentImage>
          <ContentTitle>
            <Title>Fornecimento de equipes administrativas</Title>
          </ContentTitle>
          <ContentText>
            <Text>Quando o nosso parceiro necessita de colaborador para o seu quadro administrativo ou operacional, a LOG fornece profissional já adaptado e com experiência.</Text>
          </ContentText>
          <div>
            <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              Veja mais
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </button>
          </div>
        </Card>
      </ContentCard>
    </Container>
    // <section className="container mx-auto">
    //   <div className="flex flex-row w-full items-center justify-items-center">

    //     <div className="basis-1/4 flex flex-col w-full items-center justify-items-center p-2 text-center">
    //       02
    //       <div>
    //         <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
    //           Veja mais
    //           <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    //             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    //           </svg>
    //         </button>
    //       </div>
    //     </div>

    //     <div className="basis-1/4 flex flex-col w-full items-center justify-items-center p-2 text-center">
    //       02
    //       <div>
    //         <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
    //           Saiba mais
    //           <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    //             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    //           </svg>
    //         </button>
    //       </div>
    //     </div>

    //     <div className="basis-1/4 flex flex-col w-full items-center justify-items-center p-2 text-center">
    //       02
    //       <div>
    //         <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
    //           Saiba mais
    //           <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    //             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    //           </svg>
    //         </button>
    //       </div>
    //     </div>

    //     <div className="basis-1/4 flex flex-col w-full items-center justify-items-center p-2 text-center">
    //       02
    //       <div>
    //         <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
    //           Saiba mais
    //           <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    //             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    //           </svg>
    //         </button>
    //       </div>
    //     </div>

    //   </div>
    // </section>
  )
}