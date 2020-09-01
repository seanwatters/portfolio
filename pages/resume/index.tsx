import React from 'react';
import Layout from 'components/Layout';

import JSON from 'json/resume.json';

interface Job {
  company: string
  location: string
  role: string
  startDate: string
  endDate: string
  highlights: string[]
}

interface School {
  institution: string
  location: string
  area: string
  startDate: string
  endDate: string
  description: string
}

interface SkillSet {
  title: string
  keywords: string[]
}

const Resume = () => (
  <>
    <Layout title="Sean Watters — Resume" location="resume">
      <div className="resume-body">
        <hr />
        <div className="section">
          <h1>experience</h1>
          {JSON.experience.map(({
            company, location, role, startDate, endDate, highlights,
          }: Job) => (
            <div key={Math.random() + company}>
              <h1 className="title">{company}</h1>
              <p>{startDate} - {endDate}</p>
              <p>{location}</p>
              <p className="job-position">{role}</p>
              <ul>
                {highlights.map((highlight: string) => (
                  <li key={Math.random() + company}>{highlight}</li>))}
              </ul>
            </div>
          ))}
        </div>
        <hr style={{ marginTop: 40 }} />
        <div className="section">
          <h1>education</h1>
          {JSON.education.map(({
            institution, location, area, startDate, endDate, description,
          }: School) => (
            <div key={Math.random() + institution}>
              <h1 className="title">{institution}</h1>
              <p className="area-of-study">{area}</p>
              <p>{startDate} - {endDate}</p>
              <p>{location}</p>
              <p className="education-description">{description}</p>
            </div>
          ))}
        </div>
        <hr />
        <div className="section">
          <h1>skills</h1>
          {JSON.skills.map(({ title, keywords }: SkillSet) => (
            <div key={Math.random() + title}>
              <p>{title}</p>
              <ul>
                {keywords.map((keyword: string) => (
                  <li key={Math.random() + title}>{keyword}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>

    <style jsx>{`
      .resume-body {
        margin: auto;
        width: 55%;
      }

      .education-description {
        margin-top: 15px;
        margin-bottom: 15px;
        font-size: 14px;
        margin-left: 8%;
      }

      ul {
        width: 85%;
        margin-bottom: 40px;
      }

      li {
        margin-top: 7px;
        margin-bottom: 7px;
        font-size: 14px;
      }

      p {
        margin-bottom: 0px;
        margin-top: 0px;
        line-height: 200%;
        margin-left: 5%;
      }

      .job-position {
        margin-top: 20px;
        font-weight: 600;
      }

      .area-of-study {
        font-weight: 600;
      }

      .title {
        font-weight: 600;
        font-size: 18px;
        margin-left: 5%;
        margin-top: 40px;
      }

      .section {
        margin-bottom: 70px;
      }

      @media only screen and (max-width : 420px) {
        body {
          width: 100%;
          margin-right: 0px;
        }

        .resume-body {
          margin: auto;
          width: 90%;
        }

        .job-position {
          margin-top: 10px;
          font-weight: 600;
          font-size: 15px;
        }

        ul {
          width: 80%;
          font-size: 12px;
        }

        h1 {
          margin-bottom: 20px;
          margin-top: 20px;
        }

        p {
          margin-top: 10px;
          margin-bottom: 10px;
          font-size: 12px;
          line-height: 200%;
          max-width: 95%;
          min-width: 95%;
        }
      }
  `}</style>
  </>
);

export default Resume;
