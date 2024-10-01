import { productService } from "@/contollers/ProductService";
import { NextRequest, NextResponse } from "next/server";
import { IQuery } from "../../types";

//GET  api/product/slug
export async function GET(req: NextRequest, { params: { slug } }: IQuery) {
  try {
    const fetchedProduct = await productService.getById(slug);
    if (!fetchedProduct)
      return NextResponse.json(
        { sucess: false, message: "Not Found" },
        { status: 404 }
      );
    return NextResponse.json({ sucess: true, data: fetchedProduct });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
//POST /api/product/slug
export async function PUT(req: NextRequest, { params: { slug } }: IQuery) {
  try {
    const body = await req.json();
    const updatedProduct = await productService.update(slug, body);
    if (!updatedProduct)
      return NextResponse.json(
        { sucess: false, message: "Could not update product" },
        { status: 400 }
      );

    return NextResponse.json({ sucess: true, data: updatedProduct });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params: { slug } }: IQuery) {
  try {
    const deletedProduct = await productService.delete(slug);
    if (!deletedProduct)
      return NextResponse.json(
        { sucess: false, message: "Not Found" },
        { status: 404 }
      );

    return NextResponse.json({ sucess: true, data: deletedProduct });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
