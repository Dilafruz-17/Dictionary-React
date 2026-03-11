import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Vocabulary from "./models/lugat.js";

// __dirname olish
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// vocabularies papkasi
const outputDir = path.join(__dirname, "vocabularies");

// agar papka bo‘lmasa yaratadi
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// a dan z gacha
for (let i = 97; i <= 122; i++) {
  const letter = String.fromCharCode(i); // a, b, c ...

  // shu harf bilan boshlanadigan so‘zlar
  const filtered = Vocabulary.filter(word =>
    word.eng.toLowerCase().startsWith(letter)
  );

  // fayl ichidagi content (bo‘sh bo‘lsa ham yozadi)
  const fileContent =
    `export default ${JSON.stringify(filtered, null, 2)};`;

  const fileName = `${letter}.js`;
  const filePath = path.join(outputDir, fileName);

  fs.writeFileSync(filePath, fileContent, "utf-8");

  console.log(`Created: ${fileName} (${filtered.length} words)`);
}

console.log("A dan Z gacha barcha fayllar yaratildi!");