import React from "react"
import PropTypes from "prop-types"
import "./main-layout.css"

import { css, Styled } from "theme-ui"

import NavBar from '../components/navigation/main-navbar'

const Layout = ({ children, props }) => {

  return (
    <>

      <Styled.root>
        <NavBar />
        <main className="content-space">
            {children}
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Styled.root>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout