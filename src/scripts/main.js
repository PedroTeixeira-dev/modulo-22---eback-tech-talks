AOS.init();

const dataEvento = new Date("Dec 12, 2023 19:00:00")

const timeStampEvento = dataEvento.getTime()

const contaAsHoras = setInterval(function(){
    const agora = new Date()
    const timeStampAtual = agora.getTime()

    const distanciaEvento = timeStampEvento - timeStampAtual

    const diaEmMs = (1000 * 60 * 60 *24)
    const horaEmMs = (1000 * 60 * 60)
    const minutoEmMs = (1000 * 60)
    const segundoEmMs = (1000)

    const diasEvento = Math.floor(distanciaEvento / (diaEmMs))

    const horasEvento = Math.floor(distanciaEvento % (diaEmMs) / (horaEmMs))

    const minuitosEvento = Math.floor((distanciaEvento % (horaEmMs)) / (minutoEmMs))

    const segundosEvento = Math.floor((distanciaEvento % minutoEmMs) / segundoEmMs)
    
    document.getElementById('contador').innerHTML = `${diasEvento}d ${horasEvento}h ${minuitosEvento}m ${segundosEvento}s`
    
    if (distanciaEvento < 0) {
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }

}, 1000)