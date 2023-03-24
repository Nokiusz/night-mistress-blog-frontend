const theme = {
  colors: {
    white: '#FFFFFF',
    darkblue: '#0D2549',
    red: '#CB2A33',
    lightgray: '#98A0B0',
    gray: '#E8E8E8',
    grayer: '#A4A4A4'
  }
};

export default theme;

export declare type Theme = typeof theme;

export interface ThemeProps {
    theme:Theme
}