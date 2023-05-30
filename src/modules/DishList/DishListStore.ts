import {makeAutoObservable, runInAction} from 'mobx';
import DishRepostiory from '../../data/repositories/DishRepository';

class DishListStore {
  private dishRepo = new DishRepostiory();

  public dishMap: {[key: string]: number} = {};
  public isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  public async initDishData() {
    const dishArray = await this.dishRepo.getDishList();
    runInAction(() => {
      this.dishMap = this.mapDishArrayToMap(dishArray);
      this.isLoading = false;
    });
  }

  public addDish = (dish: string) => {
    runInAction(() => {
      const newMap: {[key: string]: number} = {};
      Object.assign(newMap, this.dishMap);
      newMap[dish] = newMap[dish] + 1;
      this.dishMap = newMap;
    });
  };

  public resetMap = () => {
    runInAction(() => {
      const newMap: {[key: string]: number} = {};
      Object.assign(newMap, this.dishMap);
      Object.keys(newMap).forEach(key => {
        newMap[key] = 0;
      });
      this.dishMap = newMap;
    });
  };

  private mapDishArrayToMap(dishes: string[]) {
    const newDishesMap: {[key: string]: number} = {};
    dishes.forEach(dish => {
      newDishesMap[dish] = 0;
    });
    return newDishesMap;
  }
}

export default DishListStore;
