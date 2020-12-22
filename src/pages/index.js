import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"
import GithubLink from "../components/github-link";

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const repos = [
    {
      "id": 179501605,
      "name": "middle-east",
      "html_url": "https://github.com/sadra/middle-east",
      "description": "Middle East is Typora RTL theme",
      "stargazers_count": 83,
      "forks_count": 13
    },
    {
      "id": 92442568,
      "name": "AwesomeSpinner",
      "html_url": "https://github.com/sadra/AwesomeSpinner",
      "description": "With Awesome Spinner you can implement a material spinner with access to define direction layout and hint text.",
      "stargazers_count": 59,
      "forks_count": 10
    },
    {
      "id": 292873586,
      "name": "one-time-activation-code",
      "html_url": "https://github.com/sadra/one-time-activation-code",
      "description": "One Time Password npm package",
      "stargazers_count": 10,
      "forks_count": 1
    },
    {
      "id": 90123609,
      "name": "awesome-medium-editor",
      "html_url": "https://github.com/sadra/awesome-medium-editor",
      "description": "Medium.com WYSIWYG editor clone, with RTL support.",
      "stargazers_count": 12,
      "forks_count": 1
    },
    {
      "id": 98732433,
      "name": "NLeveLExpandableListView",
      "html_url": "https://github.com/sadra/NLeveLExpandableListView",
      "description": "This is an Android project about N-Level Expandable ListView",
      "stargazers_count": 6,
      "forks_count": 5
    },{
      "id": 77823389,
      "name": "Pop-Up-UIView",
      "html_url": "https://github.com/sadra/Pop-Up-UIView",
      "description": "This is an example to a create Pop Up UIView in with Swift language",
      "stargazers_count": 4,
      "forks_count": 0
    }
  ]

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  const Githubs = repos
    .map(repo => <GithubLink 
      key={repo.id}
      name={repo.name}
      description={repo.description}
      stars={repo.stargazers_count}
      forks={repo.forks_count}
      link={repo.html_url}
    />)

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <HeroHeader/>
      <h2 id="blog-posts">Blog Posts &darr;</h2>
      <div className="grids">
        {Posts}
      </div>
      <br/>
      <h2 id="open-source">Open Source &darr;</h2>
      <div className="grids">
        {Githubs}
      </div>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`
