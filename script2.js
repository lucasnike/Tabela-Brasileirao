const times = [
    {
        p: 1,
        time: "Flamengo",
        pts: 0,
        j: 0, 
        src: './images/flamengo.png'
    },
    {
        p: 1,
        time: "Palmeiras",
        pts: 0,
        j: 0, src: './images/palmeiras.png'

    },
    {
        p: 1,
        time: "Atlético-GO",
        pts: 0,
        j: 0, src: './images/atletico-go.png'

    },
    {
        p: 1,
        time: "Internacional",
        pts: 0,
        j: 0, src: './images/inter.png'

    },
    {
        p: 1,
        time: "Fluminense",
        pts: 0,
        j: 0, src: './images/flu.png'

    },
    {
        p: 1,
        time: "Coritiba",
        pts: 0,
        j: 0, src: './images/coritiba.png'

    },
    {
        p: 1,
        time: "Bahia",
        pts: 0,
        j: 0, src: './images/bahia.png'

    },
    {
        p: 1,
        time: "Athletico-PR",
        pts: 0,
        j: 0, src: './images/cap.png'

    },
    {
        p: 1,
        time: "Fortaleza",
        pts: 0,
        j: 0, src: './images/for.png'

    },
    {
        p: 1,
        time: "Grêmio",
        pts: 0,
        j: 0, src: './images/gre.png'

    },
    {
        p: 1,
        time: "São paulo",
        pts: 0,
        j: 0, src: './images/sp.png'

    },
    {
        p: 1,
        time: "Goiás",
        pts: 0,
        j: 0, src: './images/goias.png'

    },
    {
        p: 1,
        time: "Atlético-MG",
        pts: 0,
        j: 0, src: './images/mg.png'

    },
    {
        p: 1,
        time: "Ceará",
        pts: 0,
        j: 0, src: './images/ceara.png'

    },
    {
        p: 1,
        time: "Santos",
        pts: 0,
        j: 0, src: './images/santos.png'

    },
    {
        p: 1,
        time: "Botafogo",
        pts: 0,
        j: 0, src: './images/fogo.png'

    },
    {
        p: 1,
        time: "Vasco",
        pts: 0,
        j: 0, src: './images/colina.png'

    },
    {
        p: 1,
        time: "Red Bull Bragantino",
        pts: 0,
        j: 0, src: './images/braga.png'

    },
    {
        p: 1,
        time: "Corinthians",
        pts: 0,
        j: 0, src: './images/timao.png'

    },
    {
        p: 1,
        time: "Sport",
        pts: 0,
        j: 0, src: './images/sport.png'

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
        let logo = document.createElement('img')
        
        let p = document.createTextNode(`${times[i].p}º`)
        let time = document.createTextNode(`${times[i].time}`)
        let pts = document.createTextNode(`${times[i].pts}`)
        let jogos = document.createTextNode(`${times[i].j}`)
        
        logo.setAttribute('src', times[i].src)
        logo.setAttribute('class', 'logos')
        
        tdP.appendChild(p)
        tdP.setAttribute('i', `${i + 1}`)
        tdTime.appendChild(time)
        tdPts.appendChild(pts)
        tdJogos.appendChild(jogos)
        
        tableRow.appendChild(tdP)
        tableRow.appendChild(logo)
        tableRow.appendChild(tdTime)
        tableRow.appendChild(tdPts)
        tableRow.appendChild(tdJogos)
        
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
                tableBody.innerHTML = ''
                ordenarTabela()
            }
            botoes[1].onclick = e => {
                times[i].pts++
                times[i].j++
                tableBody.innerHTML = ''
                ordenarTabela()
            }
            botoes[2].onclick = e => {
                times[i].j++
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
