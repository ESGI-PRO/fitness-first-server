/*
  Warnings:

  - You are about to alter the column `paymentLink` on the `Plan` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "Plan" ALTER COLUMN "price" SET DEFAULT 0,
ALTER COLUMN "paymentLink" SET DATA TYPE VARCHAR(255);
