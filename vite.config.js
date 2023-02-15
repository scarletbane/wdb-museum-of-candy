import { defineConfig } from 'vite';
import htmlPurge from 'vite-plugin-purgecss';

export default defineConfig({
    root: 'src',
    build: {
        emptyOutDir: true,
        outDir: '../dist',
    },
    server: {
        hot: true,
    },
    plugins: [htmlPurge()],
});
