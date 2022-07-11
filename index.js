//Iniciando a database:
require("./database/firebase")

//Bom, estamos na pagina inicial.

// Agora iremos chamar as dependencias do projeto.
const express = require("express") // responsavel para deixar o site com saúde

// Agora iremos chamar as funções responsaveis ai a baixo
const app = express()

//Ok, agora vamos definir tudo da Database

 const firebase = require("firebase")
 const db = firebase.database()



// Pronto! Agora iremos fazer/desenvolver as paginas do site:
app.get("/placasmae", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/menulateral/placasmae.html")
})
app.get("/v2/img/amd.jpg", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/images/amd.jpg")
})
app.get("/v2/img/amd/placamaeamd-1.jpg", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/images/amdimages/placamãeamd-1.png")
})
app.get("/v2/img/amd/placamaeamd-2.jpg", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/images/amdimages/placamãeamd-2.png")
})
app.get("/v2/img/amd/placamaeamd-3.jpg", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/images/amdimages/placamãeamd-3.png")
})
app.get("/v2/img/amd/placamaeamd-4.jpg", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/images/amdimages/placamãeamd-4.png")
})
app.get("/v2/img/amd/placamaeamd-5.jpg", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/images/amdimages/placamãeamd-5.png")
})

app.get("/v2/img/intel/placamaeamd-1.jpg", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/images/intelimages/1.png")
})
app.get("/v2/img/intel/placamaeamd-2.jpg", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/images/intelimages/2.png")
})
app.get("/v2/img/intel/placamaeamd-3.jpg", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/images/intelimages/3.png")
})
app.get("/v2/img/intel/placamaeamd-4.jpg", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/images/intelimages/4.png")
})
app.get("/v2/img/intel/placamaeamd-5.jpg", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/images/intelimages/5.png")
})

app.get("/v2/img/amd/process1.jpg", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/images/amdimages/processador1.png")
})
app.get("/v2/img/amd/process2.jpg", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/images/amdimages/processador2.png")
})
app.get("/v2/img/amd/process3.jpg", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/images/amdimages/processador3.png")
})
app.get("/v2/img/amd/process4.jpg", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/images/amdimages/processador4.png")
})
app.get("/v2/img/amd/process5.jpg", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/images/amdimages/processador5.png")
})

app.get("/v2/img/amd/wathercoler1.jpg", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/images/amdimages/wathercoller1.png")
})
app.get("/v2/img/amd/wathercoler2.jpg", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/images/amdimages/wathercoller2.png")
})
app.get("/v2/img/amd/wathercoler3.jpg", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/images/amdimages/wathercoller3.png")
})
app.get("/v2/img/amd/wathercoler4.jpg", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/images/amdimages/wathercoller4.png")
})
app.get("/v2/img/amd/wathercoler5.jpg", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/images/amdimages/wathercoller5.png")
})
app.get("/v2/img/amd/wathercoler6.jpg", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/images/amdimages/wathercoller6.png")
})

app.get("/amd", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/admselect.html")
})
app.get("/amd/1", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/amdprocess.html")
})
app.get("/amd/2", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/amdprocess2.html")
})
app.get("/amd/3", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/amdprocess3.html")
})
app.get("/amd/4", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/amdprocess4.html")
})
app.get("/amd/5", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/amdprocess5.html")
})

app.get("/amd/1/1", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/amdwathercoler.html")
})
app.get("/amd/2/1", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/amdwathercoler.html")
})
app.get("/amd/3/1", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/amdwathercoler.html")
})
app.get("/amd/4/1", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/amdwathercoler.html")
})
app.get("/amd/5/1", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/amdwathercoler.html")
})
app.get("/amd/carregando", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/carregando.html")
})
app.get("/intel/1", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/intelcarregando.html")
})
app.get("/intel/carregando", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/intelcarregando.html")
})
app.get("/intel/1", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/intelcarregando.html")
})
app.get("/intel/3", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/intelcarregando.html")
})
app.get("/intel/4", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/intelcarregando.html")
})
app.get("/intel/5", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/intelcarregando.html")
})
//.
app.get("/paginapc", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/paginapc.html")
})
app.get("/intel", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/intelselect.html")
})
app.get("/intel", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/intelselect.html")
})
app.get("/intel", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/intelselect.html")
})
app.get("/intel", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/intelselect.html")
})
app.get("/B550M.png", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/menulateral/imagens.B550M.png")
})
app.get("/B450M.png", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/menulateral/imagens.B450M.png")
})
app.get("/amd-select", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/erroapi.html")
})
app.get("/amd-select", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/erroapi.html")
})
app.get("/amd-select", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/erroapi.html")
})
app.get("/amd-select", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/erroapi.html")
})
app.get("/amd-select", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/erroapi.html")
})
app.get("/amd-select", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/erroapi.html")
})
//.
app.get("/intel-select", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/erroapi.html")
})
app.get("/v2/img/intel.png", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/images/intel.png")
})
app.get("/monte-seu-pc", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/monte-seu-pc.html")
})
app.get("/processador", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/menulateral/processador.html")
})
app.get("/armazenamento", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/menulateral/armazenamento.html")
})
app.get("/placadevideo", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/menulateral/placadevideo.html")
})
app.get("/memorias", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/menulateral/memorias.html")
})
app.get("/fontes", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/menulateral/fontes.html")
})
app.get("/", function(req, res) { // pagina inicial
    res.sendFile(__dirname+"/views/index.html")
})

