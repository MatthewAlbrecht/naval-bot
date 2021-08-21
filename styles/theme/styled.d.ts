import 'styled-components'
import { BorderRadius, Colors, Fonts, Gradients, Opacities } from '.'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Record<Colors, string>
    font: Record<Fonts, string>
    borderRadius: Record<BorderRadius, string>
    zIndex: Record<ZIndex, number>
    opacity: Record<Opacities, Alphas>
    gradients: Record<Gradients, string>
    toRems: (size: number) => string
    rhythm: (mult: number) => string
    aColor: (color: Colors, alpha: Alphas) => string
  }
}
