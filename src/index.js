import Calc from './calc';
import Log from './log';
import img from './sprite.png'

const calc = new Calc();
const log = new Log();

log.log(calc.add(1,2,3));

const el = document.createElement('img');
el.src = img;
document.body.appendChild(el)