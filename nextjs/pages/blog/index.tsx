import React from 'react';
import Layout from 'components/Layout';
import BlogData from 'data/blog/index';

import { getStaticIdsByPath } from 'utils/getStaticData';

export const config = { amp: 'hybrid' };

interface Post {
  link: string
  title: string
  subtitle: string
  imgUrl: string
  date: string
  publication: string
}
interface Props {
  mediumPosts: Post[]
  blogPostIds: string[]
}

const Blog = ({ mediumPosts /* , blogPostIds */ }: Props) => (
  <>
    <Layout title="Sean Watters — Blog" location="blog">
      {/* <section>
        <h1>{blogPostIds.map((post: string) => <p>{post}</p>)}</h1>
      </section> */}
      <section>
        <h1 className="section-title">Medium Posts</h1>
        {mediumPosts.map(({
          link, title, subtitle, date, publication,
        }: Post) => (
          <a key={Math.random()} className="post" href={link}>
            <h2>{title}</h2>
            <strong className="post-subtitle">{subtitle}</strong>
            <div>{date}</div>
            <div>{publication}</div>
          </a>
        ))}
      </section>
    </Layout>

    <style jsx>{`
      section {
        width: 90vw;
        margin: auto;
      }
      .section-title {
        text-align: center;
      }
      .post {
        display: flex;
        margin: 50px 0;
        flex-direction: column;
        justify-content: center;
        padding: 50px;
        border-radius: 20px;
        font-weight: 300;
        box-shadow: 3px 3px 15px lightgrey;
        font-size: 16px;
        color: black;
        background-color: rgb(255, 255, 255, 0.4);
      }
      .post-subtitle {
        font-size: 20px;
        margin: 10px 0;
        font-weight: 600;
      }
      div {
        margin-bottom: 5px;
        font-weight: 400;
      }
      @media (min-width: 576px) { 
        section {
          width: 90vw;
        }
      }

      @media (min-width: 768px) { 
        section {
          width: 87.5vw;
        }
      }

      @media (min-width: 992px) {
        section {
          width: 67.5vw;
        }
      }

      @media (min-width: 1200px) { 
        section {
          width: 60vw;
        }
      }
    `}
    </style>
  </>
);

export const getStaticProps = () => {
  const { mediumPosts } = BlogData;
  const blogPostIds = getStaticIdsByPath('data/blog/posts');

  return {
    props: {
      mediumPosts,
      blogPostIds,
    },
  };
};

export default Blog;
