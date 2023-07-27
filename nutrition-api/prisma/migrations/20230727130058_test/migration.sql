/*
  Warnings:

  - Changed the type of `UserId` on the `Recettes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Recettes" DROP COLUMN "UserId",
ADD COLUMN     "UserId" DOUBLE PRECISION NOT NULL;
