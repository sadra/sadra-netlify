import React from "react"

const GithubLink = ({ name, description, stars, forks, link, thumbnail }) => (
  <article className="card ">
    <a href={link}>
      {!!thumbnail && (
        <img src={thumbnail} alt={"- Featured Shot"} />
      )}
    </a>
    <header>
      <h2 className="post-title">
        <a href={link} className="post-link">
          {name}
        </a>
      </h2>
      <div className="post-meta">{description}</div>
      <div>
        <i class="far fa-star"></i> {stars}
        <span>    </span>
        <i class="fas fa-code-branch"></i> {forks}
      </div>
    </header>
  </article>
)
export default GithubLink
