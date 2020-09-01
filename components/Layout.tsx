import React from 'react';
import Head from 'next/head';

import Link from 'next/link';

import {
  faLinkedin, faMedium, faTwitter, faGithub, faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import { library, IconName } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faLinkedin, faMedium, faTwitter, faGithub, faGitlab);

interface Props {
    children: any[] | any
    title: string
    location: string
}

interface Icon {
  company: IconName
  url: string
}

const icons: Icon[] = [
  {
    company: 'linkedin',
    url: 'https://www.linkedin.com/in/seanwatters',
  },
  {
    company: 'medium',
    url: 'https://medium.com/@sean_watters',
  },
  {
    company: 'twitter',
    url: 'https://twitter.com/sean_watters',
  },
  {
    company: 'github',
    url: 'https://github.com/seanwatters',
  },
  {
    company: 'gitlab',
    url: 'https://gitlab.com/sean_watters',
  },
];

const Layout = ({
  children,
  title,
  location,
}: Props) => (
  <>
    <div id="page-container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Information about Sean Watters."
        />
      </Head>
      <header>
        <div className="pre-band">
          <Link href="/"><a className="name-header">sean watters — software engineer</a></Link>
          <div className="page-navigation-links">
            <nav className="nav-links">
              <Link href="/"><a>Home</a></Link>
              <Link href="/blog"><a>Blog</a></Link>
              <Link href="/resume"><a>Resume</a></Link>
            </nav>
          </div>
        </div>
        <nav className="external-icons">
          {icons.map(({ company, url }: Icon) => (
            <a key={Math.random() + company} href={url} aria-label={`Link to  ${company}`}>
              <FontAwesomeIcon icon={['fab', company]} className="header-icon" height="42.5px" />
            </a>
          ))}
        </nav>
        <div className="page-title">
          <h1 className="title-style">{location}</h1>
        </div>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <div className="footer-band">
          <div className="footer-external-icons">
            {icons.map(({ company, url }: Icon) => (
              <a key={Math.random() + company} href={url} aria-label={`Link to  ${company}`}>
                <FontAwesomeIcon icon={['fab', company]} className="footer-icon" color="white" height="25px" />
              </a>
            ))}
          </div>
          <div className="tm">© 2020 sean watters</div>
        </div>
      </footer>
    </div>
    <style jsx>{`
    .pre-band {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 55%;
      min-width: 750px;
      margin:auto;
      margin-top: 20px;
    }
    .name-header {
      font-family: "Courier New", Courier, monospace;
      font-size: 17px;
      font-weight: 600;
    }
    .nav-links {
      width: 260px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: "Courier New", Courier, monospace;
      font-size: 23px;
    }
    
    .external-icons {
      margin: auto;
      margin-top: 45px;
      max-width: 25%;
      min-width: 370px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: -10px;
    }
    .external-icon {
      font-size: 35px;
    }
    
    .page-title {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media only screen and (max-width : 420px) {
      .pre-band {
        height: 60px;
        flex-direction: column;
        max-width: 90%;
        min-width: 90%;
      }
      .name-header {
        font-size: 16px;
      }
      .external-icons {
        margin: auto;
        margin-top: 50px;
        max-width: 72.5%;
        min-width: 72.5%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0px;
      }
      .external-icon {
        font-size: 27.5px;
      }
    }

    .footer-band {
      height: 140px;
      margin-top: 100px;
      background: black;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
    .footer-external-icons {
      width: 250px;
      display: flex;
      justify-content: space-around;
    }
    .footer-external-icon {
      font-size: 20px;
      color: whitesmoke;
    }
    .tm {
      text-align: center;
      font-size: 12px;
      font-family: monospace;
      color: whitesmoke;
      margin-bottom: 3px;
      margin-top: 20px; clear: both;
    }
  `}</style>
  </>
);

export default Layout;
