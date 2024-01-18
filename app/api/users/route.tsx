import { NextRequest, NextResponse } from "next/server";
import schema from "./schema"

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "John Doe", email: "" },
    { id: 2, name: "Jane Doe", email: "" },
  ])
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const validation = schema.safeParse(body)
  // if (!body.name || !body.email) return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
  if (!validation.success) return NextResponse.json({ error: validation.error }, { status: 400 })
  return NextResponse.json({
    id: 3,
    name: body.name,
    email: body.email,
  }, { status: 201 })
}
