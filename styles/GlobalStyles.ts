import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'
import { bp, breakpoints } from 'styles/breakpoint'
import theme, { rhythm } from 'styles/theme'

const GlobalStyles = createGlobalStyle`
/* stylelint-disable no-duplicate-selectors */

/* ---------------------------------------------
Reset CSS
--------------------------------------------- */

${reset}
html {
  background-color: ${theme.color.lightest};
  overflow-y: scroll;
}
html {
  text-size-adjust: 100%;
}
audio, canvas, video, progress, picture {
  display: inline-block;
}
template {
  display: none;
}
textarea {
  overflow: auto;
  resize: vertical;
  vertical-align: top;
}
::-moz-focus-inner {
  border: 0;
  padding: 0;
}

/* ---------------------------------------------
 Base Element Settings
--------------------------------------------- */
* {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  width: 100%;
}
html {
  font-size: 10px;
}
body {
  font-size: 1.6rem;
}
button {
  appearance: none;
  background: transparent;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  padding: 0;
}
a {
  text-decoration: none;
}
/* stylelint-enable no-duplicate-selectors */

/* ---------------------------------------------
 css variables
--------------------------------------------- */
:root {
  --container-padding: ${rhythm(3)};
  
  ${bp(breakpoints.sm)} {
    --container-padding: ${rhythm(5)};
  }
  
  ${bp(breakpoints.md)} {
    --container-padding: ${rhythm(8)};
  }
  
  ${bp(breakpoints.lg)} {
    --container-padding: ${rhythm(12)};
  }
  
  ${bp(breakpoints.xl)} {
    --container-padding: ${rhythm(15)};
  }
}
`

export default GlobalStyles
