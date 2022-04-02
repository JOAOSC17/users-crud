import User from "../../models/User";
import dbConnect from "../../utils/dbConnect"
dbConnect()
export default async function Controllers(req, res) {
  const { method } = req;
  switch (method) {
    case 'GET':
      try {
        const users = await User.find({})
        res.status(201).json(users)
      } catch (error) {
        res.status(400).json("Erro")
      }
      break;
    case 'POST':
      try {
        const user = await User.create(req.body)
        res.status(201).json(user)
      } catch (error) {
        res.status(400).json("Erro")
      }
      break;
    default:
      res.status(400).json("Erro")
      break;
  }
}
