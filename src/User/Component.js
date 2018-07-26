import React from 'react';

const Component = ({
  login,
  avatar_url,
  name,
  public_repos,
  public_gists,
  followers
}) => (
  <div className="github-card user-card">
    <div className="header User" />
    <a className="avatar" href={`https://github.com/${login}`}>
      <img src={`${avatar_url}&amp;s=80`} alt={name} />
    </a>
    <div className="content">
      <h1>{name}</h1>
      <ul className="status">
        <li>
          <a href={`https://github.com/${login}?tab=repositories`}>
            <strong>{public_repos}</strong>Repos
          </a>
        </li>
        <li>
          <a href={`https://gist.github.com/${login}`}>
            <strong>{public_gists}</strong>Gists
          </a>
        </li>
        <li>
          <a href={`https://github.com/${login}/followers`}>
            <strong>{followers}</strong>Followers
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Component;
