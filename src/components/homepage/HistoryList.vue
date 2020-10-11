<template>
  <v-card
    max-width="600"
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
        v-for="item in history.slice().reverse()"
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
</template>

<script lang="ts">
import { IExpense } from '@/models';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class HistoryList extends Vue {
  @Prop(Array) history!: IExpense;
}
</script>
