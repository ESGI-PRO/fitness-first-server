import axios from "axios";

class TrainingsAPI {
  API_URL = "http://localhost:8000/training/";
  exercices = [];
  trainings = [];
  userTraining = [];

  constructor() {
    this.getTrainings().then((item) => {
      this.trainings.push(...item);
    });

    this.getExercices().then((item) => {
      this.exercices.push(...item);
    });
  }

  async getTrainings() {
    return new Promise(async (resolve, reject) => {
      const responses = await axios.get(this.API_URL + "");
      var data = responses.data.data.training;

      resolve(data);
    });
  }

  async getTrainingsByUserId(userId) {
    return new Promise(async (resolve, reject) => {
      const responses = await axios.get(this.API_URL + "user/" + "ERJHGFGH-FGHJK");
      var data = responses.data.data.training;

      resolve(data);
    });
  }

  async createTraining(training) {
    return new Promise(async (resolve, reject) => {
      var values = {
        name: training.name,
        description: training.description,
        durationStart: training.durationStart,
        durationEnd: training.durationEnd,
        category: training.category,
        userId: training.userId,
        image:
          "https://randomwordgenerator.com/img/picture-generator/53e1d04a4c5aa414f1dc8460962e33791c3ad6e04e5074417c2b79d59448cc_640.jpg",
        listExercices: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        trainingOnExercices: training.trainingOnExercices,
      };
      console.log(values);

      await axios.post(this.API_URL + "", values).then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data.data.length > 0) resolve(true);
        reject(false);
      });
    });
  }


  //** FETCH EXERCICES */
  async getExercices() {
    return new Promise(async (resolve, reject) => {
      const responses = await axios.get(this.API_URL + "exercices");
      var data = responses.data.data.exercices.data;

      resolve(data);
    });
  }

  async getExerciceByID(id) {
    return new Promise(async (resolve, reject) => {
      const responses = await axios.get(this.API_URL + "exercices/" + id);
      var data = responses.data.data.exercices.data;

      resolve(data);
    });
  }

  async getTypesExercices() {
    return new Promise(async (resolve, reject) => {
      const responses = await axios.get(this.API_URL + "category/");
      var data = responses.data.data.exercices.data;
      resolve(data);
    });
  }

  getVariable(string){
    return this[string]
  }
}

const training = new TrainingsAPI()

export default training;