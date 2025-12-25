import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: './src/index.ts',
            name: 'nComponents',
            formats: ['umd', 'es']
        },
        outDir: 'dist'
    }
});
