
import sharp from "sharp";
import { readdir } from "node:fs/promises";
import { join, parse } from "node:path";

const imageDirectory = "public/images";

const files = (await readdir(imageDirectory)).filter((file) =>
    /\.(png|jpe?g)$/i.test(file)
);

for (const file of files) {
    const inputPath = join(imageDirectory, file);
    const outputPath = join(
        imageDirectory,
        `${parse(file).name}.webp`
    );

    await sharp(inputPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);

    console.log(`Converted: ${file} → ${parse(file).name}.webp`);
}
