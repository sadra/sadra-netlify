import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
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
                data-holder-rendered="true"></img>

            <div className="headline">Sadra Amlashi</div>
            <p className="h5">NodeJs/NestJS<br/>Backend Developer</p>
            <div className="my-3">
              <a href="#"><i className="fas fa-at fa-2x mx-2"></i></a>
              <a href="#"><i className="fab fa-twitter-square fa-2x mx-2"></i></a>
              <a href="#"><i className="fab fa-github fa-2x mx-2"></i></a>
              <a href="#"><i className="fab fa-stack-overflow fa-2x mx-2"></i></a>
              <a href="#"><i className="fab fa-dev fa-2x mx-2"></i></a>
            </div>
          </div>
          <div className="col-12 col-lg-8">

            <div className="headline">Welcome to Sadra's blog</div>
            <div className="primary-content text-justify" >
              <p className="text-justify">{data.site.siteMetadata.home.description}</p>
            </div>
            
            <div className="mb-4">
              <h3>Programming Languages <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30"></img></h3>
              <img className="mx-3 mb-3 mt-1" src="https://devicons.github.io/devicon/devicon.git/icons/javascript/javascript-original.svg" alt="Javascript" width="40"/>
              <img className="mx-3 mb-3 mt-1" src="https://devicons.github.io/devicon/devicon.git/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/>
              <img className="mx-3 mb-3 mt-1" src="https://raw.githubusercontent.com/devicons/devicon/3b40f5c4cc89355edb33e86a93e919dd25c36a81/icons/swift/swift-original-wordmark.svg" alt="Swift" width="40" height="40"/>
              <img className="mx-3 mb-3 mt-1" src="https://raw.githubusercontent.com/devicons/devicon/3b40f5c4cc89355edb33e86a93e919dd25c36a81/icons/java/java-original-wordmark.svg" alt="Java" width="40" height="40"/>
              <img className="mx-3 mb-3 mt-1" src="https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg" alt="Kotlin" width="40" height="40"/>  
            </div>

            <div>
              <h3>Tools & Technologies 🛠️</h3>
              <img className="mx-3 mb-3 mt-1" src="https://raw.githubusercontent.com/devicons/devicon/3b40f5c4cc89355edb33e86a93e919dd25c36a81/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="60" height="60"/>
              <img className="mx-3 mb-3 mt-1" src="https://camo.githubusercontent.com/5f54c0817521724a2deae8dedf0c280a589fd0aa9bffd7f19fa6254bb52e996a/68747470733a2f2f6e6573746a732e636f6d2f696d672f6c6f676f2d736d616c6c2e737667" alt="nodejs" width="40" height="40"/>
              <img className="mx-3 mb-3 mt-1" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png" alt="docker" width="40"/>
              <img className="mx-3 mb-3 mt-1" src="https://raw.githubusercontent.com/Delta456/Delta456/master/img/git.png" alt="git" width="40"/>
              <img className="mx-3 mb-3 mt-1" src="https://raw.githubusercontent.com/Delta456/Delta456/master/img/vscode.png" alt="vscode logo" width="40"/>
              <img className="mx-3 mb-3 mt-1" src="https://raw.githubusercontent.com/devicons/devicon/3b40f5c4cc89355edb33e86a93e919dd25c36a81/icons/intellij/intellij-original.svg" alt="intellij" width="40"/> 
            </div>
            <em><b>I love connecting with different people</b> so if you want to say <b>hi, I'll be happy to meet you more!</b> :) <strong><a href="/contact">Contact me now!</a></strong></em>
          </div>
      </div>
      </div>

        
      </div>
    )}
  />
)