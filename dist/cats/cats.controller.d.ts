/// <reference types="multer" />
import { CatsService } from "./cats.service";
import { CatsRequestDto } from "./dto/cats.request.dto";
import { AuthService } from "../auth/auth.service";
import { LoginRequestDto } from "../auth/dto/login.request.dto";
export declare class CatsController {
    private readonly catsService;
    private readonly authService;
    constructor(catsService: CatsService, authService: AuthService);
    getCurrentCat(cat: any): any;
    signUp(body: CatsRequestDto): Promise<{
        _id: string;
        email: string;
        name: string;
    }>;
    login(data: LoginRequestDto): Promise<{
        token: string;
    }>;
    logOut(): string;
    uploadCatImg(files: Array<Express.Multer.File>): string;
}
