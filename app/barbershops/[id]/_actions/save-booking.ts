"use server";

import { db } from "@/app/_lib/prisma";

interface SaveBookingParams {
  serviceId: string;
  barbershopId: string;
  date: Date;
  userId: string;
}

export const saveBooking = async (params: SaveBookingParams) => {
  await db.booking.create({
    data: {
      barbershopId: params.barbershopId,
      serviceId: params.serviceId,
      date: params.date,
      userId: params.userId,
    },
  });
};
