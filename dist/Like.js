"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
const Base_1 = require("./Base");
class Like extends Base_1.Base {
    userId;
    constructor(userId) {
        super();
        this.userId = userId;
    }
}
exports.Like = Like;
