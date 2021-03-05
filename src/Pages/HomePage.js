//Before I start to 'rfce + tab key'
import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          {/* TODO:className変えたい */}
          Hi there. I'm &nbsp;
          {/* スペースを特殊文字コードにしている */}
          <span>Tomohiro Sugiyama</span>
        </h1>
        <p className="h-sub-text">自己紹介内容を追加します</p>
        <div className="icons">
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faFacebook} className="icon facebook" />
          </Link>
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon github" />
          </Link>
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faYoutube} className="icon youtube" />
          </Link>
          {/* TODO:LinkedInを追加 */}
        </div>
      </header>
    </div>
  );
}

export default HomePage;
