const fs = require('fs');

const rawText = fs.readFileSync('temp_wavespell_text.txt', 'utf8');
const lines = rawText.split('\n');

const kins = {};
let currentWavespell = 0;

lines.forEach(line => {
    const waveMatch = line.match(/Onda Encantada (\d+):/);
    if (waveMatch) {
        currentWavespell = parseInt(waveMatch[1], 10);
    }

    // Match line: "- **1. Dragón Magnético (Propósito):** Luz: Iniciar proyectos. Sombra: Sentirse no apoyado. Consejo: Confía en que la vida te nutre."
    // Note: formatting might vary slightly.
    const kinMatch = line.match(/- \*\*(\d+)\. .*?\*\* Luz: (.*?)\. Sombra: (.*?)\. Consejo: (.*?)(?:\.|$)/);

    if (kinMatch && currentWavespell > 0) {
        const tone = parseInt(kinMatch[1], 10);
        const luz = kinMatch[2].trim();
        const sombra = kinMatch[3].trim();
        const consejo = kinMatch[4].trim();

        const absoluteKin = (currentWavespell - 1) * 13 + tone;

        kins[absoluteKin] = {
            luz,
            sombra,
            consejo
        };
    }
});

fs.writeFileSync('./app/src/utils/ondasEncantadasDetalles.json', JSON.stringify(kins, null, 2));
console.log(`Parsed ${Object.keys(kins).length} kins.`);
