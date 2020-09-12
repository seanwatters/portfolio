import React from 'react';
import { getStaticIdsByPath, getStaticContentByIdAndPath } from 'utils/getStaticData';

export const config = { amp: 'hybrid' };

const Post = ({ id, content }: {id: string, content: any}) => (
  <p>Post: {id} + {content.word}</p>
);

export async function getStaticProps({ params }: any) {
  const { id } = params;
  const content = getStaticContentByIdAndPath(id, 'data/blog/posts');

  return {
    props: {
      id,
      content,
    },
  };
}

export async function getStaticPaths() {
  const paths = getStaticIdsByPath('data/blog/posts').map((id: string) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default Post;
