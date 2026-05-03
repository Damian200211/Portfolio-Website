const W = 30;
const H = 15;
const frames = [];

for (let f = 0; f < 12; f++) {
    let frame = "";
    const angle = (f / 12) * Math.PI * 2;
    for (let y = 0; y < H; y++) {
        let line = "";
        for (let x = 0; x < W; x++) {
            const nx = (x / W - 0.5) * 2;
            const ny = (y / H - 0.5) * 2;
            const d = nx * nx + ny * ny;
            if (d > 1) {
                line += " ";
            } else {
                const nz = Math.sqrt(1 - d);
                // Rotate longitude
                const lon = Math.atan2(nx, nz) + angle;
                const lat = Math.asin(ny);
                
                // simple map: continents
                const n = Math.sin(lon * 3) * Math.cos(lat * 2) + Math.sin(lat * 4);
                if (n > 0.3) {
                    line += "@";
                } else if (n > -0.2) {
                    line += "~";
                } else {
                    line += ".";
                }
            }
        }
        frame += line + "\n";
    }
    frames.push(frame);
}

console.log(JSON.stringify(frames));
