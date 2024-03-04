import {App} from "cdktf";
import {ExampleStack} from "../lib/example-stack";
import {AnotherExampleStack} from "../lib/another-example-stack";

export class Application {

    constructor(app: App) {
        new ExampleStack(app, 'example-dev-stack', 'DEV');
        new ExampleStack(app, 'example-prod-stack', 'PROD');
        new AnotherExampleStack(app, 'another-example-dev-stack', 'DEV');
        new AnotherExampleStack(app, 'another-example-prod-stack', 'PROD');
    }

}

const app = new App();
new Application(app);
app.synth();