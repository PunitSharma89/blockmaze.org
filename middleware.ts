// Locale routing is handled via NEXT_LOCALE cookie — no middleware rewrites needed.
// This file is intentionally minimal so it does not interfere with existing routes.

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
