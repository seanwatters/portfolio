import React from 'react';
import Layout from 'components/Layout';

const Home = () => (
  <>
    <Layout title="Sean Watters — Resume" location="home">
      <p>
        <img
          src="https://avatars0.githubusercontent.com/u/3721925?s=460&u=6603032504718387e7c21c1fe7cc936eb281960b&v=4"
          alt="profile"
          height="150px"
          width="150px"
        />
        Born and raised in the Greater Seattle Area.
        Studied Computer Science at Arizona State University.
        Currently writing software in Phoenix, AZ.
      </p>
      <p>
        Familiarity with contemporary software delivery processes has given me
        the ability to grow and lead my team to continuously deliver reliable software,
        on time with confidence; resulting in increased velocity, appropriate test coverage
        and the flexibility to adapt quickly in production.
      </p>
      <p>
        I value opportunities to reason about loosely defined technical challenges
        and solutions. I have demonstrated a high capacity for navigating
        ambiguous problems and positively impacting business outcomes through innovation,
        effective organization, and overall execution of key projects. I value self sufficiency
        and time for independent problem solving, however, also enjoy team efforts and
        opportunities to collaborate within groups.
      </p>
      <p>
        Outside of work I enjoy spending time with my wife and our dog, Sam.
        I very much enjoy some good coffee, water sports, hiking, and the outdoors.
        In high school and college I played rugby competively, and have an Olympic
        Weightlifting coaching certification.
      </p>
    </Layout>

    <style jsx>{`
        img {
          float: left; 
          border-radius: 75px; 
          margin-right: 20px;
        }
    `}
    </style>
  </>
);

export default Home;
