/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGO_URL:'mongodb+srv://joao:duque123@crud.xiq3c.mongodb.net/user?retryWrites=true&w=majority'
  }
}

module.exports = nextConfig
