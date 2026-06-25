import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const body = await req.json();

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      role: body.role,
    },
  });

  return NextResponse.json(user);
}