import React from 'react'
import { Styled, css } from "theme-ui"
/** @jsx jsx */
import { jsx } from 'theme-ui'

export default (props) => {
  return (
    <div>
      <Styled.h1
        {...props}
        sx={{
            color: 'highlight',
            fontSize: 5
        }}
      
      >A Test Component</Styled.h1>

      <Styled.p
        {...props}
        sx={{
            color: 'primary',
            textDecoration: 'underline'
        }}
      >
          Some text in a styled paragraph
      </Styled.p>
    </div>
  )
}