import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
// strategy 자동으로 만들어줌
export class JwtAuthGuard extends AuthGuard("jwt") {}
