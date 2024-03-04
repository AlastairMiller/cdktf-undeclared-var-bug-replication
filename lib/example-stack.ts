import {TerraformStack, TerraformVariable} from "cdktf";
import {Construct} from "constructs";

export class ExampleStack extends TerraformStack {

    constructor(scope: Construct, id: string, environment: string) {
        super(scope, id);

        new TerraformVariable(this, `${environment}_EXAMPLE_VARIABLE`, {
            type: 'string',
            description: 'An example Terraform variable',
            sensitive: true
        })
    }

}