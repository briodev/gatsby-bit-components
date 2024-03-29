import merge from "deepmerge"
import typography from "./typography"
import colors from "./colors"
import styles from "./styles"
import prism from "./prism"
import {tailwind} from '@theme-ui/presets'

export default merge(typography, {
  ...tailwind,
  initialColorMode: `light`,
  colors: {
    ...tailwind.colors,
    colors
  },
  fonts: {
    ...tailwind.fonts
    // heading: `Montserrat, sans-serif`,
    // monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
  },
  sizes: {
    ...tailwind.sizes,
    container: 672,
    pageContainer: 1650
  },
  styles: {
    ...tailwind.styles,
    styles
  },
  prism,
})
