import React from "react";

import { Card, Container, ContentIcon, ContentText, ContentTitle, Text, Title } from './styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import Missao from '../../assets/missao.png';
import Valores from '../../assets/valores.png';
import Visao from '../../assets/visao.png';

export function MissionVisionValues() {
  // return(
  //   <Container>
  //     <Card>
  //       <ContentIcon>
  //         <img src={Missao} alt="missao" className="w-24 h-24" />
  //       </ContentIcon>
  //       <ContentTitle>
  //         <Title>Missão</Title>
  //       </ContentTitle>
  //       <ContentText>
  //         <Text>Promover soluções em logística integrada e transporte de cargas com qualidade, segurança e pontualidade sempre visando superar as expectativas dos nossos clientes e do mercado.</Text>
  //       </ContentText>
  //     </Card>
  //     <Card>
  //       <ContentIcon>
  //         <img src={Valores} alt="valores" className="w-24 h-24" />
  //       </ContentIcon>
  //       <ContentTitle>
  //         <Title>Valores</Title>
  //       </ContentTitle>
  //       <ContentText>
  //         <Text style={{textAlign: 'center'}}>
  //           Confiança e Qualidade <br></br>
  //           Segurança e sigilo nas informações <br></br>
  //           Responsabilidade Social e ambiental <br></br>
  //           Foco no Cliente e Ética Profissional <br></br>
  //           Respeito aos clientes e stakeholders <br></br>
  //           Respeito à diversidade e Flexibilidade<br></br>
  //           Reconhecimento, valorização e qualificação das competências. <br></br>
  //         </Text>
  //       </ContentText>
  //     </Card>
  //     <Card>
  //       <ContentIcon>
  //         <img src={Visao} alt="visao" className="w-24 h-24" />
  //       </ContentIcon>
  //       <ContentTitle>
  //         <Title>Visão</Title>
  //       </ContentTitle>
  //       <ContentText>
  //         <Text>Oferecer soluções de excelência em logística integrada e transporte de cargas em todo estado da Bahia, viabilizando a distribuição dos materiais dos nossos clientes, dando visibilidade das nossas ações ao mercado.</Text>
  //       </ContentText>
  //     </Card>
  //   </Container>
  // )
  return (
    <div className="flex flex-wrap justify-center mt-8 sm:mt-16 md:mt-24">
      {/* Mission Card */}
      <div className="w-full sm:w-1/2 md:w-1/3 p-4 sm:p-8">
        <div className="text-center">
          <img src={Missao} alt="missao" className="w-24 h-24 mx-auto" />
          <h1 className="text-title text-xl font-bold mt-4">Missão</h1>
        </div>
        <div className="h-40 mt-4">
          <p className="text-text text-base font-normal text-justify">
            Promover soluções em logística integrada e transporte de cargas com qualidade, segurança e pontualidade sempre visando superar as expectativas dos nossos clientes e do mercado.
          </p>
        </div>
      </div>

      {/* Values Card */}
      <div className="w-full sm:w-1/2 md:w-1/3 p-4 sm:p-8">
        <div className="text-center">
          <img src={Valores} alt="valores" className="w-24 h-24 mx-auto" />
          <h1 className="text-title text-xl font-bold mt-4">Valores</h1>
        </div>
        <div className="h-40 mt-4">
          <p className="text-text text-base font-normal text-center">
            Confiança e Qualidade <br />
            Segurança e sigilo nas informações <br />
            Responsabilidade Social e ambiental <br />
            Foco no Cliente e Ética Profissional <br />
            Respeito aos clientes e stakeholders <br />
            Respeito à diversidade e Flexibilidade<br />
            Reconhecimento, valorização e qualificação das competências. <br />
          </p>
        </div>
      </div>

      {/* Vision Card */}
      <div className="w-full sm:w-1/2 md:w-1/3 p-4 sm:p-8">
        <div className="text-center">
          <img src={Visao} alt="visao" className="w-24 h-24 mx-auto" />
          <h1 className="text-title text-xl font-bold mt-4">Visão</h1>
        </div>
        <div className="h-40 mt-4">
          <p className="text-text text-base font-normal text-justify">
            Oferecer soluções de excelência em logística integrada e transporte de cargas em todo estado da Bahia, viabilizando a distribuição dos materiais dos nossos clientes, dando visibilidade das nossas ações ao mercado.
          </p>
        </div>
      </div>
    </div>
  );
}

