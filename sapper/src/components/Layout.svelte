<script lang="ts">
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';

  export let location: string | null = null;
  export let theme: string;
</script>

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
