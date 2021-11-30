const Sequelize = require('sequelize');

/**
 *
 * @type {Sequelize}
 */

const ItemsSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  weight: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  startDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  endDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  deletedAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
};

const ItemsOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,
};

module.exports = (seq) => seq.define('Items', ItemsSchema, ItemsOptions);
