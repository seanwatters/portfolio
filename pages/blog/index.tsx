import React from 'react';
import Layout from 'components/Layout';
import JSON from 'json/blog.json';

import { useAmp } from 'next/amp';

export const config = { amp: 'hybrid' };

interface Post {
  link: string
  title: string
  subtitle: string
  imgUrl: string
  date: string
  publication: string
  preview: string
}

const Blog = () => {
  const isAmp = useAmp();

  return (
    <>
      <Layout title="Sean Watters — Blog" location="blog">
        {JSON.posts.map(({
          link, title, subtitle, imgUrl, date, publication, preview,
        }: Post) => (
          <a key={Math.random() + title} className="post" href={link}>
            <div className="post-title">
              {title}
            </div>
            <div className="post-subtitle">
              {subtitle}
            </div>
            {isAmp
              ? (
                <amp-img
                  width="300"
                  height="125"
                  src={imgUrl}
                  alt="a cool image"
                  layout="responsive"
                />
              )
              : (<img className="post-image" src={imgUrl} alt="header" />)}
            <div className="post-date">
              {date}
            </div>
            <div className="post-publication">
              {publication}
            </div>
            <div className="post-preview">
              {preview}
            </div>
          </a>
        ))}
      </Layout>

      <style jsx>{`
      .post {
        margin: auto;
        margin-top: 60px;
        margin-bottom: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        font-family: "Courier New", Courier, monospace;
        line-height: 250%;
      }
      .post-title {
        font-size: 30px;
      }
      .post-subtitle {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
      }
      .post-date {
        font-size: 16px;
        width: 95%;
        margin: auto;
      }
      .post-publication {
        font-size: 16px;
        width: 95%;
        margin: auto;
      }
      .post-image {
        margin: auto;
        width: 100%;
      }
      .post-preview {
        margin-top: 20px;
        font-size: 20px;
      }

      .blog-post-medium-icon {
        padding-top: 20px;
        list-style-type: none;
        margin-left: 30px;
        opacity: .9;
      }

      @media only screen and (max-width : 420px) {
        .post {
          width: 90%;
          margin-top: 20px;
          margin-bottom: 50px;
        }
        .post-title {
          font-size: 22px;
        }
        .post-subtitle {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .post-preview {
          font-size: 14px;
        }
        .post-date {
          font-size: 12px;
          width: 100%;
          margin-bottom: -20px;
        }
        .post-publication {
          font-size: 10px;
          width: 100%;
        }
      }
  `}
      </style>
    </>
  );
};

export default Blog;
