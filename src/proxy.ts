import { NextResponse } from 'next/server'
import { DEFAULT_LOCALE, LANGUAGES } from './constants'
import { NextRequest } from 'next/server'

// Get the preferred locale, similar to the above or using a library

// function getLocale(request) { ... }

const locales = LANGUAGES.map((lang) => lang.code)

export function proxy(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  //   const locale = getLocale(request)

  request.nextUrl.pathname = `/${DEFAULT_LOCALE}/${pathname.split('/').slice(2).join('/')}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!api|admin|payload|_next/static|_next/image|favicon.ico).*)'],
}
