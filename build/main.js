import "core-js/modules/es.promise.js";
import "core-js/modules/es.array.flat.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class App {
  constructor() {
    _defineProperty(this, "run", async (name = `World`) => {
      console.log(`Hello ${name}`);
    });
  }

}

const app = new App();
app.run().then(() => console.log(`done`)).catch(() => console.log(`not done`));
const a = [1, 2, [3, 4]].flat();