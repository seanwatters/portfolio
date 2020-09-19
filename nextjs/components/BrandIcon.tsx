import React from 'react';
import {
  faLinkedinIn, faMediumM, faTwitter, faGithub, faGitlab, faNode, faReact,
} from '@fortawesome/free-brands-svg-icons';
import { library, IconName } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faLinkedinIn, faMediumM, faTwitter, faGithub, faGitlab, faNode, faReact);

export interface Icon {
  company: IconName
  size: number
  color?: string
  backgroundColor?: string
}

const BrandIcon = ({
  company,
  size,
  color,
  backgroundColor,
}: Icon) => (
  <>
    <FontAwesomeIcon
      icon={['fab', company]}
      height={`${size - 14}px`}
      color={color}
    />

    <style jsx>{`
      .icon-wrapper {
        height: ${size}px;
        width: ${size}px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${backgroundColor || 'none'};
        border-radius: 50%;
      }  
  `}</style>
  </>
);

export default BrandIcon;
