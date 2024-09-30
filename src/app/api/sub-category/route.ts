import { dbCon } from "@/libs/mongoose/dbCon";
import { Category } from "@/models/Category";
import { SubCategory } from "@/models/SubCategory";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

//GET  api/sub-category
export async function GET(req: NextRequest) {
  try {
    await dbCon();
    new Category();
    const fetchedSubCategories = await SubCategory.find({}).populate(
      "category"
    );
    if (!fetchedSubCategories)
      return NextResponse.json(
        { sucess: false, message: "Not Found" },
        { status: 404 }
      );

    return NextResponse.json({ sucess: true, data: fetchedSubCategories });
  } catch (error: any) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
//POST /api/sub-category
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await dbCon();
    const newSubCategory = await SubCategory.insertMany(
      Array.isArray(body) ? body : [body]
    );
    if (!newSubCategory)
      return NextResponse.json(
        { sucess: false, message: "Could not create Subcategory" },
        { status: 400 }
      );
    revalidatePath("/dashboard/sub-categories");

    return NextResponse.json({ sucess: true, data: newSubCategory });
  } catch (error: any) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
