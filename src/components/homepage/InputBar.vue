<template>
  <div class="d-flex">
    <v-text-field
      label="Enter sum"
      hide-details="auto"
      prefix="$"
      v-model.number="inputVal"
    />
    <v-btn
      class="mx-2 ml-6"
      fab
      dark
      color="indigo"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Expense } from './models';

@Component
export default class InputBar extends Vue {
  private inputVal = 0;

  private history: Expense | [] = [];
}
</script>

<style lang="scss" scoped>
</style>
