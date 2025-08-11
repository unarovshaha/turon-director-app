import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname olish
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Qaysi papkada ishlash (odatda src)
const projectDir = path.resolve(__dirname, 'src');

// JSX ishlatilganligini aniqlovchi kalit so'zlar (JSX taglar)
const jsxIndicators = ['<div', '<span', '<p', '<section', '<header', '<footer', '<main', '<button', '<input', '<form', '<img', '<ul', '<li', '<h1', '<h2', '<h3', '<h4', '<h5', '<h6', '</>'];

// Reactga oid kalitlar
const reactIndicators = ['React', 'useState', 'useEffect', 'createContext', 'Component', 'memo'];

function isJsxFile(content) {
    return jsxIndicators.some(tag => content.includes(tag)) || reactIndicators.some(word => content.includes(word));
}

function renameJsToJsx(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            renameJsToJsx(fullPath);
        } else if (entry.isFile() && entry.name.endsWith('.js')) {
            const content = fs.readFileSync(fullPath, 'utf-8');

            if (isJsxFile(content)) {
                const newPath = fullPath.replace(/\.js$/, '.jsx');
                fs.renameSync(fullPath, newPath);
                console.log(`✅ Renamed: ${fullPath} -> ${newPath}`);
            }
        }
    }
}

renameJsToJsx(projectDir);
