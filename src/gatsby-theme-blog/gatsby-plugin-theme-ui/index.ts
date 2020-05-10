import merge from 'deepmerge'
import { Theme } from 'theme-ui'

import defaultTheme from 'gatsby-theme-blog/src/gatsby-plugin-theme-ui'

const theme: Theme = merge(defaultTheme, {
  fontSizes: {
    small: '14px',
    normal: '16px',
  },
})

export default theme
