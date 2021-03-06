import React from 'react'
import {
  graphql
} from 'gatsby'
import Footer from '../components/Footer'
import Hero from './Homepage/Hero'

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <>
      <Hero hero={frontmatter.hero}/>
      <Footer/>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomePage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        hero {
          subtitle
          title
          dots__image {
            childImageSharp {
              fixed(width: 200, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
