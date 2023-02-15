import { defineConfig } from 'vite';
import htmlPurge from 'vite-plugin-purgecss';

export default defineConfig({
    root: 'src',
    build: {
        minify: 'esbuild',
        emptyOutDir: true,
        outDir: '../dist',
    },
    server: {
        hot: true,
        open: true,
    },
    plugins: [htmlPurge()],
});
