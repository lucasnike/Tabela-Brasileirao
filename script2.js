const times = [
    {
        p: 1,
        time: "Flamengo",
        pts: 0,
        j: 0, 
        src: './images/flamengo.png', v : 0, e: 0, d:0
    },
    {
        p: 1,
        time: "Palmeiras",
        pts: 0,
        j: 0, src: './images/palmeiras.png', v : 0, e: 0, d:0

    },
    {
        p: 1,
        time: "Atlético-GO",
        pts: 0,
        j: 0, src: './images/atletico-go.png', v : 0, e: 0, d:0

    },
    {
        p: 1,
        time: "Internacional",
        pts: 0,
        j: 0, src: './images/inter.png', v : 0, e: 0, d:0

    },
    {
        p: 1,
        time: "Fluminense",
        pts: 0,
        j: 0, src: './images/flu.png', v : 0, e: 0, d:0

    },
    {
        p: 1,
        time: "Coritiba",
        pts: 0,
        j: 0, src: './images/coritiba.png', v : 0, e: 0, d:0

    },
    {
        p: 1,
        time: "Bahia",
        pts: 0,
        j: 0, src: './images/bahia.png', v : 0, e: 0, d:0

    },
    {
        p: 1,
        time: "Athletico-PR",
        pts: 0,
        j: 0, src: './images/cap.png', v : 0, e: 0, d:0

    },
    {
        p: 1,
        time: "Fortaleza",
        pts: 0,
        j: 0, src: './images/for.png', v : 0, e: 0, d:0

    },
    {
        p: 1,
        time: "Grêmio",
        pts: 0,
        j: 0, src: './images/gre.png', v : 0, e: 0, d:0

    },
    {
        p: 1,
        time: "São paulo",
        pts: 0,
        j: 0, src: './images/sp.png', v : 0, e: 0, d:0

    },
    {
        p: 1,
        time: "Goiás",
        pts: 0,
        j: 0, src: './images/goias.png', v : 0, e: 0, d:0

    },
    {
        p: 1,
        time: "Atlético-MG",
        pts: 0,
        j: 0, src: './images/mg.png', v : 0, e: 0, d:0

    },
    {
        p: 1,
        time: "Ceará",
        pts: 0,
        j: 0, src: './images/ceara.png', v : 0, e: 0, d:0

    },
    {
        p: 1,
        time: "Santos",
        pts: 0,
        j: 0, src: './images/santos.png', v : 0, e: 0, d:0

    },
    {
        p: 1,
        time: "Botafogo",
        pts: 0,
        j: 0, src: './images/fogo.png', v : 0, e: 0, d:0

    },
    {
        p: 1,
        time: "Vasco",
        pts: 0,
        j: 0, src: './images/colina.png', v : 0, e: 0, d:0

    },
    {
        p: 1,
        time: "Red Bull Bragantino",
        pts: 0,
        j: 0, src: './images/braga.png', v : 0, e: 0, d:0

    },
    {
        p: 1,
        time: "Corinthians",
        pts: 0,
        j: 0, src: './images/timao.png', v : 0, e: 0, d:0

    },
    {
        p: 1,
        time: "Sport",
        pts: 0,
        j: 0, src: './images/sport.png', v : 0, e: 0, d:0

    }
]

const table = document.getElementById('tabela-brasileirao')
const tableBody = document.getElementById('tableBody')

times.forEach((time, i) => {
    time.p = i + 1
})
function atualizarTabela() {
    for (let i = 0; i < times.length; i++) {
        let tableRow = document.createElement('tr')
        
        let tdP = document.createElement('td')
        let tdTime = document.createElement('td')
        let tdPts = document.createElement('td')
        let tdJogos = document.createElement('td')
        let tdV = document.createElement('td')
        let tdE = document.createElement('td')
        let tdD = document.createElement('td')
        let logo = document.createElement('img')
        
        let p = document.createTextNode(`${times[i].p}º`)
        let time = document.createTextNode(`${times[i].time}`)
        let pts = document.createTextNode(`${times[i].pts}`)
        let jogos = document.createTextNode(`${times[i].j}`)
        let v = document.createTextNode(`${times[i].v}`)
        let e = document.createTextNode(`${times[i].e}`)
        let d = document.createTextNode(`${times[i].d}`)
        
        logo.setAttribute('src', times[i].src)
        logo.setAttribute('class', 'logos')
        
        tdP.appendChild(p)
        tdP.setAttribute('class', `posicao`)
        tdTime.appendChild(time)
        tdPts.appendChild(pts)
        tdJogos.appendChild(jogos)
        tdV.appendChild(v)
        tdE.appendChild(e)
        tdD.appendChild(d)
        
        tableRow.appendChild(tdP)
        tableRow.appendChild(logo)
        tableRow.appendChild(tdTime)
        tableRow.appendChild(tdPts)
        tableRow.appendChild(tdJogos)
        tableRow.appendChild(tdV)
        tableRow.appendChild(tdE)
        tableRow.appendChild(tdD)
        
        tableBody.appendChild(tableRow)

        
    }
    adicionarOnclickDasLinhas()
    table.style.width = '500px'
}

atualizarTabela()

function adicionarOnclickDasLinhas() {
    const rows = document.querySelectorAll('tbody > tr')
    for (let i = 0; i < times.length; i++) {
        rows[i].onclick = e => {
            let div = document.createElement('div')

            let vit = document.createElement('button')
            vit.setAttribute('class', 'vit')
            let emp = document.createElement('button')
            emp.setAttribute('class', 'emp')
            let der = document.createElement('button')
            der.setAttribute('class', 'der')

            div.appendChild(vit)
            div.appendChild(emp)
            div.appendChild(der)

            table.style.width = '677px'
            rows[i].appendChild(div)

            zerarOnclickDasLinhas()

            let botoes = document.querySelectorAll('button')

            botoes[0].onclick = e => {
                times[i].pts += 3
                times[i].j++
                times[i].v++
                tableBody.innerHTML = ''
                ordenarTabela()
            }
            botoes[1].onclick = e => {
                times[i].pts++
                times[i].j++
                times[i].e++
                tableBody.innerHTML = ''
                ordenarTabela()
            }
            botoes[2].onclick = e => {
                times[i].j++
                times[i].d++
                tableBody.innerHTML = ''
                ordenarTabela()
            }
        }
    }
}

function zerarOnclickDasLinhas() {
    const rows = document.querySelectorAll('tbody > tr')
    for (let i = 0; i < times.length; i++) {
        rows[i].onclick = undefined
    }
}

function ordenarTabela() {
    times.sort((timeA, timeB) => {
        return timeA.pts > timeB.pts ? 1 : timeB.pts > timeA.pts ? -1 : 0
    })
    times.reverse()
    times.forEach( time => {
        time.p = times.indexOf(time) + 1
    } )
    atualizarTabela()
}

adicionarOnclickDasLinhas()
