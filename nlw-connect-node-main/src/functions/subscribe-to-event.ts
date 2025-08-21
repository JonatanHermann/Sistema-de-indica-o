// src/functions/subscribe-to-event.ts

import { eq } from 'drizzle-orm'
import { db } from '../drizzle/client'
import { schema } from '../drizzle/schema'
import { redis } from '../redis/client'

interface SubscribeToEventParams {
  name: string
  email: string
  invitedBySubscriberId: string | null
}

export async function subscribeToEvent({
  name,
  email,
  invitedBySubscriberId,
}: SubscribeToEventParams) {

  // Log de depuração
  console.log('Verificando se o e-mail já existe...');

  const results = await db
    .select()
    .from(schema.subscriptions)
    .where(eq(schema.subscriptions.email, email))

  if (results.length > 0) {
    console.log('E-mail já existe. Retornando subscriberId existente.');
    return { subscriberId: results[0].id }
  }

  // Log de depuração
  console.log('E-mail não existe. Inserindo novo assinante...');

  const [{ subscriberId }] = await db
    .insert(schema.subscriptions)
    .values({
      name,
      email,
    })
    .returning({
      subscriberId: schema.subscriptions.id,
    })

  // Log de depuração
  console.log('Assinante inserido com sucesso.');

  if (invitedBySubscriberId) {
    // Log de depuração
    console.log('Referrer encontrado. Atualizando ranking no Redis...');
    await redis.zincrby('referral:ranking', 1, invitedBySubscriberId)
  }

  // Log de depuração
  console.log('Finalizando função de inscrição.');

  return { subscriberId }
}