const models = require('../db/models');

const { Items } = models;

class Controller {
  constructor() {
    this.createItems = this.createItems.bind(this);
    this.getItems = this.getItems.bind(this);
  }

  async createItems(req) {
    try {
      const { items } = req.body;

      const createdItems = items.map((item) => Items.create(item));
      await Promise.all(createdItems);
    } catch (err) {

      throw new Error(err.message);
    }
  }

  async getItems() {
    try {
      const items = await Items.findAll();
      const weightSum = await Items.sum('weight');
      const weightedRandom = [];
      const randomCount = 5;

      if (items.length <= randomCount) {
        weightedRandom.concat(items);
      } else {
        for (let j = 0; j < randomCount; j++) {
          let random = Math.floor(Math.random() * weightSum);

          for (let i = 0; i < items.length; i++) {
            if (random <= items[i].weight) {
              weightedRandom.push(items[i]);
              break;
            } else {
              random -= items[i].weight;
            }
          }
        }
      }

      return weightedRandom;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

module.exports = new Controller();
