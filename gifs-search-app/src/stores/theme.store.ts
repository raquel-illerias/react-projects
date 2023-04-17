import { create } from "zustand";

interface Theme {
    colourWhite: string;
    colourBlack: string;
    colourBg1: string;
    colourBg2: string;
    colourBlueLight: string;
    colourDarkBlue: string;
    colourDarkBlue2: string;
    colourRed: string;
    colourPurple: string;
    colourBlue2: string;
    colourGreen: string;
    colourGreen2: string;
    colourYellow: string;
    colourGrey: string;
    colourGreyDark: string;
  }
  
  type SetTheme = (newTheme: Theme) => void;
  
  interface ThemeStore {
    theme: Theme;
    setTheme: SetTheme;
  }

export const useThemeStore = create<ThemeStore>((set) => ({
    theme:  {
        colourWhite: "#fff",
        colourBlack: "#000",
        colourBg1: '#fff6fa',
        colourBg2: '#0a0a0c',
        colourBlueLight: '#00ccff',
        colourDarkBlue: '#005178',
        colourDarkBlue2: '#003150',
        colourRed: '#fb3655',
        colourPurple: '#6157ff',
        colourBlue2: '#00e6cc',
        colourGreen: '#00ff99',
        colourGreen2: '#00cc66',
        colourYellow: '#fff35c',
        colourGrey: '#f2f2f2',
        colourGreyDark: '#B4B5B6',
    },
    setTheme: (newTheme) => set({theme: newTheme})
}))

