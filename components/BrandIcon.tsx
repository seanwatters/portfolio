import React from 'react';
import {
  faLinkedin, faMedium, faTwitter, faGithub, faGitlab, faNode, faReact,
} from '@fortawesome/free-brands-svg-icons';
import { library, IconName } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faLinkedin, faMedium, faTwitter, faGithub, faGitlab, faNode, faReact);

interface Props {
  company: IconName
  size: string
  color?: string
  url?: string
}

const BrandIcon = ({
  company,
  size,
  url,
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
