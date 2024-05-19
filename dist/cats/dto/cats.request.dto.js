"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const cats_schema_1 = require("../cats.schema");
class CatsRequestDto extends (0, swagger_1.PickType)(cats_schema_1.Cat, [
    "email",
    "name",
    "password",
]) {
}
exports.CatsRequestDto = CatsRequestDto;
//# sourceMappingURL=cats.request.dto.js.map