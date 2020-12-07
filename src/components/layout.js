import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  useEffect(() => {
    effect
    window.gc_params = {
      graphcomment_id: 'sadra',

      // if your website has a fixed header, indicate it's height in pixels
      fixed_header_height: 0,
    };

    /* - - - DON'T EDIT BELOW THIS LINE - - - */

    
    (function() {
      var gc = document.createElement('script'); gc.type = 'text/javascript'; gc.async = true;
      gc.src = 'https://graphcomment.com/js/integration.js?' + Math.round(Math.random() * 1e8);
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(gc);
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
        <p>&copy; {new Date().getFullYear()} Delog &bull; Crafted with <span role="img" aria-label="love">❤️</span> by <a href="https://w3layouts.com">W3Layouts</a></p>
      </footer>
    </div>
  )
}
