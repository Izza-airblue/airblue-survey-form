import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow Next internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Root path → redirect
  if (pathname === "/") {
    const browserLang =
      request.headers.get("accept-language")?.startsWith("ur") ? "ur" : "en";

    return NextResponse.redirect(
      new URL(`/${browserLang}`, request.url)
    );
  }

  // Already has language
  if (pathname.startsWith("/en") || pathname.startsWith("/ur")) {
    return NextResponse.next();
  }

  // Any other path → prefix language
  const browserLang =
    request.headers.get("accept-language")?.startsWith("ur") ? "ur" : "en";

  return NextResponse.redirect(
    new URL(`/${browserLang}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"]
};