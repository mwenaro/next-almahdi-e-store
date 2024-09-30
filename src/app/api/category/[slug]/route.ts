import { NextRequest, NextResponse } from "next/server";
import { IQuery } from "../../types";
import { Category } from "@/models/Category";
import { dbCon } from "@/libs/mongoose/dbCon";

//GET  api/category/slug
export async function GET(req: NextRequest, { params: { slug } }: IQuery) {
  try {
    await dbCon()
    const fetchedCategory = await Category.findById(slug);
    if (!fetchedCategory)
      return NextResponse.json(
        { sucess: false, message: "Not Found" },
        { status: 404 }
      );

    return NextResponse.json({ sucess: true, data: fetchedCategory });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
//POST /api/category/slug
export async function PUT(req: NextRequest, { params: { slug } }: IQuery) {
  try {
    const body = await req.json();
    await dbCon()
    const updatedCategory = await Category.findByIdAndUpdate(slug, body);
    if (!updatedCategory)
      return NextResponse.json(
        { sucess: false, message: "Could not update category" },
        { status: 400 }
      );

    return NextResponse.json({ sucess: true, data: updatedCategory });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params: { slug } }: IQuery) {
  try {
    await dbCon()
    const deletedCategory = await Category.findByIdAndDelete(slug);
    if (!deletedCategory)
      return NextResponse.json(
        { sucess: false, message: "Not Found" },
        { status: 404 }
      );

    return NextResponse.json({ sucess: true, data: deletedCategory });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
