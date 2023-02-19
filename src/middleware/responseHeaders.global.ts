import { Middleware } from '@nuxt/types';

const responseHeadersMiddleware: Middleware = (context: { res: { setHeader: (arg0: string, arg1: string) => void; }; }) => {
  context.res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  context.res.setHeader('X-XSS-Protection', '1; mode=block');
  context.res.setHeader('X-Content-Type-Options', 'nosniff');
  context.res.setHeader('Content-Security-Policy', 'upgrade-insecure-requests; block-all-mixed-content;');
  context.res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  context.res.setHeader('Feature-Policy', "camera 'none'; microphone 'none'");
  context.res.setHeader('Permissions-Policy', 'camera=(), microphone=()');
};

export default responseHeadersMiddleware;
