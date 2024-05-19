import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsString, IsEmail, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { HydratedDocument, SchemaOptions } from "mongoose";

export type CatDocument = HydratedDocument<Cat>;

const options: SchemaOptions = {
  timestamps: true,
  versionKey: false,
};

@Schema(options)
export class Cat {
  @ApiProperty({
    example: "test@gmail.com",
    description: "email",
    required: true,
  })
  @Prop({ required: true, unique: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: "나비",
    description: "name",
    required: true,
  })
  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 123123,
    description: "password",
    required: true,
  })
  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  password: string;

  @Prop()
  @IsString()
  imgUrl: string;

  readonly readOnlyData: { _id: string; email: string; name: string };
}

export const CatSchema = SchemaFactory.createForClass(Cat);

// _id 필드를 불러와서 'id'로 변환합니다.
CatSchema.virtual("readOnlyData").get(function () {
  return {
    _id: this._id.toString(), // 여기서 _id를 문자열로 변환하여 'id' 필드에 할당합니다.
    name: this.name,
    email: this.email,
  };
});
