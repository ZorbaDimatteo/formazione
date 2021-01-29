console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(string, ...values) {
    values[1] = values[1].replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
    return console.log(`<b>${values[0]} says</b>: "${values[1]}"`);
}

// da dove esce "undefined" in console?