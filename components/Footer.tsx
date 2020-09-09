import React from 'react';
import {
  faLinkedin, faMedium, faTwitter, faGithub, faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import { library, IconName } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faLinkedin, faMedium, faTwitter, faGithub, faGitlab);

interface Icon {
    company: IconName
    url: string
    color: string
    backgroundColor: string
}

const icons: Icon[] = [
  {
    company: 'linkedin',
    url: 'https://www.linkedin.com/in/seanwatters',
    color: 'darkblue',
    backgroundColor: 'white',
  },
  {
    company: 'medium',
    url: 'https://medium.com/@sean_watters',
    color: 'black',
    backgroundColor: 'white',
  },
  {
    company: 'twitter',
    url: 'https://twitter.com/sean_watters',
    color: 'lightblue',
    backgroundColor: 'white',
  },
  {
    company: 'github',
    url: 'https://github.com/seanwatters',
    color: 'black',
    backgroundColor: 'white',
  },
  {
    company: 'gitlab',
    url: 'https://gitlab.com/sean_watters',
    color: 'orange',
    backgroundColor: 'white',
  },
];

const Layout = () => (
  <>
    <footer>
      <nav className="external-icons">
        {icons.map(({ company, url }: Icon) => (
          <a key={Math.random() + company} href={url} aria-label={`Link to  ${company}`}>
            <FontAwesomeIcon icon={['fab', company]} className="footer-icon" color="black" height="32px" />
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
            font-size: 0.65rem;
            padding: 10px;
            text-transform: capitalize;
        }
        @media (min-width: 576px) { 
            .external-icons {
                width: 45vw;
            }
            .tm {
                font-size: 0.75rem;
                padding: 10px;
            }
        }

        @media (min-width: 768px) { 
            .external-icons {
                width: 37.5vw;
            }
            .tm {
                font-size: 0.75rem;
                padding: 10px;
            }
        }

        @media (min-width: 992px) {
            .external-icons {
                width: 25vw;
            }
            .tm {
                font-size: 0.75rem;
                padding: 10px;
            }
        }

        @media (min-width: 1200px) { 
            .external-icons {
                width: 20vw;
            }
            .tm {
                font-size: 0.75rem;
                padding: 10px;
            }
        }
    `}
    </style>
  </>
);

export default Layout;
