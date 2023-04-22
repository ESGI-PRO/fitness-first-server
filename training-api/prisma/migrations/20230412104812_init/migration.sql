-- CreateTable
CREATE TABLE "TypeExercices" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TypeExercices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercices" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "equipment" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "TypeExercicesId" INTEGER,

    CONSTRAINT "Exercices_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Exercices" ADD CONSTRAINT "Exercices_TypeExercicesId_fkey" FOREIGN KEY ("TypeExercicesId") REFERENCES "TypeExercices"("id") ON DELETE SET NULL ON UPDATE CASCADE;
