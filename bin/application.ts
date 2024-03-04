import {App} from "cdktf";
import {ExampleStack} from "../lib/example-stack";

export class Application {

    constructor(app: App) {
        new ExampleStack(app, 'example-dev-stack', 'DEV');
        new ExampleStack(app, 'example-prod-stack', 'PROD');
    }

}

const app = new App();
new Application(app);
app.synth();