import { Middleware } from '@nuxt/types';

const responseHeadersMiddleware: Middleware = (context) => {
  const { res } = context;
  if (res) {
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Content-Security-Policy', 'upgrade-insecure-requests; block-all-mixed-content;');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Feature-Policy', "camera 'none'; microphone 'none'");
    res.setHeader('Permissions-Policy', 'camera=(), microphone=()');
  }
};

export default responseHeadersMiddleware;
