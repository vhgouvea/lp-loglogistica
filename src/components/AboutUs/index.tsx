import React from 'react';
import { 
  Container, 
  ContentImage, 
  ContentText, 
  ContentTitle, 
  Image,
  Title,
  Text
} from './styles';

import ImageAboutUs from '../../assets/aboutus.jpg'

export function AboutUs() {
  return (
    <Container>
      <ContentImage>
          <Image src={ImageAboutUs} />
      </ContentImage>
      <ContentText>
        <ContentTitle>
          <Title>Conheça a LOG</Title>
        </ContentTitle>
        <Text>
          A Log Transportes ao longo de seus 20 anos de existência tornou-se referência na prestação de serviço de entregas.
        </Text>
        <Text>
        Focada no segmento de entregas rápidas, a LOG TRANSPORTES oferece uma ampla gama de serviços, além dos projetos customizados visando redução de custos e maximização de resultados.
        </Text>
      </ContentText>
    </Container>
  )
}