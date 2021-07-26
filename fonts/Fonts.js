import { Global } from "@emotion/react"
const Fonts = () => (
    <Global
        styles={`
      /* Copied from https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap */
      @font-face {
        font-family: 'Indie Flower';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap) format('truetype');
      }
      `}
    />
)

export default Fonts
