import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { env } from '../env'
import { schema } from './schema'

export const pg = postgres(env.DATABASE_URL, {
  ssl: {
    rejectUnauthorized: false,
  },
})

export const db = drizzle(pg, { schema })
