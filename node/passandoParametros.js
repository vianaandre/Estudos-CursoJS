// module.exports = function (...nomes) {
//     return nomes.map(nomes => `Boa semana ${nomes}`)
// }

const { at } = require("lodash")

module.exports = function (...num) {
    return num.reduce((acumulador, atual) => acumulador + atual )
}
