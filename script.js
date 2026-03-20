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