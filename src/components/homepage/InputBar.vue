<template>
  <div class="d-flex">
    <v-text-field
      label="Enter sum"
      hide-details="auto"
      prefix="$"
      v-model.number="inputVal"
      @input="onInput"
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

@Component({
  filters: {
    numberWithSpaces(x: number|string) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    },
  },
})
export default class InputBar extends Vue {
  inputVal = 0;

  @Emit()
  toggleBar(e: Event): Event {
    return e;
  }

  @Emit()
  onInput(): number {
    return this.inputVal;
  }
}
</script>

<style lang="scss" scoped>
</style>
