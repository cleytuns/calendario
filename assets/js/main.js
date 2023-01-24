const h1 = document.querySelector('.container h1')
const data = new Date();

function getDiaSemana(diasemana) {
    let getDiaSemana;

    switch (diasemana) {
        case 0:
            getDiaSemana = 'Domingo';
            return getDiaSemana;
        case 1:
            getDiaSemana = 'Segunda-Feira';
            return getDiaSemana;
        case 2:
            getDiaSemana = 'Terça-Feira';
            return getDiaSemana;
        case 3:
            getDiaSemana = 'Quarta-Feira';
            return getDiaSemana;
        case 4:
            getDiaSemana = 'Quinta-Feira';
            return getDiaSemana;
        case 5:
            getDiaSemana = 'Sexta-Feira';
            return getDiaSemana;
        case 6:
            getDiaSemana = 'Sabado';
            return getDiaSemana;
    }
}

function getNomeMes(numeroMes) {
    let nomeMes;

    switch (numeroMes) {
        case 0:
            nomeMes = 'Janeiro';
            return nomeMes;
        case 1:
            nomeMes = 'Fevereiro';
            return nomeMes;
        case 2:
            nomeMes = 'Março';
            return nomeMes;
        case 3:
            nomeMes = 'Abril';
            return nomeMes;
        case 4:
            nomeMes = 'Maio';
            return nomeMes;
        case 5:
            nomeMes = 'Junho';
            return nomeMes;
        case 6:
            nomeMes = 'Julho';
            return nomeMes;
        case 7:
            nomeMes = 'Agosto';
            return nomeMes;
        case 8:
            nomeMes = 'Setembro';
            return nomeMes;
        case 9:
            nomeMes = 'Outubro';
            return nomeMes;
        case 10:
            nomeMes = 'Novembro';
            return nomeMes;
        case 11:
            nomeMes = 'Dezembro';
            return nomeMes;
    }
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function criarData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemana(diaSemana)
    const nomeMes = getNomeMes(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
        ` de ${data.getFullYear()} ` + 
        ` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    );
}

h1.innerHTML = criarData(data);