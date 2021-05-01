import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Tutor = sequelize.define(
  "tutor",
  {
    tt_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    tt_name: {
      type: Sequelize.CHAR,
    },
    tt_lastname: {
      type: Sequelize.CHAR,
    },
    tt_email: {
      type: Sequelize.CHAR,
    },
    tt_age: {
      type: Sequelize.INTEGER,
    },
    tt_created_tm: {
      type: Sequelize.DATE,
    },
    tt_country: {
      type: Sequelize.CHAR,
    },
    tt_study: {
      type: Sequelize.CHAR,
    },
    tt_institute: {
      type: Sequelize.CHAR,
    },
    tt_phone: {
      type: Sequelize.INTEGER,
    },
    tt_lessons: {
      type: Sequelize.CHAR,
    },
    tt_state: {
      type: Sequelize.CHAR,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Tutor;
