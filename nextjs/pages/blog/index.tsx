import React from 'react';
import Layout from 'components/Layout';
import blogData from 'data/blog/index';

import { getStaticIdsByPath } from 'utils/getStaticData';
import { PostComponent } from './components/Post';
import type { PostType } from './components/Post';

export const config = { amp: 'hybrid' };

interface Props {
  mediumPosts: PostType[]
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
        {mediumPosts.map((post: PostType) => (
          <PostComponent
            key={Math.random() + post.title}
            post={post}
          />
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
  const { mediumPosts } = blogData;
  const blogPostIds = getStaticIdsByPath('data/blog/posts');

  return {
    props: {
      mediumPosts,
      blogPostIds,
    },
  };
};

export default Blog;
