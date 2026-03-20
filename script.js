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

let rondesRestants = MAX_INTENTS;

function inicialitzarSelects() {
    const selects = document.querySelectorAll(".code-input");
    selects.forEach(select => {
        for (let num = 0; num <= 9; num++) {
            const opcio = document.createElement("option");
            opcio.value = num;
            opcio.textContent = num;
            select.appendChild(opcio);
        }
    });
}

function logTerminal(missatge, tipus = "normal") {
    const terminal = document.getElementById("terminal");
    const linia = document.createElement("p");
    linia.classList.add("line");

    if (tipus === "error") linia.classList.add("error");
    if (tipus === "exit")  linia.classList.add("success");

    linia.textContent = "> " + missatge;
    terminal.appendChild(linia);
    terminal.scrollTop = terminal.scrollHeight;
}

document.getElementById("btn-enviar").addEventListener("click", function () {
    if (rondesRestants <= 0) {
        logTerminal("SISTEMA BLOQUEJAT. Recarrega la pàgina per tornar a intentar-ho.", "error");
        return;
    }

    const selects = document.querySelectorAll(".code-input");
    const intent = [];
    selects.forEach(select => {
        intent.push(parseInt(select.value));
    });

    const pistes = validarIntent(intent);

    rondesRestants--;
    document.getElementById("rondes-restants").textContent = rondesRestants;

    logTerminal(`Intent: [${intent.join(", ")}] → Pistes: ${pistes.join("  ")}`);

    if (esGuanyador(pistes)) {
        logTerminal("✔ ACCÉS CONCEDIT. Has endevinat el codi secret!", "exit");
        document.getElementById("btn-enviar").disabled = true;
        return;
    }

    if (rondesRestants === 0) {
        logTerminal(`✘ ACCÉS DENEGAT. El codi secret era: [${codiSecret.join(", ")}]`, "error");
        document.getElementById("btn-enviar").disabled = true;
    }
});

inicialitzarSelects();
logTerminal("Sistema inicialitzat. Introdueix el teu codi i prem EXECUTAR CODI.");