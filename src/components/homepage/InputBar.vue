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
      @click="toggleBar($event)"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator';
import { Expense } from './models';

@Component
export default class InputBar extends Vue {
  private inputVal = 0;

  private history: Expense | [] = [];

  @Emit()
  // eslint-disable-next-line class-methods-use-this
  toggleBar(e: Event): Event {
    return e;
  }
}
</script>

<style lang="scss" scoped>
</style>
