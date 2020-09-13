import React from 'react';
import Link from 'next/link';

const Layout = ({
  location,
}: { location?: string }) => (
  <>
    <header>
      <Link href="/"><a className="name-title">sean watters</a></Link>
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
            justify-content: space-between;
            align-items: center;
            width: 100vw;
            background-color: rgba(0,0,0,0.92);
            position: fixed;
            z-index: 10;
            flex-direction: column;
            padding: 12px 0;
        }
        .name-title {
            color: #f5f5f7;
            color: white;
            font-weight: 400;
            font-size: 1rem;
            text-transform: capitalize;
            padding: 0px;
        }
        .nav-links {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 70vw;
        }
        .link {
            color: #f5f5f7;
            font-weight: 400;
            text-transform: capitalize;
            font-size: 1.35rem;
            padding: 14px 0 0 0;
        }
        .page-title {
            text-transform: capitalize;
            text-align: center;
            font-size: 3rem;
            padding-top: 125px;
        }

        @media (min-width: 576px) {
            header {
                flex-direction: column;
                padding: 16px 0;
            }
            .name-title {
                font-size: 1rem;
                padding: 0px;
            }
            .nav-links {
                width: 275px;
            }
            .link {
                font-size: 1.3rem;
                padding: 10px 0 0 0;
            }
            .page-title {
                font-size: 2.75rem;
                padding-top: 130px;
            }
        }

        @media (min-width: 768px) {
            .name-title {
                font-size: 1rem;
            }
            header {
                padding: 14px 20vw;
                width: 60vw;
                flex-direction: row;
            }
            .nav-links {
                width: 200px;
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
                padding: 14px 20vw;
                width: 60vw;
            }
            .name-title {
                font-size: 0.875rem;
            }
            .nav-links {
                width: 215px;
            }
            .link {
                font-size: 0.875rem;
            }
            .page-title {
                font-size: 4.25rem;
                padding-top: 90px;
            }
        }

        @media (min-width: 1200px) {
            header {
                padding: 14px 20vw;
                width: 60vw;
            }
            .name-title {
                font-size: 1rem;
            }
            .nav-links {
                width: 225px;
            }
            .link {
                font-size: 1rem;
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
