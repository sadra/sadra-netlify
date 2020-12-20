import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/"><i class="fas fa-home"></i></Link>
    <a href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1ch9_cYuH89C8ObAbmlLbOAgmjbktZTYEOqLI4mRIWkQ/export?format=pdf">CV</a>
    <Link to="/contact">Contact</Link>
    <ThemeChanger/>
  </nav>
  
)