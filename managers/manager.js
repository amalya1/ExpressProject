const controller = require('../controllers/controller');

class Manager {
  constructor() {
    this.addItems = this.addItems.bind(this);
    this.getItems = this.getItems.bind(this);
  }

  async addItems(req, res) {
    await controller.createItems(req, res);
    return res.send('Items successfully created');
  }

  async getItems(req, res) {
    const items = await controller.getItems();
    return res.send(items);
  }
}

module.exports = new Manager();
