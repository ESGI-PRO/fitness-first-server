/*
  Warnings:

  - You are about to drop the `Exercices` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Exercices";

-- CreateTable
CREATE TABLE "Training" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "repetition" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "outils" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "temps" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Training_pkey" PRIMARY KEY ("id")
);
