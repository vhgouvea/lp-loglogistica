import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${props => props.theme.colors.background};
`;


export const ImageBackground = styled.img`
    width: 100%;
    margin: 0 auto;
    //height: min(100%, 750px);
`;

export const Content = styled.div`
  width: min(100%, 1440px);
  margin-inline: auto;
`;