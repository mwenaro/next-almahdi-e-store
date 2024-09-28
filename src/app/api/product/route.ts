import { productService } from "@/contollers/ProductService";
import { NextRequest, NextResponse } from "next/server";

//GET  api/product
export async function GET(req: NextRequest) {
    try {
      const fetchedProducts = await productService.getPopullated()
      if (!fetchedProducts) return NextResponse.json(
          { sucess: false, message: "Not Found" },
          { status: 404 }
        );
  
      return NextResponse.json({ sucess: true, data: fetchedProducts });
    } catch (error: any) {
      return NextResponse.json({ error: error }, { status: 500 });
    }
}
//POST /api/product
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newProduct = await productService.create(body);
    if (!newProduct)
      return NextResponse.json(
        { sucess: false, message: "Could not create product" },
        { status: 400 }
      );

    return NextResponse.json({ sucess: true, data: newProduct });
  } catch (error: any) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
