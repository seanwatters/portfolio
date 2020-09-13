import React from 'react';
import BrandIcon, { Icon } from './BrandIcon';

interface FooterIcon extends Icon {
  url: string
}

const icons: FooterIcon[] = [
  {
    company: 'linkedin-in',
    url: 'https://www.linkedin.com/in/seanwatters',
    size: 32.5,
  },
  {
    company: 'medium-m',
    url: 'https://medium.com/@sean_watters',
    size: 32.5,
  },
  {
    company: 'twitter',
    url: 'https://twitter.com/sean_watters',
    size: 32.5,
  },
  {
    company: 'github',
    url: 'https://github.com/seanwatters',
    size: 32.5,
  },
  {
    company: 'gitlab',
    url: 'https://gitlab.com/sean_watters',
    size: 32.5,
  },
];

const Layout = () => (
  <>
    <footer>
      <nav className="external-icons">
        {icons.map(({ company, url, size }: FooterIcon) => (
          <a key={Math.random() + company} href={url} aria-label={`Link to  ${company}`}>
            <BrandIcon company={company} color="white" backgroundColor="black" size={size} />
          </a>
        ))}
      </nav>
      <div className="tm">© 2020 sean watters</div>
    </footer>
    <style jsx>{`
        footer {
            width: 100vw;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .external-icons {
            width: 67.5vw;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .tm {
            font-size: 0.5rem;
            padding: 10px;
            text-transform: capitalize;
        }
        @media (min-width: 576px) { 
            .external-icons {
                width: 45vw;
            }
        }

        @media (min-width: 768px) { 
            .external-icons {
                width: 37.5vw;
            }
        }

        @media (min-width: 992px) {
            .external-icons {
                width: 25vw;
            }
        }

        @media (min-width: 1200px) { 
            .external-icons {
                width: 18vw;
            }
        }
    `}
    </style>
  </>
);

export default Layout;
