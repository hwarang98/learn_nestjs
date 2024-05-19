import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Cat } from "./cats.schema";
import { Model } from "mongoose";
import { CatsRequestDto } from "./dto/cats.request.dto";

@Injectable()
export class CatsRepository {
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}
  async existByEmail(email: string): Promise<object> {
    return await this.catModel.exists({ email });
  }

  async createCat(cat: CatsRequestDto): Promise<Cat> {
    return await this.catModel.create(cat);
  }

  async findCatByEmail(email: string): Promise<Cat | null> {
    return await this.catModel.findOne({ email });
  }

  async findCatByWithoutPassword(catId: string): Promise<Cat | null> {
    return await this.catModel.findById(catId).select("-password");
  }
}
