const MOCK_DATA = ['Vegetarian', 'Vegan', 'Halal', 'Gluten-free', 'Anything!'];

//incredibly mocked and simplifyed version of the api

class DishApi {
  public async getDishList(): Promise<string[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(MOCK_DATA);
      }, 2000);
    });
  }
}

export default DishApi;
