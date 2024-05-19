import { Cat } from "../cats.schema";
import { ApiProperty, PickType } from "@nestjs/swagger";

export class ReadOnlyCatDto extends PickType(Cat, ["email", "name"] as const) {
  @ApiProperty({
    example: "663122242ed40ddb054f73bc",
    description: "_id",
  })
  _id: string;
}
