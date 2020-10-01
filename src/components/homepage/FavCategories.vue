<template>
<div class="d-flex justify-space-between">
  <Category
    v-for="category in categories"
    :key="category.name"
    :info="category"
     />
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Category from '@/components/base/Category.vue';
import { ICategory } from './models';

@Component({
  components: {
    Category,
  },
})
export default class FavCategories extends Vue {
  categories: ICategory[] = [
    { icon: 'mdi-coffee', name: 'coffee' },
    { icon: 'mdi-bus', name: 'transport' },
    { icon: 'mdi-food', name: 'lunches' },
    { icon: 'mdi-heart', name: 'wife' },
  ]
}
</script>

<style lang="scss" scoped>
</style>
