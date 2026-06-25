import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const call = await prisma.callLog.create({
      data: {
        leadId: body.leadId,
        userId: body.userId,
        callType: body.callType,
        duration: body.duration,
        status: body.status,
      },
    });

    return NextResponse.json(call);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed" },
      { status: 500 }
    );
  }
}