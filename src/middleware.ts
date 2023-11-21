import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const cookies = req.cookies;
  const res = NextResponse.next({
    headers: new Headers(req.headers)
  })
  if (req.nextUrl.pathname.startsWith('/')) {
    console.log(req.nextUrl.pathname);
  }
  if (req.nextUrl.pathname == '/') {
    res.cookies.set('version', 'v1.0')
    console.log(cookies.get('token'));
    console.log(cookies.get('token')?.value);
  }
  if (req.nextUrl.pathname == '/about') {
    res.cookies.delete('version')
  }
  return res;
}
