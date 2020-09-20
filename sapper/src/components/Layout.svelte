<script lang="ts">
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';

  export let location: string | null = null;
  export let theme: string;
  export let title: string;
</script>

<svelte:head>
  <script
    src="https://kit.fontawesome.com/89c2981c8d.js"
    crossorigin="anonymous"
    async>
  </script>
  <!--<script
    async
    src="https://www.googletagmanager.com/gtag/js?id=UA-167813886-1" ✂prettier:content✂="CiAg" ✂prettier:content✂="e30=">{}</script><script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-167813886-1');
  </script>-->
</svelte:head>

<Header location="{location}" />

<main>
  <slot />
</main>

<Footer theme="{theme}" />

<style>
  main {
    width: 100vw;
    overflow: hidden;
    padding-top: 35px;
  }
</style>
