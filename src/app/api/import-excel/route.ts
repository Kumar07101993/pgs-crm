import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import * as XLSX from "xlsx";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const listName = formData.get("listName") as string;
    const createdById = formData.get("createdById") as string;
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }

    // Create List
    const leadList = await prisma.leadList.create({
      data: {
        name: listName,
        createdById,
      },
    });

    // Read Excel
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const workbook = XLSX.read(buffer, {
      type: "buffer",
    });
const sheetName = workbook.SheetNames[0];

const worksheet =
  workbook.Sheets[sheetName];

const rows = XLSX.utils.sheet_to_json(
  worksheet
) as any[];

console.log(rows);
    // Save Leads
    for (const row of rows) {
      await prisma.lead.create({
        data: {
          customerName:
            row.customerName ||
            row.Name ||
            "",

          phone:
            String(
              row.phone ||
                row.Phone ||
                ""
            ),

          listId: leadList.id,
        },
      });
    }

    return NextResponse.json({
      success: true,
      leadsImported: rows.length,
      listId: leadList.id,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to import excel",
      },
      {
        status: 500,
      }
    );
  }
}