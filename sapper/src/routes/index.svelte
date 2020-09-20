<script lang="ts">
  import Layout from '../components/Layout.svelte';
  import SectionOne from '../components/HomePage/SectionOne.svelte';
  import SectionTwo from '../components/HomePage/SectionTwo.svelte';
  import SectionThree from '../components/HomePage/SectionThree.svelte';

  $: sectionOneVisible = true;
  $: sectionTwoVisible = true;
  $: sectionThreeVisible = true;
</script>

<!-- <svelte:window bind:scrollY={y}/> -->
<div class="container">
  <Layout theme="dark">
    <SectionOne isVisible="{sectionOneVisible}" />
    <SectionTwo isVisible="{sectionTwoVisible}" />
    <SectionThree isVisible="{sectionThreeVisible}" />
  </Layout>
</div>
