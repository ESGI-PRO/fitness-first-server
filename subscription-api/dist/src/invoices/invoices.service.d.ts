import { PrismaService } from 'src/prisma/prisma.service';
export declare class InvoicesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createData: any): any;
    findAll(): any;
    findByUserId(id: string): any;
    findOne(id: string): any;
    update(id: string, updateData: any): any;
    remove(id: string): any;
}
