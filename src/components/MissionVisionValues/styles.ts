import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  margin-top: 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 30%;
  padding: 25px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentIcon = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ContentTitle = styled.div`
  width: 100%;
  padding-bottom: 10px;
  display: flex;
  text-align: center;
`;

export const ContentText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: justify;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 20px;
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