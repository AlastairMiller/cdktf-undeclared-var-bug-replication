import {TerraformStack, TerraformVariable} from "cdktf";
import {Construct} from "constructs";

export class AnotherExampleStack extends TerraformStack {

    constructor(scope: Construct, id: string, environment: string) {
        super(scope, id);

        new TerraformVariable(this, `${environment}_ANOTHER_EXAMPLE_VARIABLE`, {
            type: 'string',
            description: 'Another example Terraform variable',
            sensitive: true
        })
        //deploy some infrastructure to target 2
    }

}