import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

import {
  createUser,
  deleteUser,
  getOneUser,
  getUsers,
  putUser,
} from "../controllers/user.controllers";

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getOneUser);
router.delete("/:id", deleteUser);
router.put("/:id", putUser);

// router.post("/", (req, res) => {
//   const user = {
//     id: 1,
//     nombre: "Bryan",
//     password: "1235",
//   };
//   jwt.sign({ user }, "secretkey", (err, token) => {
//     res.json({
//       token,
//     });
//   });
//   //res.json(user);
// });

router.post("/:id/post", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (error, authData) => {
    if (error) {
      res.sendStatus(403);
    } else {
      res.json({
        mensaje: "Post Creado",
        authData,
      });
    }
  });
});

// Authorization: Bearer <token>
function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

export default router;
