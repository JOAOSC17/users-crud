import User from "../../models/User";
import dbConnect from "../../utils/dbConnect";

dbConnect()
export default async function ControllersById (req, res) {
    const { query: { id }, method } = req;
    switch (method) {
        case 'GET':
          try {
            const user = await User.findById(id)
            res.status(201).json(user)
          } catch (error) {
            res.status(400).json("Erro")
          }
          break;
        case 'PUT':
          try {
            const newUser = await User.findByIdAndUpdate(id, req.body, {
                new:true,
                runValidors:true
            })
            res.status(201).json(newUser)
          } catch (error) {
            res.status(400).json("Erro")
          }
            break;
        default:
          res.status(400).json("Erro")
          break;
      }
}