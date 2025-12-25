import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: './src/index.ts',
            name: 'nComponents',
            fileName: (format) => `n-components.${format === 'umd' ? 'umd' : 'es'}.js`,
            formats: ['umd', 'es']
        },
        outDir: 'dist'
    }
});
