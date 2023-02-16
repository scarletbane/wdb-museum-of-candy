import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import htmlPurge from 'vite-plugin-purgecss';
import stylelint from 'vite-plugin-stylelint';

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
    plugins: [
        htmlPurge(),
        stylelint(),
        eslint()
    ],
});
