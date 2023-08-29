import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.background};


  .hover-underline-animation {
    display: inline-block;
    position: relative;
    color: ${props => props.theme.colors.secondary};
  }

  .hover-underline-animation::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${props => props.theme.colors.primary};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .hover-underline-animation:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
    opacity: 0.75;
  }
`;

export const ImageBackground = styled.img`
  width: 100%px;
  height: 80px;
`;
export const Content = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .button {
  width: 140px;
  height: 45px;
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  }

  .button:hover {
    background-color: ${props => props.theme.colors.primary};
    box-shadow: 0px 7px 10px ${props => props.theme.colors.background};
    color: #fff;
    transform: translateY(-7px);
  }

  .a:hover {
    color: ${props => props.theme.colors.text};
  }
`;

export const ContentList = styled.ul`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;

export const ItemsList = styled.li`
  list-style-type: none;
`;

export const Text = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: ${props => props.theme.colors.text};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  :hover {
    color: ${props => props.theme.colors.text_light};
  }
`;

export const TextButton = styled.a`
  text-decoration: none;
  font-size: 11px;
  color: ${props => props.theme.colors.text};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


`;

export const Button = styled.button`
  width: min(100%, 100px);
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 700;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

    :hover {
    color: ${props => props.theme.colors.text_light};
  }
`;

