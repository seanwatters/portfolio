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
      <a className="post" href={link}>
        <h2>{title}</h2>
        <strong className="post-subtitle">{subtitle}</strong>
        <div>{date}</div>
        <div>{publication}</div>
      </a>
      <style jsx>{`
        .post {
          display: flex;
          margin: 40px 0;
          flex-direction: column;
          justify-content: center;
          padding: 50px;
          border-radius: 20px;
          font-weight: 300;
          box-shadow: 3px 3px 15px lightgrey;
          font-size: 16px;
          color: black;
        }
        .post-subtitle {
          font-size: 20px;
          margin: 10px 0;
        }
    `}
      </style>
    </>
  );
};

const Err = () => <Error statusCode={404} />;
export default Err;
