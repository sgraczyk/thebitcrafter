import merge from 'deepmerge'
import defaultThemeColors from 'gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors'

/**
 * These colors are following the pallette from
 * the Synthwave '84 VS Code theme
 * @see https://github.com/robb0wen/synthwave-vscode
 */
const darkPurple = '#232530'
const lightPink = '#ff7edb'
const lightGray = '#b9b8b9'
const darkPink = '#e728a1'

export default merge(defaultThemeColors, {
  modes: {
    dark: {
      background: darkPurple,
      text: lightGray,
      primary: lightPink,
      secondary: lightGray,
      highlight: darkPink,
    },
  },
})
