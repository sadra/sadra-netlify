import React, { useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  useEffect(() => {
    window.gc_params = {
      graphcomment_id: 'sadra',
      fixed_header_height: 0,
    };

    const addJs = url => {
      var gc = document.createElement('script');
      gc.type = 'text/javascript';
      gc.async = true;
      gc.src = url;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(gc);
    }

    const addCss = url => {
      var gc = document.createElement('link');
      gc.rel = 'stylesheet';
      gc.href = url;
      document.getElementsByTagName('head')[0].prepend(gc)
    }

    (function() {
      addCss("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css")
      addJs("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js")
      addJs("https://use.fontawesome.com/releases/v5.15.1/js/all.js")
      addJs('https://graphcomment.com/js/integration.js?' + Math.round(Math.random() * 1e8))
    })();
  }, null)


  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
            <div className="my-3">
              <a href="mailto:amlashi.sadra@gmail.com"><i className="fas fa-at fa-1x mx-2"></i></a>
              <a href="https://twitter.com/sadra_me"><i className="fab fa-twitter-square fa-1x mx-2"></i></a>
              <a href="https://github.com/sadra"><i className="fab fa-github fa-1x mx-2"></i></a>
              <a href="https://stackoverflow.com/users/10819789/sadra-amlashi"><i className="fab fa-stack-overflow fa-1x mx-2"></i></a>
              <a href="https://dev.to/sadra"><i className="fab fa-dev fa-1x mx-2"></i></a>
            </div>
        <p>&copy; {new Date().getFullYear()} Delog &bull; Crafted with <span role="img" aria-label="love">❤️</span> by <a href="https://w3layouts.com">W3Layouts</a></p>
      </footer>
    </div>
  )
}
