<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLinkedinIn, faMediumM, faTwitter, faGithub, faGitlab, faNode, faReact
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faLinkedinIn, faMediumM, faTwitter, faGithub, faGitlab, faNode, faReact);

@Component({
  components: {
    FontAwesomeIcon,
  },
})
export default class BrandIcon extends Vue {
    @Prop({ default: 'twitter', }) company!: string
    @Prop({ default: 'lg', }) size!: string
    @Prop({ default: 'black', }) color!: string
}
</script>

<template>
  <FontAwesomeIcon
    :icon="['fab', company]"
    :size="size"
    :color="color"
  />
</template>
