import { CatsRequestDto } from "./dto/cats.request.dto";
import { CatsRepository } from "./cats.repository";
export declare class CatsService {
    private readonly catsRepository;
    constructor(catsRepository: CatsRepository);
    signUp(body: CatsRequestDto): Promise<{
        _id: string;
        email: string;
        name: string;
    }>;
}
