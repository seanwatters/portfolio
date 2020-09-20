<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class SectionOne extends Vue {
    @Prop() readonly isVisible!: boolean;
}
</script>

<template>
  <section />
</template>

<style lang="css">
    section {
        height: 110vh;
        min-height: 600px;
        margin: 0 auto;
        width: 80vw;
        position: relative;
        margin-top: 100px;
    }
</style>
