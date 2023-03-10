import Auto from './Auto'
import AutoDeportivo from './AutoDeportivo'
import Rueda from './Rueda'

//rueda
let ruedaPirelli: Rueda = new Rueda(14, 'calle', 'carbono', 'pirelli', 0, 'caucho', 'auto')
//auto comun
let fordFalcon : Auto = new Auto('123abc', 'Falcon', 'Ford', ruedaPirelli);
let fordKa : Auto = new Auto('123abc', 'Ka', 'Ford', ruedaPirelli);
let astra : Auto = new Auto('123abc', 'astra', 'chevrolet', ruedaPirelli);
let Minicooper : Auto = new Auto('123abc', 'Minicooper', 'Minicooper', ruedaPirelli);
//auto deportivo
let lamborghini : AutoDeportivo = new AutoDeportivo('1000cc', 'abc123', '1994', 'lamborghini', true, ruedaPirelli)
let ferrari : AutoDeportivo = new AutoDeportivo('3000cc', 'abc123', '1992', 'ferrari', true, ruedaPirelli)
let camaro : AutoDeportivo = new AutoDeportivo('2000cc', 'abc123', '1996', 'chevrolet', true, ruedaPirelli)
let rollsRoyce : AutoDeportivo = new AutoDeportivo('5000cc', 'abc123', '2000', 'rollsRoyce', true, ruedaPirelli)
console.log(lamborghini);

let listadoAutos : Auto[] = [fordFalcon, lamborghini, fordKa, rollsRoyce, camaro, ferrari, astra, Minicooper]

function buscarMarca(array: Auto[], marca : string) {
    let autos = array.filter(auto => auto.marca !== marca)
    console.log('autos:', autos);
}

buscarMarca(listadoAutos, 'rollsRoyce')