import { Global } from '@emotion/react'


const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'guminerts';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./assets/fonts/guminert/GuminertRegular.otf');
       }
      
      `}
  />
)

export default Fonts