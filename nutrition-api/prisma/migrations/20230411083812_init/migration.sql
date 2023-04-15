-- DropForeignKey
ALTER TABLE "Ingredients" DROP CONSTRAINT "Ingredients_CategorieId_fkey";

-- AlterTable
ALTER TABLE "Ingredients" ALTER COLUMN "CategorieId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Ingredients" ADD CONSTRAINT "Ingredients_CategorieId_fkey" FOREIGN KEY ("CategorieId") REFERENCES "Categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
