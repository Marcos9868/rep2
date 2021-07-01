function Calculando() {
    var nome = document.getElementById('txtnome')
    var idade = document.getElementById('txtidade')
    var salbruto = document.getElementById('txtsbruto')
    var res = document.getElementById('res')
    if (nome.value.length == 0 || idade.value.length == 0 || salbruto.value.length == 0){
        res.innerHTML = 'Impossível Calcular. Preencha todos os campos e Tente Novamente'
    } else {
        res.innerHTML = 'Calculando: <br>'
        var sb = Number(salbruto.value) //Salário Bruto
        var r = Number(res.value) //Salário Líquido
        var t = Number(salbruto.value * 0.06) //Transporte
        res.innerHTML = ''
        if (sb >= 1100.00 && sb <= 2203.48){
            r = sb - (sb * 0.09) - t
            res.innerHTML += `Salário Líquido: <br> \u{1F449}  R$ ${r.toFixed(2)} <br> \u{1F449}  INSS: R$${(sb * 0.09).toFixed(2)} <br> \u{1F449}  Transporte: R$ ${t.toFixed(2)}`
        } else if (sb >= 2203.49 && sb <= 3305.22) {
            r = sb - (sb * 0.12) - t
            res.innerHTML += `Salário Líquido: <br> \u{1F449}  R$ ${r.toFixed(2)} <br> \u{1F449}  INSS: R$${(sb * 0.12).toFixed(2)} <br> \u{1F449}  Transporte: R$ ${t.toFixed(2)}`
        } else if (sb >= 3305.23 && sb <= 6433.57) {
            r = sb - (sb * 0.14) - t 
            res.innerHTML += `Salário Líquido: <br> \u{1F449}  R$ ${r.toFixed(2)} <br> \u{1F449}  INSS: R$${(sb * 0.14).toFixed(2)} <br> \u{1F449}  Transporte: R$ ${t.toFixed(2)}`
        }
    }
}