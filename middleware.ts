// middleware.ts
import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export default clerkMiddleware((auth, req) => {
  return NextResponse.next();
});

export const config = {
    matcher: ['/dashboard(.*)', '/profile(.*)', '/((?!.+\\.[\\w]+$|_next).*)'],
};
