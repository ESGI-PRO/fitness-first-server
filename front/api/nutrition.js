import axios from "axios";

class Nutrition {
  API_URL = "http://localhost:8000/nutrition/";
  recettes = [];
  ingredients = [];
  categories = [];

  constructor() {
    this.getRecettes().then(responses => {
        this.recettes = responses
    })

    this.getIngredients().then(responses => {
        this.ingredients = responses
    })

    this.getCategories().then(responses => {
        this.categories = responses
    })
  }

  async getRecettes() {
    return new Promise(async (resolve, reject) => {
      const responses = await axios.get(this.API_URL + "");
      var data = responses.data.data.nutrition;
      resolve(data);
    });
  }

  async getIngredients() {
    return new Promise(async (resolve, reject) => {
      const responses = await axios.get(this.API_URL + "ingredients");
      var data = responses.data.data.nutrition;
      resolve(data);
    });
  }

  getIngredientsVarable() {
    return this.ingredients
  }

  async getCategories() {
    return new Promise(async (resolve, reject) => {
      const responses = await axios.get(this.API_URL + "categories");
      var data = responses.data.data.nutrition;
      resolve(data);
    });
  }

  async getRecettesByID(id) {
    return new Promise(async (resolve, reject) => {
      const responses = await axios.get(this.API_URL + id);
      var data = responses.data.data.nutrition;
      resolve(data);
    });
  }

  async getIngredientsByID(id) {
    console.log("getIngredientsByID", id , typeof id)
    return new Promise(async (resolve, reject) => {
      const responses = await axios.get(this.API_URL + "ingredients/" + id);
      var data = responses.data.data.nutrition;
      resolve(data);
    });
  }

  async deleteRecettesByID(id) {
    return new Promise(async (resolve, reject) => {
      const responses = await axios.delete(this.API_URL + id);
      var data = responses.data.data.nutrition;
      resolve(data);
    });
  }

  async VarGlobal(key){
    return this[key]
  }
}

const nutrition = new Nutrition();

export default nutrition;
