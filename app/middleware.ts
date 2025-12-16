import { NextRequest, NextResponse } from "next/server";
import type { Language } from "../app/lib/translations";

const SUPPORTED_LANGS: Language[] = ["en", "ur"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (SUPPORTED_LANGS.some((lang) => pathname.startsWith(`/${lang}`))) {
    return NextResponse.next();
  }

  const browserLang =
    request.headers.get("accept-language")?.startsWith("ur") ? "ur" : "en";

  return NextResponse.redirect(
    new URL(`/${browserLang}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"]
};