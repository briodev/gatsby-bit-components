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
            color: 'orange.6',
            fontSize: 5
        }}
      
      >A Test Component</Styled.h1>

      <Styled.p
        {...props}
        sx={{
            color: 'teal.6',
            textDecoration: 'underline'
        }}
      >
          Some text in a styled paragraph
      </Styled.p>
    </div>
  )
}