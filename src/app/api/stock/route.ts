import { NextResponse, type NextRequest } from 'next/server';
import httpCode from 'http-status-codes';
import type { RequestContext } from '@/types/Connect';

export async function POST(req: NextRequest): Promise<any> {
  try {
    NextResponse.json({ message: 'welcome' });
  } catch (error) {
    console.log('error+++', error);
  }
}
