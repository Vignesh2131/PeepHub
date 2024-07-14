import { initServer } from "./app"

async function init() {
    console.log("Hello world")
    const app = await initServer();
    app.listen(8000,()=>console.log(`Server started at port 8000`))
}
init();