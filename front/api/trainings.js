import axios from "axios";

export class TrainingsAPI {
  API_URL = "http://localhost:8000";
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
      const responses = await axios.get(this.API_URL + "/training/");
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

      await axios.post(this.API_URL + "/training/", values).then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data.data.length > 0) resolve(true);
        reject(false);
      });
    });
  }

  async getExercices() {
    return new Promise(async (resolve, reject) => {
      const responses = await axios.get(this.API_URL + "/training/exercices");
      var data = responses.data.data.exercices.data;

      resolve(data);
    });
  }

  async getExerciceByID(id) {
    return new Promise(async (resolve, reject) => {
      const responses = await axios.get(this.API_URL + "/training/exercices/" + id);
      var data = responses.data.data.exercices.data;

      resolve(data);
    });
  }

  getVariable(string){
    return this[string]
  }
}
