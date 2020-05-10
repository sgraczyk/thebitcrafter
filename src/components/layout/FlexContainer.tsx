import React, { CSSProperties } from 'react'
import { Flex } from 'theme-ui'

type FlexProps = React.ComponentPropsWithoutRef<typeof Flex> & {
  direction?: CSSProperties['flexDirection']
}

export default ({ direction, ...props }: FlexProps): JSX.Element => (
  <Flex {...props} sx={{ flexDirection: direction || 'row' }} />
)
