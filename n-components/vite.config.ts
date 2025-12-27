import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as fs from 'fs';
import * as path from 'path';

const packageJson = JSON.parse(fs.readFileSync(path.resolve(dirname(fileURLToPath(import.meta.url)), 'package.json'), 'utf-8'));
const version = packageJson.version;

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
            name: 'copy-root-html',
            apply: 'build',
            generateBundle() {
                const src = path.resolve(__dirname, 'index.html');
                const dest = path.resolve(__dirname, 'dist/index.html');
                if (fs.existsSync(src)) {
                    fs.copyFileSync(src, dest);
                }
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
                html = html.replace(/href="\.\/src\/index\.css"/g, 'href="index.css"');
                html = html.replace(/href="\.\/src\/one-dark\.css"/g, 'href="one-dark.css"');
                html = html.replace(/const currentVersionNum = '[^']*'/, `const currentVersionNum = '${version}'`);
                fs.writeFileSync(indexPath, html);
            }
        }
    ]
});
