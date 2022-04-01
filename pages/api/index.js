import dbConnect from "../../utils/dbConnect"
import User from "../../models/User"
dbConnect()
export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case 'POST':
      try {
        const user = await User.create(req.body)
        res.status(201).json({sucess:true, data:user})
      } catch (error) {
        res.status(400).json({sucess:false})
      }
      break;
    default:
      res.status(400).json({sucess:false})
      break;
  }
}
