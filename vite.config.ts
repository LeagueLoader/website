import solid from 'solid-start/vite';
import { defineConfig } from 'vite';

// @ts-ignore
import deno from 'solid-start-deno';
// @ts-ignore
import node from 'solid-start-node';

const useAdapter = process.argv.includes('--deno') ? deno : node;

export default defineConfig({
  plugins: [
    solid({
      adapter: useAdapter()
    })
  ],
});