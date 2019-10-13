import "typeface-montserrat"
import "typeface-merriweather"
import { toTheme } from "@theme-ui/typography"
//import wordpress2016 from "typography-theme-wordpress-2016"
import noriega from 'typography-theme-noriega'

export default toTheme({...noriega, includeNormalize: true})
