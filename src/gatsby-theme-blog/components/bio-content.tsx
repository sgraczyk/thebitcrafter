import React, { Fragment } from 'react'
import { Styled } from 'theme-ui'

import { FlexContainer } from '../../components/layout'

export default (): JSX.Element => (
  <Fragment>
    <FlexContainer direction="column">
      <span>
        I'm{' '}
        <Styled.a href="http://twitter.com/thebitcrafter">
          Szymon Graczyk
        </Styled.a>
        .
      </span>
      <small>technical leader | frontend developer | wannabe streamer</small>
    </FlexContainer>
  </Fragment>
)
