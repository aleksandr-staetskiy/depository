<template>
  <v-dialog
    v-model="isActive"
    max-width="500px"
    @click:outside="closeModal()"
  >
    <v-card>
      <v-card-title> Enter name and choose icon </v-card-title>
      <v-text-field
        v-model="name"
        solo
        label="name"
        clearable
        class="ma-4"
      />
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-2"
          fab
          dark
          color="pink"
          @click="selectIcon(icon)"
        >
          <v-icon dark>
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" text @click="closeModal()"> Close </v-btn>
        <v-btn color="primary" text @click="saveCategory()"> Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import handler from '@/store/modules/handler';
import expenses from '@/store/modules/expenses';

@Component
export default class CraeteCategory extends Vue {
  private name = '';

  private selectedIcon = '';

  private icons = [
    'mdi-yoga',
    'mdi-smoking',
  ]

  get isActive() {
    return handler.isModalOpen;
  }

  closeModal(): void {
    this.name = '';
    this.selectedIcon = '';
    handler.closeModal();
  }

  selectIcon(icon: string): void {
    this.selectedIcon = icon;
  }

  private saveCategory(): void {
    if (this.name.length && this.name !== undefined) {
      expenses.addNewCategoty({ name: this.name, icon: this.selectedIcon });

      this.closeModal();
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
