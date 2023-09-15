import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 500px;
`;

export const ContentImage = styled.div`
    width: 50%;
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
  text-align: justify;
  align-items: center;

`;

export const ContentTitle = styled.div`
  text-align: center;
  height: 50px;
  /* border-bottom: 2px solid ${props => props.theme.colors.primary}; */
`;

export const Title = styled.h1`
  font-size: 24px;
  color: ${props => props.theme.colors.secondary};
  position: relative;
  font-family: 'Poppins', sans-serif;
  width: 100%;
`;

export const Text = styled.p`
  font-size: 16px;
  color: ${props => props.theme.colors.text_light};
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
`;

export const Image = styled.img`
  width: 100%;
  margin: 0 auto;
  height: min(100%, 450px);
`;