import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import bcrypt from "bcryptjs";

const User = sequelize.define(
  "user",
  {
    u_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    u_name: {
      type: Sequelize.STRING,
    },
    u_password: {
      type: Sequelize.STRING,
    },
    u_email: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default User;
