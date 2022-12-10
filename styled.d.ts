import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      tertiary: string
      grey: string
    }
    fonts: {
      monument:string
    }

  }
}
