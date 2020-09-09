import React from 'react';
import {
  faLinkedin, faMedium, faTwitter, faGithub, faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import { library, IconName } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faLinkedin, faMedium, faTwitter, faGithub, faGitlab);

interface Props {
    url: string
    company: IconName
    size: string
    color: string
}

const BrandIcon = ({
  url,
  company,
  size,
  color,
}: Props) => (
  <a
    href={url}
    aria-label={`Link to ${company}`}
  >
    <FontAwesomeIcon
      icon={['fab', company]}
      className="header-icon"
      height={size}
      color={color}
    />
  </a>
);

export default BrandIcon;
