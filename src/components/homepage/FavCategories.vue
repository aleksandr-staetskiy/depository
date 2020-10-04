<template>
<div>
  <div class="d-flex justify-space-between">
    <Category
      v-for="category in categories"
      :key="category.name"
      :info="category"
      @click="saveExpense(category)"
      />
  </div>
  <v-btn
    depressed
    color="primary"
    class="d-flex align-center mt-4"
    @click="openModal()"
  >
    Create category
  </v-btn>
  <CreateCategory />
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Category from '@/components/base/Category.vue';
import CreateCategory from '@/components/base/CreateCategory.vue';
import expenses from '@/store/modules/expenses';
import handler from '@/store/modules/handler';
import { ICategory } from '@/models';

@Component({
  components: {
    Category,
    CreateCategory,
  },
})
export default class FavCategories extends Vue {
  private isOpen = false;

  get categories(): ICategory[] {
    return expenses.categories;
  }

  private openModal(): void {
    handler.openModal();
  }

  public saveExpense(category: ICategory): void {
    if (expenses.inputVal > 0) {
      expenses.addExpense({
        category: category.name,
        date: +new Date(),
        sum: expenses.inputVal,
        icon: category.icon,
      });
      this.$emit('on-save');
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
