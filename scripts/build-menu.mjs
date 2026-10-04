import { readFile, writeFile } from 'node:fs/promises';
import { build } from 'esbuild';

const htmlPath = new URL('../index.html', import.meta.url);
const result = await build({
  entryPoints: ['src/main.jsx'],
  bundle: true,
  minify: true,
  format: 'iife',
  outfile: 'menu.bundle.js',
  write: false,
  loader: { '.css': 'css' }
});

const script = result.outputFiles.find(file => file.path.endsWith('.js'));
const styles = result.outputFiles.find(file => file.path.endsWith('.css'));

if (!script || !styles) {
  throw new Error('The menu JavaScript or CSS bundle was not generated.');
}

let html = await readFile(htmlPath, 'utf8');
const stylesMarker = '<style id="menu-bundle-styles"></style>';

if (!html.includes(stylesMarker)) {
  html = html.replace(/<style>\s*\.particle-text\{[\s\S]*?<\/style>/, stylesMarker);
}

const bodyStart = html.indexOf('<body>');
if (!html.includes(stylesMarker) || bodyStart === -1) {
  throw new Error('The inline bundle markers are missing from index.html.');
}

if (/<\/script/i.test(script.text)) {
  throw new Error('The generated script contains a closing script tag.');
}

html = `${html.slice(0, bodyStart)}<body>
    <div id="background" aria-hidden="true"></div>
    <div id="root"></div>
    <script id="menu-bundle-script"></script>
</body>
</html>
`;

html = html
  .replace(stylesMarker, () => `<style>\n${styles.text}\n</style>`)
  .replace(
    '<script id="menu-bundle-script"></script>',
    () => `<script>\n${script.text}\n</script>`
  );

await writeFile(htmlPath, html);
