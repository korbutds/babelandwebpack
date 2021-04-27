class App {

    run = async (name = `World`) => {
        console.log(`Hello ${name}`);
    }
}
const app = new App();
app.run()
    .then(() => console.log(`done`))
    .catch(() => console.log(`not done`));

const a = [1,2,[3,4]].flat()