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
    <v-card
    v-if="history.length"
    max-width="600"
    class="mx-auto"
  >
    <v-toolbar
      color="light-blue"
      dark
    >
      <v-toolbar-title>History</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list
      subheader
      two-line
    >
      <v-subheader inset>today</v-subheader>

      <v-list-item
        v-for="item in history"
        :key="item.date"
      >
        <v-list-item-avatar>
          <v-icon
            class="grey lighten-1"
            dark
          >
            {{ item.icon }}
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.category"></v-list-item-title>

          <v-list-item-subtitle v-text="item.sum"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
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
import expenses from '@/store/modules/expenses';
import { IExpense } from '@/models';

@Component({
  components: {
    InputBar,
    FavCategories,
  },
})
export default class Home extends Vue {
  isActiveCategories = false;

  snackbar = false;

  timeout = 1000;

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
