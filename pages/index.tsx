import React, { useState, useEffect, useRef } from 'react';

import useScroll from 'hooks/useScroll';
import Layout from 'components/Layout';

import SectionOne from 'components/Homepage/SectionOne';
import SectionTwo from 'components/Homepage/SectionTwo';
import SectionThree from 'components/Homepage/SectionThree';
// import SectionFour from 'components/Homepage/SectionFour';

const Home = () => {
  const { scrollY } = useScroll();

  const sectionOne = useRef<HTMLElement>(null);
  const sectionTwo = useRef<HTMLElement>(null);
  const sectionThree = useRef<HTMLElement>(null);
  const sectionFour = useRef<HTMLElement>(null);

  const [sectionOneVisible, setSectionOneVisible] = useState(false);
  const [sectionTwoVisible, setSectionTwoVisible] = useState(false);
  const [sectionThreeVisible, setSectionThreeVisible] = useState(false);
  const [sectionFourVisible, setSectionFourVisible] = useState(false);

  useEffect(() => {
    let breakpoint = 500;
    if (typeof window !== 'undefined') {
      breakpoint = window.innerHeight / 2;
    }
    if (!sectionOneVisible
          && sectionOne.current
          && sectionOne.current.getBoundingClientRect().top < breakpoint
    ) { setSectionOneVisible(true); }

    if (!sectionTwoVisible
          && sectionTwo.current
          && sectionTwo.current.getBoundingClientRect().top < breakpoint
    ) { setSectionTwoVisible(true); }

    if (!sectionThreeVisible
        && sectionThree.current
        && sectionThree.current.getBoundingClientRect().top < breakpoint
    ) { setSectionThreeVisible(true); }

    if (!sectionFourVisible
          && sectionFour.current
          && sectionFour.current.getBoundingClientRect().top < breakpoint
    ) { setSectionFourVisible(true); }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollY]);

  return (
    <>
      <Layout theme="dark" title="Sean Watters — Software Engineer">
        <SectionOne isVisible={sectionOneVisible} refInjection={sectionOne} />
        <SectionTwo isVisible={sectionTwoVisible} refInjection={sectionTwo} />
        <SectionThree isVisible={sectionThreeVisible} refInjection={sectionThree} />
        {/* <SectionFour isVisible={sectionFourVisible} refInjection={sectionFour} /> */}
      </Layout>
    </>
  );
};

export default Home;
