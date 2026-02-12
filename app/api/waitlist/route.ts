import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body?.email || '').trim();
    const thoughts = String(body?.thoughts || '').trim();

    if (!email || !thoughts) {
      return NextResponse.json(
        { message: 'Email and thoughts are required.' },
        { status: 400 },
      );
    }

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isEmailValid) {
      return NextResponse.json({ message: 'Please provide a valid email.' }, { status: 400 });
    }

    if (thoughts.length < 10) {
      return NextResponse.json(
        { message: 'Please share a bit more detail in your thoughts.' },
        { status: 400 },
      );
    }

    console.log('[waitlist]', {
      email,
      thoughts,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true, message: 'Added to waitlist.' }, { status: 200 });
  } catch {
    return NextResponse.json({ message: 'Invalid request body.' }, { status: 400 });
  }
}
