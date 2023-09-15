import styled from "styled-components";



export const Container = styled.div`
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const ContentCard = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const ChipTitle = styled.div`
  text-align: center;
  height: 50px;
  /* border-bottom: 2px solid ${props => props.theme.colors.primary}; */
`;

export const PageTitle = styled.h1`
  font-size: 24px;
  color: ${props => props.theme.colors.secondary};
  position: relative;
  font-family: 'Poppins', sans-serif;
  width: 100%;
`;

export const Card = styled.div`
  width: 23%;
  height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.background_page};
  border-radius: 10px;
  border-bottom: 3px solid ${props => props.theme.colors.primary};
  box-shadow: 5px 5px 10px;
`;

export const ContentImage = styled.div`
  width: 100%;
`;

export const ContentTitle = styled.div`
  padding-top: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 120px;
`;

export const ContentText = styled.div`
  padding-top: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 250px;
`;

export const Image = styled.img`
  width: 100%;
  margin: 0;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
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