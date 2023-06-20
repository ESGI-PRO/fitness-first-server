-- CreateTable
CREATE TABLE "TypeExercices" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TypeExercices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercices" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "equipment" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "TypeExercicesId" INTEGER,

    CONSTRAINT "Exercices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Training" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" INTEGER,
    "userId" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "listExercices" TEXT[],
    "durationStart" TIMESTAMP(3) NOT NULL,
    "durationEnd" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Training_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExercicesOnTraining" (
    "id" SERIAL NOT NULL,
    "exerciceId" INTEGER NOT NULL,
    "trainingId" INTEGER NOT NULL,
    "series" INTEGER NOT NULL,
    "repetition" INTEGER NOT NULL,

    CONSTRAINT "ExercicesOnTraining_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Exercices" ADD CONSTRAINT "Exercices_TypeExercicesId_fkey" FOREIGN KEY ("TypeExercicesId") REFERENCES "TypeExercices"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Training" ADD CONSTRAINT "Training_category_fkey" FOREIGN KEY ("category") REFERENCES "TypeExercices"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExercicesOnTraining" ADD CONSTRAINT "ExercicesOnTraining_exerciceId_fkey" FOREIGN KEY ("exerciceId") REFERENCES "Exercices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExercicesOnTraining" ADD CONSTRAINT "ExercicesOnTraining_trainingId_fkey" FOREIGN KEY ("trainingId") REFERENCES "Training"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
