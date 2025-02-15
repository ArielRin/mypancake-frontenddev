import { darkColors, lightColors } from './colors'

export const shadows = {
  level1: '0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)',
  active: '0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)',
  success: '0px 0px 0px 1px #44d1df, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)',
  warning: '0px 0px 0px 1px #f44560, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)',
  focus: '0px 0px 0px 1px #0098A1, 0px 0px 0px 4px rgba(0, 34, 55, 0.6)',
  inset: 'inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)',
  tooltip: '0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)',
}

export const tokens = {
  colors: {
    light: lightColors,
    dark: darkColors,
  },
  fonts: {
    normal: "'Comic-Sans', Roboto",
    mono: 'SFMono, ui-monospace, monospace',
  },
  space: {
    '0': '0px',
    px: '1px',
    '1': '4px',
    '2': '8px',
    '3': '16px',
    '4': '24px',
    '5': '32px',
    '6': '48px',
    '7': '64px',
    '4px': '4px',
    '8px': '8px',
    '12px': '12px',
    '16px': '16px',
    '24px': '24px',
    '32px': '32px',
    '48px': '48px',
    '64px': '64px',
  },
  borderWidths: {
    '0': '0px',
    '1': '1px',
    '2': '2px',
  },
  radii: {
    '0': '0px',
    small: '4px',
    default: '16px',
    card: '24px',
    circle: '50%',
  },
  fontSizes: {
    '10px': '10px',
    '12px': '12px',
    '16px': '16px',
    '14px': '14px',
    '20px': '20px',
    '40px': '40px',
  },
  shadows,
}

export type Mode = 'light' | 'dark'
export type Tokens = typeof tokens
