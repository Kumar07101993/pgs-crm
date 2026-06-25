import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const lists = await prisma.leadList.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(lists);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch lists" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const list = await prisma.leadList.create({
      data: {
        name: body.name,
        createdById: body.createdById,
      },
    });

    return NextResponse.json(list);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to create list" },
      { status: 500 }
    );
  }
}