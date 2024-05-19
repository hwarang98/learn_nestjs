import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UploadedFile,
  UploadedFiles,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { CatsService } from "./cats.service";
import { HttpExceptionFilter } from "../common/exceptions/http-exception.filter";
import { SuccessInterceptor } from "../common/interceptors/success.interceptor";
import { CatsRequestDto } from "./dto/cats.request.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { ReadOnlyCatDto } from "./dto/cats.dto";
import { AuthService } from "../auth/auth.service";
import { LoginRequestDto } from "../auth/dto/login.request.dto";
import { JwtAuthGuard } from "../auth/jwt/jwt.guard";
import { currentUser } from "../common/decorators/user.decorators";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("cats")
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(
    private readonly catsService: CatsService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: "고양이 리스트 조회" })
  @UseGuards(JwtAuthGuard)
  @Get()
  getCurrentCat(@currentUser() cat) {
    return cat.readOnlyData;
  }
  @ApiResponse({
    status: 500,
    description: "server error...",
  })
  @ApiResponse({
    status: 200,
    description: "성공",
    type: ReadOnlyCatDto,
  })
  @ApiOperation({ summary: "회원가입" })
  @Post()
  async signUp(@Body() body: CatsRequestDto) {
    return await this.catsService.signUp(body);
  }
  @ApiOperation({ summary: "로그인" })
  @Post("login")
  login(@Body() data: LoginRequestDto) {
    return this.authService.jwtLogin(data);
  }
  @ApiOperation({ summary: "로그아웃" })
  @Post("logout")
  logOut() {
    return "logout";
  }
  @ApiOperation({ summary: "이미지 업로드" })
  @Post("upload/cat")
  @UseInterceptors(FileInterceptor("image"))
  uploadCatImg(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
    return "uploadImg";
  }
}
