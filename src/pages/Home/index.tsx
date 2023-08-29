import React from "react";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Logo from '../../assets/logo-com-fundo.png'

import { 
    Container
 } from './styles';
import { Header } from "../../components/Header";

export function Home() {
    return (
        <Container>
            <Header />
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