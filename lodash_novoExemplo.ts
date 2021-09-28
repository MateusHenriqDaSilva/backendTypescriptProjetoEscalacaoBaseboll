import lodash = require('lodash')

const nomesDosJogadores = [
    'Mateus',
    'Sandra',
    'Leliane',
    'Pedro',
    'Denner',
    'larissa',
    'rodrigo',
    'fabio',
    'debora'
]

const alinharJogadores = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(lodash.zip(alinharJogadores, nomesDosJogadores))


