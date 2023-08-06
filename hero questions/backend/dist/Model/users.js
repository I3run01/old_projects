"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    token: { type: String, required: true },
    heroQuestions: { type: Object, required: false }
});
const modelName = 'users';
const usersModel = mongoose_1.connection && mongoose_1.connection.models[modelName] ? mongoose_1.connection.models[modelName] : (0, mongoose_1.model)(modelName, schema);
exports.default = usersModel;
