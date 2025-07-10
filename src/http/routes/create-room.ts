import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod';
import { z } from 'zod/v4';
import { db } from '../../db/connection.ts';
import { schema } from '../../db/schema/index.ts';

export const createRoomRoute: FastifyPluginCallbackZod = (app) => {
  app.post(
    '/rooms',
    {
      schema: {
        body: z.object({
          name: z.string().min(1),
          description: z.string().optional(),
        }),
      },
    },
    async ({ body }, reply) => {
      const { name, description } = body;

      const [insertedRoom] = await db
        .insert(schema.rooms)
        .values({
          name,
          description,
        })
        .returning();

      if (!insertedRoom) {
        throw new Error('Failed to create new room');
      }

      return reply.status(201).send({ roomId: insertedRoom.id });
    }
  );
};
