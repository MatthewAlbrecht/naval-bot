import Image from 'next/image'
import styled from 'styled-components'
import { BaseProps, baseStyles } from 'styles/base'
import { Alphas, BorderRadius, Colors } from 'styles/theme'

export type CircularImageProps = {
  borderRadius?: BorderRadius
}

export const CircularImage = styled(Image)<CircularImageProps>`
  border-radius: ${({ theme, borderRadius = '100' }) =>
    theme.borderRadius[borderRadius]};
  display: block;
`

type OverflowHiddenProps = {
  hide: boolean
}

export const OverflowHidden = styled.div<OverflowHiddenProps & BaseProps>`
  ${baseStyles}

  ${({ hide }) => hide && `overflow: hidden;`}
`

type HorizontalLineProps = {
  height?: number
  color: Colors
  alpha?: Alphas
}

export const HorizontalLine = styled.div<HorizontalLineProps>`
  background-color: ${({ color, theme, alpha = 100 }) => theme.aColor(color, alpha)};
  height: ${({ theme, height = 1 }) => theme.toRems(height)};
  width: 100%;
`
