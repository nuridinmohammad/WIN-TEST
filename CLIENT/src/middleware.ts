import { NextResponse, type NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token");

  if (!token?.value) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  try {
    const decoded = jwt.decode(token.value) as JwtPayload;
    if (decoded.exp! < Math.floor(Date.now() / 1000)) {
      const response = NextResponse.redirect(new URL("/signin", request.url));
      // response.cookies.delete("access_token");
      // response.cookies.delete("refresh_token");

      return response;
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/products", "/products/:path*", "/profile"],
};
