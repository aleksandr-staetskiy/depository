<template>
  <div class="pa-6">
    <InputBar
      class="mb-8"
      @toggle-bar="toggleCategories($event)"
      @on-input="handleInput($event)"
    />
    <v-expand-transition>
      <FavCategories
        v-if="isActiveCategories"
        @on-save="handleSave()"
      />
    </v-expand-transition>
    <div
      v-if="history.length"
      class="mx-auto pt-6"
    >
      <HistoryList :history="history" />
    </div>
     <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      successfully added
      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import InputBar from '@/components/homepage/InputBar.vue';
import FavCategories from '@/components/homepage/FavCategories.vue';
import HistoryList from '@/components/homepage/HistoryList.vue';
import expenses from '@/store/modules/expenses';
import { IExpense } from '@/models';

@Component({
  components: {
    InputBar,
    FavCategories,
    HistoryList,
  },
})
export default class Home extends Vue {
  isActiveCategories = false;

  snackbar = false;

  timeout = 2000;

  toggleCategories() {
    this.isActiveCategories = !this.isActiveCategories;
  }

  handleInput(e: number) {
    expenses.setInputValue(e);
  }

  getdhm(timestamp: number) {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }

  handleSave() {
    this.toggleCategories();
    expenses.setInputValue(0);
    this.snackbar = true;
  }

  get history(): IExpense[] {
    return expenses.history;
  }
}
</script>

<style lang="scss" scoped>
</style>
