import { NextRequest, NextResponse } from "next/server";
import schema from "../schema"

export function GET(request: NextRequest, { params }: { params: { id: number } }) {
  if (params.id > 10) return NextResponse.json({ error: "User not found" }, { status: 404 })
  return NextResponse.json({ id: params.id, name: "John Doe", email: "" })
}

export async function PUT(request: NextRequest, { params }: { params: { id: number } }) {
  const body = await request.json()
  const validation = schema.safeParse(body)
  // if (!body.name || !body.email) return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
  if (!validation.success) return NextResponse.json({ error: validation.error }, { status: 400 })
  if (params.id > 10) return NextResponse.json({ error: "User not found" }, { status: 404 })
  return NextResponse.json({
    id: params.id,
    name: body.name,
    email: body.email,
  })
}

export async function DELETE(request: NextRequest, { params }: { params: { id: number } }) {
  if (params.id > 10) return NextResponse.json({ error: "User not found" }, { status: 404 })
  return NextResponse.json({ id: params.id })
}
