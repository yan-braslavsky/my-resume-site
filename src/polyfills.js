// Polyfills for Node.js built-ins
import { Buffer } from 'buffer';

window.Buffer = Buffer;
window.global = window;
window.process = { env: { NODE_DEBUG: false } };