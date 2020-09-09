import React from 'react';
import Link from 'next/link';

const Layout = ({
  location,
}: { location: string }) => (
  <>
    <header>
      <div className="pre-band">
        <Link href="/"><a className="name-title">sean watters — software engineer</a></Link>
        <nav className="nav-links">
          <Link href="/"><a className="link">Home</a></Link>
          <Link href="/blog"><a className="link">Blog</a></Link>
          <Link href="/resume"><a className="link">Resume</a></Link>
        </nav>
      </div>
      <h1 className="page-title">{location}</h1>
    </header>

    <style jsx>{`
    header {
        width: 100vw;
        height: 450px;
        background: rgba(0, 0, 0, 0) url("https://d33wubrfki0l68.cloudfront.net/f6a52691162bc42b12bc7462b2a013c409f4d8c1/ebcb3/images/swift-ui/swiftui2/background.svg") no-repeat scroll center top -425px;
    }
    .pre-band {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100vw;
        background-color: rgba(0,0,0,0.75);
        position: fixed;
        z-index: 10;
        flex-direction: column;
        padding: 5px 0;
    }
    .name-title {
        color: white;
        font-weight: 600;
        font-size: 1rem;
        text-transform: capitalize;
        padding: 0px;
    }
    .nav-links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 75vw;
    }
    .link {
        color: white;
        font-weight: 600;
        text-transform: capitalize;
        font-size: 1.35rem;
        padding: 12.5px 0;
    }
    .page-title {
        color: white;
        text-transform: capitalize;
        text-align: center;
        font-size: 5.5rem;
        padding-top: 125px;
    }

    @media (min-width: 576px) { 
        header {
            height: 500px;
            background: rgba(0, 0, 0, 0) url("https://d33wubrfki0l68.cloudfront.net/f6a52691162bc42b12bc7462b2a013c409f4d8c1/ebcb3/images/swift-ui/swiftui2/background.svg") no-repeat scroll center top -375px;
        }
        .pre-band {
            flex-direction: column;
            padding: 10px 0;
        }
        .name-title {
            font-size: 1rem;
            padding: 0px;
        }
        .nav-links {
            width: 325px;
        }
        .link {
            font-size: 1.7rem;
            padding: 17.5px 0;
        }
        .page-title {
            font-size: 8.75rem;
            padding-top: 120px;
        }
    }

    @media (min-width: 768px) { 
        header {
            height: 525px;
            background: rgba(0, 0, 0, 0) url("https://d33wubrfki0l68.cloudfront.net/f6a52691162bc42b12bc7462b2a013c409f4d8c1/ebcb3/images/swift-ui/swiftui2/background.svg") no-repeat scroll center top -350px;
        }
        .name-title {
            font-size: 1rem;
        }
        .pre-band {
            padding: 20px 0;
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
            font-size: 11rem;
            padding-top: 85px;
        }
    }

    @media (min-width: 992px) {
        header {
            height: 590px;
            background: rgba(0, 0, 0, 0) url("https://d33wubrfki0l68.cloudfront.net/f6a52691162bc42b12bc7462b2a013c409f4d8c1/ebcb3/images/swift-ui/swiftui2/background.svg") no-repeat scroll center top -290px;
        }
        .pre-band {
            padding: 25px 0;
        }
        .name-title {
            font-size: 1.15rem;
        }
        .nav-links {
            width: 270px;
        }
        .link {
            font-size: 1.15rem;
        }
        .page-title {
            font-size: 14rem;
            padding-top: 70px;
        }
    }

    @media (min-width: 1200px) { 
        header {
            height: 650px;
            background: rgba(0, 0, 0, 0) url("https://d33wubrfki0l68.cloudfront.net/f6a52691162bc42b12bc7462b2a013c409f4d8c1/ebcb3/images/swift-ui/swiftui2/background.svg") no-repeat scroll center top -230px;
        }
        .pre-band {
            padding: 18.5px 0;
        }
        .name-title {
            font-size: 1.25rem;
        }
        .nav-links {
            width: 300px;
        }
        .link {
            font-size: 1.25rem;
        }
        .page-title {
            font-size: 16rem;
            padding-top: 65px;
        }
    }
  `}</style>
  </>
);

export default Layout;
