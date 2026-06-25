import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
      password: body.password,
    },
  });

  if (!user) {
    return NextResponse.json(
      { success: false },
      { status: 401 }
    );
  }

  return NextResponse.json({
    success: true,
    user,
  });
}