<template>
<div class="d-flex flex-column align-center">
    <v-btn
      class="mx-2"
      fab
      dark
      color="pink"
    >
      <v-icon dark>
        {{ info.icon }}
      </v-icon>
    </v-btn>
    <p class="mt-4">
      {{ info.name }}
    </p>
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ICategory } from '@/models';

@Component
export default class Category extends Vue {
  @Prop(Object) readonly info!: ICategory
}
</script>

<style lang="scss" scoped>
</style>
