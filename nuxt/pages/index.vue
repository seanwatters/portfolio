<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Layout from '@/components/Layout';
import SectionOne from '@/components/HomePage/SectionOne';
import SectionTwo from '@/components/HomePage/SectionTwo';
import SectionThree from '@/components/HomePage/SectionThree';

@Component({
  components: {
    Layout,
    SectionOne,
    SectionTwo,
    SectionThree,
  },
})
export default class Home extends Vue {
    sectionOneVisible: boolean = false;
    sectionTwoVisible: boolean = false;
    sectionThreeVisible: boolean = false;
    sectionFourVisible: boolean = false;

    // Can't use actual $ref bc it doesn't like `getBoundingClientRect`
    sectionTwoRef: HTMLElement | null = null
    sectionThreeRef: HTMLElement | null = null
    sectionFourRef: HTMLElement | null = null

    handleScroll () {
      if (this.sectionTwoRef && this.sectionTwoRef.getBoundingClientRect().top < 500) { this.sectionTwoVisible = true; };
      if (this.sectionThreeRef && this.sectionThreeRef.getBoundingClientRect().top < 500) { this.sectionThreeVisible = true; };
      if (this.sectionFourRef && this.sectionFourRef.getBoundingClientRect().top < 500) { this.sectionFourVisible = true; };
    }

    mounted () {
      setTimeout(() => {
        this.sectionOneVisible = true;
      }, 500)
      this.sectionTwoRef = document.getElementById('home-page-section-2');
      this.sectionThreeRef = document.getElementById('home-page-section-3');
      this.sectionFourRef = document.getElementById('home-page-section-4');

      window.addEventListener('scroll', this.handleScroll);
    }
}
</script>

<template>
  <div class="container">
    <Layout theme="dark">
      <SectionOne id="home-page-section-1" :is-visible="sectionOneVisible" />
      <SectionTwo id="home-page-section-2" :is-visible="sectionTwoVisible" />
      <SectionThree id="home-page-section-3" :is-visible="sectionThreeVisible" />
    </Layout>
  </div>
</template>
