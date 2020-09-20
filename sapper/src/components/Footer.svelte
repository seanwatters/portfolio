<script lang="ts">
  interface FooterIcon {
    company: string;
    url: string;
  }
  export let theme: string;

  const icons: FooterIcon[] = [
    {
      company: 'linkedin-in',
      url: 'https://www.linkedin.com/in/seanwatters',
    },
    {
      company: 'medium-m',
      url: 'https://medium.com/@sean_watters',
    },
    {
      company: 'twitter',
      url: 'https://twitter.com/sean_watters',
    },
    {
      company: 'github',
      url: 'https://github.com/seanwatters',
    },
    {
      company: 'gitlab',
      url: 'https://gitlab.com/sean_watters',
    },
  ];
</script>

<template>
  <footer style="background-color: {theme === 'dark' ? 'black' : 'white'}">
    <nav class="external-icons">
      {#each icons as { company, url }}
        <a href="{url}"><i
            style="font-size: 20px; color: {theme === 'dark' ? 'white' : 'black'}"
            class="fab fa-{company}"
          ></i></a>
      {/each}
    </nav>
    <div class="tm" style="color: {theme === 'dark' ? 'white' : 'black'}">
      © 2020 sean watters
    </div>
  </footer>
</template>

<style lang="css" scoped>
  footer {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
  }
  .external-icons {
    width: 67.5vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .tm {
    font-size: 0.5rem;
    padding: 10px;
    text-transform: capitalize;
  }
  @media (min-width: 576px) {
    .external-icons {
      width: 45vw;
    }
  }

  @media (min-width: 768px) {
    .external-icons {
      width: 37.5vw;
    }
  }

  @media (min-width: 992px) {
    .external-icons {
      width: 25vw;
    }
  }

  @media (min-width: 1200px) {
    .external-icons {
      width: 18vw;
    }
  }
</style>
