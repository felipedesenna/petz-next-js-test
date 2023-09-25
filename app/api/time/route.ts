import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return NextResponse.json({}, { status: 405 })
  }
  if (req.headers.get('content-type')?.toLowerCase() !== "application/json" && !req.body?.hasOwnProperty("date")) {
    return NextResponse.json({}, { status: 400 })
  }

  const data = [
    "10:00:00",
    "10:30:00",
    "11:00:00",
    "11:30:00",
    "13:00:00",
    "13:30:00",
    "14:00:00",
    "14:30:00",
    "15:00:00",
    "15:30:00",
    "16:00:00",
    "16:30:00",
    "17:00:00",
    "17:30:00",
    "18:00:00",
    "18:30:00"
  ]

  return NextResponse.json({ data }, { status: 200 })
}