app.get("/v2/scripts/js/script.js", function(req, res) { // pagina do JavaScript
    res.sendFile(__dirname+"/css/pgcompra.css")
})
app.get("/v2/scripts/style/style.css", function(req, res) { // pagina de estilo
    res.sendFile(__dirname+"/css/style.css")
})
//img
app.get("/v2/img/logo.png", function(req, res) { // pagina de imagens
    res.sendFile(__dirname+"/menulateral/logo.png")
})
app.get("/v2/img/carrier.png", function(req, res) { // pagina de imagens
    res.sendFile(__dirname+"/images/carrier.png")
})
app.get("/v2/img/erion-tgt-rgb-amd-gtx-001_8-removebg-preview.png", function(req, res) { // pagina de imagens
    res.sendFile(__dirname+"/images/erion-tgt-rgb-amd-gtx-001_8-removebg-preview.png")
})
app.get("/v2/img/frost-mancer-intel-geforce-tuf-003-removebg-preview.png", function(req, res) { // pagina de imagens
    res.sendFile(__dirname+"/images/frost-mancer-intel-geforce-tuf-003-removebg-preview.png")
})
app.get("/v2/img/halo.png", function(req, res) { // pagina de imagens
    res.sendFile(__dirname+"/images/halo.png")
})
app.get("/v2/img/jake.png", function(req, res) { // pagina de imagens
    res.sendFile(__dirname+"/images/jake.png")
})
app.get("/v2/img/narok-mancer-intel-rtx-0001_1-removebg-preview.png", function(req, res) { // pagina de imagens
    res.sendFile(__dirname+"/images/narok-mancer-intel-rtx-0001_1-removebg-preview.png")
})
app.get("/v2/img/pc1.jpg", function(req, res) { // pagina de imagens
    res.sendFile(__dirname+"/images/pc1.jpg")
})
app.get("/v2/img/pc2.jpg", function(req, res) { // pagina de imagens
    res.sendFile(__dirname+"/images/pc2.jpg")
})
app.get("/v2/img/pc3.jpg", function(req, res) { // pagina de imagens
    res.sendFile(__dirname+"/images/pc3.jpg")
})
app.get("/v2/img/pc4.jpg", function(req, res) { // pagina de imagens
    res.sendFile(__dirname+"/images/pc4.jpg")
})
app.get("/v2/img/pc5.jpg", function(req, res) { // pagina de imagens
    res.sendFile(__dirname+"/images/pc5.jpg")
})
app.get("/v2/img/ranger-mancer-amd-rx-gtx-001_2-removebg-preview.png", function(req, res) { // pagina de imagens
    res.sendFile(__dirname+"/images/ranger-mancer-amd-rx-gtx-001_2-removebg-preview.png")
})
app.get("/v2/img/reaper.png", function(req, res) { // pagina de imagens
    res.sendFile(__dirname+"/images/reaper.png")
})
app.get("/v2/img/stealth-amd-1030-001_20-removebg-preview.png", function(req, res) { // pagina de imagens
    res.sendFile(__dirname+"/images/stealth-amd-1030-001_20-removebg-preview.png")
})
app.get("/v2/img/templar-amd-gtrx-001-removebg-preview.png", function(req, res) { // pagina de imagens
    res.sendFile(__dirname+"/images/templar-amd-gtrx-001-removebg-preview.png")
})
app.get("/v2/img/typhoon-mancer-amd-gtx-rx-001_8_1-removebg-preview.png", function(req, res) { // pagina de imagens
    res.sendFile(__dirname+"/images/typhoon-mancer-amd-gtx-rx-001_8_1-removebg-preview.png")
})
app.get("/v2/img/baixados-removebg-preview.png", function(req, res) { // pagina de imagens
    res.sendFile(__dirname+"/images/baixados-removebg-preview.png")
})

app.get("*", function(req, res) {
    res.sendFile(__dirname+"/views/erroscript.html")
})
// Agora você pode acessar o Site em 'http://localhost'.
app.listen(80, function (err) {
    console.log("Site Online!");
 })
 