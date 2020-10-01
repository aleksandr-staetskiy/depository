<template>
  <div class="pa-6">
    <InputBar @toggle-bar="toggleCategories($event)"/>
    <v-expand-transition>
      <FavCategories
        v-if="isActiveCategories"
        class="mt-8"
      />
    </v-expand-transition>
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
  isActiveCategories = false;

  toggleCategories() {
    this.isActiveCategories = !this.isActiveCategories;
  }
}
</script>

<style lang="scss" scoped>
</style>
