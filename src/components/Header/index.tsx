import React, { useEffect, useState } from "react";
import {
  Button,
  Container, 
  Content, 
  ContentList, 
  ImageBackground, 
  ItemsList, 
  Text,
  TextButton
} from './styles';

import Logo from '../../assets/logo.png'

import ListaDados from './dadosHeader';

export function Header() {

  return (
    <Container>
      <Content>
        <ImageBackground src={Logo} />
      </Content>
      <ContentList>
        {ListaDados.map(item => (
          <ItemsList>
            <Text href="#" className="hover-underline-animation">{item.name}</Text>
          </ItemsList>
        ))}
      </ContentList>

      <Content>
        <Button  className="button">
          <TextButton href="https://loglogin.azurewebsites.net/" target="_blank">
            Área do Cliente
          </TextButton>
        </Button>
      </Content>
    </Container>
  );
}