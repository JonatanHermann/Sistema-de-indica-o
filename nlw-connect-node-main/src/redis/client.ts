import { Redis } from 'ioredis'
import postgres from 'postgres'
import { env } from '../env'

export const redis = new Redis(env.REDIS_URL)

export const pg = postgres(env.DATABASE_URL, {
  ssl: true, // Adicione esta linha
})
