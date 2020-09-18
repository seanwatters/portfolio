import React from 'react';
import Link from 'next/link';

import BrandIcon from 'components/BrandIcon';

const Layout = ({
  location,
}: { location?: string, theme: string }) => (
  <>
    <header>
      <nav className="title-section">
        <a className="twitter-icon" href="https://twitter.com/sean_watters">
          <BrandIcon company="twitter" color="#f5f5f7" size={37.5} />
        </a>
        <Link href="/"><a className="name-title">sean watters</a></Link>
      </nav>
      <nav className="nav-links">
        <Link href="/"><a className="link">Home</a></Link>
        <Link href="/blog"><a className="link">Blog</a></Link>
        <Link href="/resume"><a className="link">Resume</a></Link>
      </nav>
    </header>
    {location ? <h1 className="page-title">{location}</h1> : <></>}

    <style jsx>{`
        a:link {
            text-decoration: none;
        }
        a:visited {
            text-decoration: none;
        }
        a:active {
            text-decoration: none;
        }
        header {
            display: flex;
            width: 100vw;
            background-color: rgba(0,0,0,0.92);
            position: fixed;
            z-index: 10;
            justify-content: space-between;
            align-items: center;
            padding: 18px 0;
        }
        .title-section {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 23vw;
        }
        .twitter-icon {
            padding-left: 6vw;
        }
        .name-title {
            display: none;
        }
        .nav-links {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 45vw;
            padding-right: 6vw;
        }
        .link {
            color: #f5f5f7;
            font-weight: 400;
            text-transform: capitalize;
            font-size: 1rem;
        }
        .page-title {
            text-transform: capitalize;
            text-align: center;
            font-size: 3rem;
            padding-top: 125px;
        }

        @media (min-width: 576px) {
            header {
                padding: 22px 0;
            }
            .nav-links {
                width: 275px;
            }
            .link {
                font-size: 1.3rem;
            }
            .page-title {
                font-size: 2.75rem;
                padding-top: 130px;
            }
        }

        @media (min-width: 768px) {
            header {
                padding: 18px 0;
                width: 100vw;
            }
            .title-section {
                width: 205px;
            }
            .twitter-icon {
                padding-top: 1px;
                padding-left: 40px;
            }
            .name-title {
                display: block;
                color: #f5f5f7;
                color: white;
                font-weight: 400;
                font-size: 1.2rem;
                text-transform: capitalize;
                padding: 0px;
            }
            .nav-links {
                width: 175px;
                padding-top: 3px;
                padding-right: 60px;
            }
            .link {
                font-size: 1rem;
                padding: 0;
            }
            .page-title {
                font-size: 4rem;
                padding-top: 85px;
            }
        }

        @media (min-width: 992px) {
            header {
                padding: 14px;
                width: 100vw;
            }
            .title-section {
                width: 200px;
            }
            .name-title {
                font-size: 1.07rem;
            }
            .nav-links {
                padding-top: 3px;
                width: 200px;
            }
            .link {
                font-size: 1rem;
            }
            .page-title {
                font-size: 4.25rem;
                padding-top: 90px;
            }
        }

        @media (min-width: 1200px) {
            header {
                padding: 14px 0;
                width: 100vw;
            }
            .title-section {
                width: 230px;
            }
            .twitter-icon {
                padding-left: 60px;
            }
            .name-title {
                font-size: 1.22rem;
            }
            .nav-links {
                padding-top: 5px;
                width: 190px;
                padding-right: 60px;
            }
            .link {
                font-size: 1.1rem;
            }
            .page-title {
                font-size: 3.5rem;
                padding-top: 100px;
            }
        }
  `}</style>
  </>
);

export default Layout;
