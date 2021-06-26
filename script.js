const carMake = ['bmw', 'mercedes', 'audi', 'ford', 'toyota', 'honda', 'mazda', 'lexus', 'nissan', 'ferrari', 'alfa romeo', 'dodge']

const color = ['green', 'blue', 'red', 'purple', 'black', 'silver', 'white', 'yellow', 'orange']

const carType = ['sports', 'hatchback', 'suv', 'coupe']

const bmwModel = ['series 1', 'series 2', 'series 3', 'series 4', 'series 5']
const mercedesModel = ['a class', 'c class', 'cla', 'e class']
const audiModel = ['a1', 'a2', 'a3', 'a4', 'a5']
const fordModel = ['fiesta', 'focus', 'mustang']
const toyotaModel = ['aygo', 'prius', 'yaris']
const hondaModel = ['civic', 'accord', 'crx']
const mazdaModel = ['rx7', 'rx8', '3']
const lexusModel = ['rx', 'gx', 'is300']
const nissanModel = ['350z', 'skyline', 'gtr']
const ferrariModel = ['f50', '488 gtb', 'dino 246', '250 gtb']
const alfaRomeoModel = ['guilia', 'stelvo', 'guiletta']
const dodgeModel = ['avenger', 'viper', 'caliber']

const randomColor = Math.floor(Math.random() * color.length);
const randomMake = Math.floor(Math.random() * carMake.length)
const randomType = Math.floor(Math.random() * carType.length)
console.log(`The car that was randomly picked for you is a ${color[randomColor]} ${carType[randomType]} ${carMake[randomMake]}`);