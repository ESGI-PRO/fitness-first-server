import { SubcriptionsService } from './subcriptions.service';
import { CreateSubcriptionDto } from './dto/create-subcription.dto';
import { UpdateSubcriptionDto } from './dto/update-subcription.dto';
export declare class SubcriptionsController {
    private readonly subcriptionsService;
    constructor(subcriptionsService: SubcriptionsService);
    create(createSubcriptionDto: CreateSubcriptionDto): any;
    findAll(): any;
    findByUserId(id: string): any;
    findOne(id: string): any;
    update(updateSubcriptionDto: UpdateSubcriptionDto): any;
    remove(id: string): any;
}
