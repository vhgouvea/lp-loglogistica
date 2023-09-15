import React from "react";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

import Logo from '../../assets/logo-com-fundo.png';

import Banner from '../../assets/banner_teclado.jpg';

import { 
    Container, Content, ImageBackground
 } from './styles';
import { Header } from "../../components/Header";
import { AboutUs } from "../../components/AboutUs";
import { Services } from "../../components/Services";

export function Home() {
    return (
        <Container>
            <Header />
            <ImageBackground src={Banner} />

            <Content>
                <AboutUs />
                <Services />
            </Content>

            <FloatingWhatsApp 
                accountName="Log Transportes"
                phoneNumber="17996428126" //71988891370
                avatar={Logo}
                chatMessage="Olá, como posso ajuda-lo?"
                allowEsc={true}
            />
        </Container>
    )   
}