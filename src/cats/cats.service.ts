import { Injectable, UnauthorizedException } from "@nestjs/common";
import { CatsRequestDto } from "./dto/cats.request.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Cat } from "./cats.schema";
import * as bcrypt from "bcrypt";
import { CatsRepository } from "./cats.repository";

@Injectable()
export class CatsService {
  constructor(private readonly catsRepository: CatsRepository) {}
  async signUp(body: CatsRequestDto) {
    const { email, name, password } = body;
    const isCatExist = await this.catsRepository.existByEmail(email);

    if (isCatExist) throw new UnauthorizedException("이미 등록된 이메일입니다");

    const hashPassword = await bcrypt.hash(password, 10);
    const cat = await this.catsRepository.createCat({
      email,
      name,
      password: hashPassword,
    });

    return cat.readOnlyData;
  }
}
