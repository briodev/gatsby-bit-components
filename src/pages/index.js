import React from "react"
import Layout from '../layouts/main-layout'
import { Styled, css } from "theme-ui"
/** @jsx jsx */
import { jsx } from 'theme-ui'

import CTA100 from '../components/call-to-action/cta100'

export default (props) => {
  return (
    <Layout>

        <Styled.h1
          {...props}
          sx={{
            color: 'muted',
            fontSize: 4
          }}
        >
          Home Page</Styled.h1>

          <CTA100 />

    </Layout>
  )
}
