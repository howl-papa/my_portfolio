// Cloudflare Pages Functions Middleware for www.yongrak.pro
// This provides additional functionality beyond _headers and _redirects files

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  
  // Get response from the asset or next middleware
  const response = await next();
  
  // Clone response to make it mutable
  const newResponse = new Response(response.body, response);
  
  // Add security headers (additional to _headers file)
  newResponse.headers.set('X-Robots-Tag', 'index, follow');
  newResponse.headers.set('X-Powered-By', 'Cloudflare Pages + Next.js');
  
  // Add custom headers for specific paths
  if (url.pathname === '/') {
    newResponse.headers.set('X-Page-Type', 'homepage');
  }
  
  // Handle file downloads with proper headers
  if (url.pathname.includes('/download/') || url.pathname.endsWith('.html')) {
    newResponse.headers.set('Content-Disposition', 'inline');
    newResponse.headers.set('X-Content-Type-Options', 'nosniff');
  }
  
  // Performance monitoring
  const startTime = Date.now();
  newResponse.headers.set('X-Response-Time', `${Date.now() - startTime}ms`);
  
  return newResponse;
}

// Health check endpoint
export async function onRequestGet(context) {
  const { request } = context;
  const url = new URL(request.url);
  
  if (url.pathname === '/api/health') {
    return new Response(JSON.stringify({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      domain: 'www.yongrak.pro',
      service: 'Yongrak Portfolio'
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }
    });
  }
  
  // Continue to next middleware/asset
  return context.next();
}