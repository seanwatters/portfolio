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

    mounted () {
      this.sectionOneVisible = true;

      setTimeout(() => {
        this.sectionTwoVisible = true;
      }, 1000);
      setTimeout(() => {
        this.sectionThreeVisible = true;
      }, 2000);
    }
}
</script>

<template>
  <div class="container">
    <Layout theme="dark" location="Home">
      <SectionOne :is-visible="sectionOneVisible" />
      <SectionTwo :is-visible="sectionTwoVisible" />
      <SectionThree :is-visible="sectionThreeVisible" />
    </Layout>
  </div>
</template>

<style lang="css">
</style>
