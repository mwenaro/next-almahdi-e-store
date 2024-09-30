import { NextRequest, NextResponse } from "next/server";
import { IQuery } from "../../types";
import { SubCategory } from "@/models/SubCategory";
import { dbCon } from "@/libs/mongoose/dbCon";

//GET  api/sub-category/slug
export async function GET(req: NextRequest, { params: { slug } }: IQuery) {
  try {
    await dbCon()
    const fetchedSubCategory = await SubCategory.findById(slug);
    if (!fetchedSubCategory)
      return NextResponse.json(
        { sucess: false, message: "Not Found" },
        { status: 404 }
      );

    return NextResponse.json({ sucess: true, data: fetchedSubCategory });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
//POST /api/sub-category/slug
export async function PUT(req: NextRequest, { params: { slug } }: IQuery) {
  try {
    const body = await req.json();
    await dbCon()
    const updatedSubCategory = await SubCategory.findByIdAndUpdate(slug, body);
    if (!updatedSubCategory)
      return NextResponse.json(
        { sucess: false, message: "Could not update Subcategory" },
        { status: 400 }
      );

    return NextResponse.json({ sucess: true, data: updatedSubCategory });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params: { slug } }: IQuery) {
  try {
    await dbCon()
    const deletedSubCategory = await SubCategory.findByIdAndDelete(slug);
    if (!deletedSubCategory)
      return NextResponse.json(
        { sucess: false, message: "Not Found" },
        { status: 404 }
      );

    return NextResponse.json({ sucess: true, data: deletedSubCategory });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
