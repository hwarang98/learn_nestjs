import {
  Controller,
  Get,
  Param,
  Req,
  Body,
  Post,
  UseInterceptors,
  UseFilters,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { Request } from "express";
import { CatsRequestDto } from "./cats/dto/cats.request.dto";
import { SuccessInterceptor } from "./common/interceptors/success.interceptor";
import { HttpExceptionFilter } from "./common/exceptions/http-exception.filter";

@Controller()
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class AppController {
  constructor(private readonly appService: AppService) {}
}
