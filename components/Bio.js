import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'
import profilePic from './Hunt_Andrew.png'

class Bio extends React.Component {
  render () {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={prefixLink(profilePic)}
          alt={`author ${config.authorName}`}
          style={{
            float: 'left',
            display: 'inline',
            marginRight: rhythm(1/2),
            marginBottom: 0,
            width: rhythm(6),
            height: rhythm(6),
            boxShadow: '0px 5px 3px 0px rgba(0,0,0,0.75)',
            verticalAlign: 'middle',
          }}
        />
        <strong>{config.authorName}</strong> is a senior at Princeton University and loves building cool things.

        Check out his <a href="/resume/">resume</a>.
      </p>
    )
  }
}

export default Bio
