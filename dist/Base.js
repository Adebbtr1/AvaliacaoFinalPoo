"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const crypto_1 = require("crypto");
class Base {
    id;
    constructor() {
        this.id = (0, crypto_1.randomUUID)();
    }
}
exports.Base = Base;
