import React from 'react';
import Error from 'next/error';

export interface PostType {
    link: string
    title: string
    subtitle: string
    imgUrl: string
    date: string
    publication: string
}

export const PostComponent = ({ post }: {post: PostType}) => {
  const {
    link, title, subtitle, date, publication,
  } = post;

  return (
    <>
      <div key={Math.random() + title} className="post">
        <a href={link}>
          <h2>{title}</h2>
        </a>
        <strong className="post-subtitle">{subtitle}</strong>
        <div>{date}</div>
        <div>{publication}</div>
      </div>

      <style jsx>{`
        .post {
          display: flex;
          margin: 40px 0;
          flex-direction: column;
          justify-content: center;
          padding: 50px;
          border-radius: 20px;
          font-weight: 200;
          box-shadow: 3px 3px 15px lightgrey;
          font-size: 16px;
        }
        .post-subtitle {
          font-size: 20px;
          margin-bottom: 20px;
        }
    `}
      </style>
    </>
  );
};

const Err = () => <Error statusCode={404} />;
export default Err;
