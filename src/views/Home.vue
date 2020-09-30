<template>
  <div>
    <InputBar />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import InputBar from '@/components/homepage/InputBar.vue';

@Component({
  components: {
    InputBar,
  },
})
export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>
</style>
