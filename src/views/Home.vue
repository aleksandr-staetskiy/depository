<template>
  <div class="pa-6">
    <InputBar />
    <FavCategories class="mt-8" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import InputBar from '@/components/homepage/InputBar.vue';
import FavCategories from '@/components/homepage/FavCategories.vue';

@Component({
  components: {
    InputBar,
    FavCategories,
  },
})
export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>
</style>
