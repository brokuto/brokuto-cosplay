export class Test {
    constructor(json_test: any) {
        this.name = json_test.name;
        this.email = json_test.email;
    }
    name: string;
    email: string;
}
