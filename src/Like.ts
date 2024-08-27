import { Base } from "./Base";

export class Like extends Base {
    userId: string;

    constructor(userId: string) {
        super();
        this.userId = userId;
    }
}
