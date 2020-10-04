<template>
  <div class="d-flex">
    <v-text-field
      label="Enter sum"
      hide-details="auto"
      prefix="$"
      :value="value"
      @input="onInput($event)"
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
import expenses from '@/store/modules/expenses';
import { Vue, Component, Emit } from 'vue-property-decorator';

@Component({
  filters: {
    numberWithSpaces(x: number|string) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    },
  },
})
export default class InputBar extends Vue {
  get value() {
    return expenses.inputVal;
  }

  @Emit()
  toggleBar(e: Event): Event {
    return e;
  }

  onInput(e: number): void {
    this.$emit('on-input', e);
  }
}
</script>

<style lang="scss" scoped>
</style>
