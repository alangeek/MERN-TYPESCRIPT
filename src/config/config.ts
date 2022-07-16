import dotenv from 'dotenv'

dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI || ''

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3000

export const config = {
  mongo: {
    url: MONGODB_URI
  },
  server: {
    port: SERVER_PORT
  }
}