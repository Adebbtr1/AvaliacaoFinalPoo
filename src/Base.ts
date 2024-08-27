import { randomUUID } from "crypto";

export abstract class Base {
    readonly id: string;

    constructor() {
        this.id = randomUUID(); 
    }
}
