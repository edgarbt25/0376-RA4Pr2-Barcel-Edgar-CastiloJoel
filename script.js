const MAX_INTENTS = 5;

const codiSecret = [];
for (let i = 0; i < 4; i++) {
    codiSecret.push(Math.floor(Math.random() * 10));
}

function validarIntent(intent) {
    const pistes = [];
    const copiaCodi = [...codiSecret];
    const copiaIntent = [...intent];

    for (let i = 0; i < 4; i++) {
        if (copiaIntent[i] === copiaCodi[i]) {
            pistes.push("1");
            copiaCodi[i] = null;
            copiaIntent[i] = null;
        }
    }

    for (let i = 0; i < 4; i++) {
        if (copiaIntent[i] === null) continue;
        const indexTrobat = copiaCodi.indexOf(copiaIntent[i]);
        if (indexTrobat !== -1) {
            pistes.push("Ø");
            copiaCodi[indexTrobat] = null;
        } else {
            pistes.push("×");
        }
    }

    return pistes;
}

function esGuanyador(pistes) {
    return pistes.filter(p => p === "1").length === 4;
}
