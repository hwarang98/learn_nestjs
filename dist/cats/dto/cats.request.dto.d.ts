import { Cat } from "../cats.schema";
declare const CatsRequestDto_base: import("@nestjs/common").Type<Pick<Cat, "email" | "name" | "password">>;
export declare class CatsRequestDto extends CatsRequestDto_base {
}
export {};
