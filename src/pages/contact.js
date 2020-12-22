import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/images/phone.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Get in Touch</h1>
          <p>Let me help you kick start your next project &rarr;</p>
        </div>
        <div>
          <form className="form-container" action="https://formspree.io/f/mjvppkpj" method="post">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="Name" id="Name"/>
            </div>
            <div>
              <label htmlFor="_replyto">Email</label>
              <input type="email" name="_replyto" id="_replyto"/>
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" id="subject"/>
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <input type="submit" className="button -primary" style={{marginRight: 0}} />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`