/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGO_URL:'mongodb+srv://joao:duque123@cluster0.4u5hp.mongodb.net/user?retryWrites=true&w=majority'
  }
}

module.exports = nextConfig
