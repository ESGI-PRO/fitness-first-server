-- CreateTable
CREATE TABLE "Recettes" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "UserId" INTEGER NOT NULL,
    "instructions" JSONB[],

    CONSTRAINT "Recettes_pkey" PRIMARY KEY ("id")
);
