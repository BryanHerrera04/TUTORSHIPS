import User from "../models/User";
import jwt from "jsonwebtoken";

export async function getUsers(req, res) {
  const users = await User.findAll();
  res.json({
    data: users,
  });
}

export async function createUser(req, res) {
  const { u_name, u_password, u_email } = req.body;
  try {
    let newUser = await User.create(
      {
        u_name,
        u_password,
        u_email,
      },
      {
        fields: ["u_name", "u_password", "u_email"],
      }
    );
    if (newUser) {
      return res.json({
        message: "Usuario creado correctamente",
        data: newUser,
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Hay un problema al crear el usuario",
      data: {},
    });
  }
}

export async function getOneUser(req, res) {
  const { id } = req.params;
  const user = await User.findOne({
    where: {
      u_id: id,
    },
  });
  jwt.sign({ user }, "secretkey", (err, token) => {
        res.json({
          token,
        });
      });
  //res.json(user);
}

export async function deleteUser(req, res) {
  const { id } = req.params;
  const deleteRowCount = await User.destroy({
    where: {
      u_id: id,
    },
  });
  res.json({
    message: "User eliminado Sastifactoriamente",
    count: deleteRowCount,
  });
}

export async function putUser(req, res) {
  const { id } = req.params;
  const { u_name, u_password, u_email } = req.body;

  const Users = await User.findAll({
    attibutes: ["u_id", "u_name", "u_password", "u_email"],
    where: {
      u_id: id,
    },
  });
  if (Users.length > 0) {
    Users.forEach(async (user) => {
      await user.update({
        u_name,
        u_password,
        u_email,
      });
    });
  }
  return res.json({
    message: "User actualizado correctamente",
    data: Users,
  });
}
