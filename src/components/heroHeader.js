import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">

      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 justify-content-center align-items-center  text-center">
              <img
                className="avatar text-center rounded-circle shadow mb-3 bg-white rounded"
                src="/images/sadra.jpg"
                alt="avatar"
                data-holder-rendered="true"></img>

            <div className="headline">Sadra Amlashi</div>
            <p className="h5">NodeJs/NestJS<br/>Backend Developer</p>
            <div className="my-3">
              <a href="mailto:amlashi.sadra@gmail.com"><i className="fas fa-at fa-2x mx-2"></i></a>
              <a href="https://twitter.com/sadra_me"><i className="fab fa-twitter-square fa-2x mx-2"></i></a>
              <a href="https://github.com/sadra"><i className="fab fa-github fa-2x mx-2"></i></a>
              <a href="https://stackoverflow.com/users/10819789/sadra-amlashi"><i className="fab fa-stack-overflow fa-2x mx-2"></i></a>
              <a href="https://dev.to/sadra"><i className="fab fa-dev fa-2x mx-2"></i></a>
            </div>
          </div>
          <div className="col-12 col-lg-8">

            <div className="headline">Welcome to Sadra's blog</div>
            <div className="primary-content text-justify" >
              <p className="text-justify">{data.site.siteMetadata.home.description}</p>
            </div>
            <em><b>I love connecting with different people</b> so if you want to say <b>hi, I'll be happy to meet you more!</b> :) <strong><a href="/contact">Contact me now!</a></strong></em>
          </div>
      </div>
      </div>

        
      </div>
    )}
  />
)
