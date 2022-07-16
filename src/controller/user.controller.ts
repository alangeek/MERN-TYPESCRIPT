import { Request, Response } from "express";
import User from "../model/User";

class UserController {

  async create(req: Request, res: Response) {
    const { name, email, password } = req.body

    try {
      const userExists = await User.findOne({ email })

      if (userExists) {
        return res.status(400).json({
          err: 'Opoops',
          message: 'User already exists'
        })
      }

      const user = await User.create({
        name, email, password
      })

      return res.json(user)

    } catch (err) {
      return res.status(500).json({
        err: "Registration failed",
        message: err
      })
    }
  }
}

export default new UserController
