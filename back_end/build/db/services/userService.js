"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = exports.create = void 0;
const userDal = __importStar(require("../dal/user"));
const create = (payload) => {
    return userDal.create(payload);
};
exports.create = create;
// export const update = (id: number, payload: Partial<IngredientInput>): Promise<IngredientOuput> => {
//     return ingredientDal.update(id, payload)
// }
// export const getById = (id: number): Promise<IngredientOuput> => {
//     return ingredientDal.getById(id)
// }
// export const deleteById = (id: number): Promise<boolean> => {
//     return ingredientDal.deleteById(id)
// }
const getAll = (filters) => {
    return userDal.getAll(filters);
};
exports.getAll = getAll;
