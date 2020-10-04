import store from '@/store';
import {
  getModule, Module, Mutation, VuexModule,
} from 'vuex-module-decorators';

@Module({ dynamic: true, store, name: 'handler' })
class Handler extends VuexModule {
  isModalOpen = false;

  @Mutation
  public openModal(): void {
    this.isModalOpen = true;
  }

  @Mutation
  public closeModal(): void {
    this.isModalOpen = false;
  }
}

export default getModule(Handler);
