import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
  
      text_light: string;
      text: string;
      shadow: string;
      background: string;
      background_page: string;
    }
    
  }
}