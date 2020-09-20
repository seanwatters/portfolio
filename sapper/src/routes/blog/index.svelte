<script lang="ts">
  import Layout from '../../components/Layout.svelte';
  import BlogData from '../../data/blog/index.json';

  interface Post {
    link: string;
    title: string;
    subtitle: string;
    imgUrl: string;
    date: string;
    publication: string;
  }

  const mediumPosts: Post[] = BlogData.mediumPosts;
</script>

<template>
  <Layout title="Sean Watters — Blog" theme="light" location="Blog">
    <section>
      <h2 class="section-title">Medium Posts</h2>
      {#each mediumPosts as { link, title, subtitle, date, publication }}
        <a href="{link}" class="post">
          <h2>{title}</h2>
          <strong class="post-subtitle">{subtitle}</strong>
          <div>{date}</div>
          <div>{publication}</div>
        </a>
      {/each}
    </section>
  </Layout>
</template>

<style lang="css" scoped>
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
</style>
