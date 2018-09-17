import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Private holding and investment company' },
            { name: 'keywords', content: 'Nordhaus, private, holding, norway, startup' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <body style={{background: 'black', color: 'white'}}>
          {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100vh',
              background: 'black',
            }}
          >
            {/* <div>{data.site.siteMetadata.title}</div> */}
            <h1 style={{fontSize: '70px', fontWeight: 400, textShadow: '2px 2px #ff0000'}}>NORD<br/>HAUS</h1>
            {/* {children} */}
          </div>
        </body>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
