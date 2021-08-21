// adapted from: https://github.com/reach/reach-ui/tree/d2864c99f497f69ba0dd4a6d980209285945b46b/packages/visually-hidden

import styled from 'styled-components'

export const VisuallyHidden = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  word-wrap: normal;
`
