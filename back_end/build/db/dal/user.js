"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = exports.create = void 0;
const sequelize_1 = require("sequelize");
const models_1 = require("../models");
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.User.create(payload);
    return user;
});
exports.create = create;
// export const update = async (id: number, payload: Partial<IngredientInput>): Promise<IngredientOuput> => {
//     const ingredient = await Ingredient.findByPk(id)
//     if (!ingredient) {
//         // @todo throw custom error
//         throw new Error('not found')
//     }
//     const updatedIngredient = await (ingredient as Ingredient).update(payload)
//     return updatedIngredient
// }
// export const getById = async (id: number): Promise<IngredientOuput> => {
//     const ingredient = await Ingredient.findByPk(id)
//     if (!ingredient) {
//         // @todo throw custom error
//         throw new Error('not found')
//     }
//     return ingredient
// }
// export const deleteById = async (id: number): Promise<boolean> => {
//     const deletedIngredientCount = await Ingredient.destroy({
//         where: { id }
//     })
//     return !!deletedIngredientCount
// }
const getAll = (filters) => __awaiter(void 0, void 0, void 0, function* () {
    return models_1.User.findAll(Object.assign({ where: Object.assign({}, ((filters === null || filters === void 0 ? void 0 : filters.isDeleted) && { deletedAt: { [sequelize_1.Op.not]: null } })) }, (((filters === null || filters === void 0 ? void 0 : filters.isDeleted) || (filters === null || filters === void 0 ? void 0 : filters.includeDeleted)) && { paranoid: true })));
});
exports.getAll = getAll;
