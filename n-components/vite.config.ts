import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as fs from 'fs';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    server: {
        middlewareMode: false,
    },
    build: {
        lib: {
            entry: './src/index.ts',
            name: 'nComponents',
            fileName: (format) => `n-components.${format === 'umd' ? 'umd' : 'es'}.js`,
            formats: ['umd', 'es']
        },
        outDir: 'dist',
        copyPublicDir: true
    },
    plugins: [
        {
            name: 'copy-css',
            apply: 'build',
            generateBundle() {
                const srcDir = path.resolve(__dirname, 'src');
                const distDir = path.resolve(__dirname, 'dist');
                ['index.css', 'one-dark.css'].forEach(file => {
                    const src = path.join(srcDir, file);
                    const dest = path.join(distDir, file);
                    if (fs.existsSync(src)) {
                        fs.copyFileSync(src, dest);
                    }
                });
            }
        },
        {
            name: 'rewrite-html-for-prod',
            apply: 'build',
            writeBundle() {
                const indexPath = path.resolve(__dirname, 'dist/index.html');
                let html = fs.readFileSync(indexPath, 'utf-8');
                html = html.replace(
                    /<script type="module">\s*import\('\.\/src\/index\.ts'\).*?<\/script>/s,
                    '<script src="n-components.umd.js"><\/script>'
                );
                fs.writeFileSync(indexPath, html);
            }
        }
    ]
});
