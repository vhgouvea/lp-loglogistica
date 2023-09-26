import React from "react";

import { Card, Container, ContentIcon, ContentText, ContentTitle, Text, Title } from './styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

export function MissionVisionValues() {
  return(
    <Container>
      <Card>
        {/* <ContentIcon>
          <FontAwesomeIcon icon={'alarm-plus'} />
        </ContentIcon> */}
        <ContentText>
          <ContentTitle>
            <Title>Missão</Title>
          </ContentTitle>
          <Text>Promover soluções em logística integrada e transporte de cargas com qualidade, segurança e pontualidade sempre visando superar as expectativas dos nossos clientes e do mercado.</Text>
        </ContentText>
      </Card>
      <Card>
        {/* <ContentIcon>
          <FontAwesomeIcon icon={'alarm-plus'} style={{color: 'red'}} />
        </ContentIcon> */}
        <ContentText>
          <ContentTitle>
            <Title>Valores</Title>
          </ContentTitle>
          <Text style={{textAlign: 'center'}}>
            Confiança e Qualidade <br></br>
            Segurança e sigilo nas informações <br></br>
            Responsabilidade Social e ambiental <br></br>
            Foco no Cliente e Ética Profissional <br></br>
            Respeito aos clientes e stakeholders <br></br>
            Respeito à diversidade e Flexibilidade<br></br>
            Reconhecimento, valorização e qualificação das competências. <br></br>
          </Text>
        </ContentText>
      </Card>
      <Card>
        {/* <ContentIcon>
          <FontAwesomeIcon icon={'alarm-plus'} />
        </ContentIcon> */}
        <ContentText>
          <ContentTitle>
            <Title>Visão</Title>
          </ContentTitle>
          <Text>Oferecer soluções de excelência em logística integrada e transporte de cargas em todo estado da Bahia, viabilizando a distribuição dos materiais dos nossos clientes, dando visibilidade das nossas ações ao mercado.</Text>
        </ContentText>
      </Card>
    </Container>
  )
}

