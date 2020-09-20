<script lang="ts">
  import { onMount } from 'svelte';
  import Layout from '../components/Layout.svelte';
  import SectionOne from '../components/HomePage/SectionOne.svelte';
  import SectionTwo from '../components/HomePage/SectionTwo.svelte';
  import SectionThree from '../components/HomePage/SectionThree.svelte';

  let sectionOne: any;
  let sectionTwo: any;
  let sectionThree: any;

  let sectionOneVisible = false;
  let sectionTwoVisible = false;
  let sectionThreeVisible = false;

  onMount(() => {
    setTimeout(() => {
      sectionOneVisible = true;
    }, 1);
  });

  const handleScroll = () => {
    if (sectionTwo.getBoundingClientRect().top < 500) sectionTwoVisible = true;
    if (sectionThree.getBoundingClientRect().top < 500)
      sectionThreeVisible = true;
  };
</script>

<svelte:window on:scroll="{handleScroll}" />

<div class="container">
  <Layout title="Sean Watters — Software Engineer" theme="dark">
    <div bind:this="{sectionOne}">
      <SectionOne isVisible="{sectionOneVisible}" />
    </div>
    <div bind:this="{sectionTwo}">
      <SectionTwo isVisible="{sectionTwoVisible}" />
    </div>
    <div bind:this="{sectionThree}">
      <SectionThree isVisible="{sectionThreeVisible}" />
    </div>
  </Layout>
</div>
