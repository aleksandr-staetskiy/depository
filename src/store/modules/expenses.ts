import store from '@/store';
import { IExpense, ICategory } from '@/models';
import {
  getModule, Module, Mutation, VuexModule,
} from 'vuex-module-decorators';

@Module({ dynamic: true, store, name: 'expenses' })
class Expenses extends VuexModule {
  public inputVal = 0;

  public history: IExpense | [] = [];

  public categories: ICategory[] = [
    { icon: 'mdi-coffee', name: 'coffee' },
    { icon: 'mdi-bus', name: 'transport' },
    { icon: 'mdi-food', name: 'lunches' },
    { icon: 'mdi-heart', name: 'wife' },
  ]

  @Mutation
  public setInputValue(val: number): void {
    this.inputVal = val;
  }
}

export default getModule(Expenses);
