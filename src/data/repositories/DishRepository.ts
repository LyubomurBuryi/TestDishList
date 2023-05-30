import DishApi from '../api/DishApi';

class DishRepostiory {
  private dishApi = new DishApi();

  public async getDishList(): Promise<string[]> {
    return this.dishApi.getDishList();
  }
}

export default DishRepostiory;
