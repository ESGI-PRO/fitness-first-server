-- CreateTable
CREATE TABLE "Categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredients" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "calories" DOUBLE PRECISION NOT NULL,
    "CategorieId" INTEGER,
    "grammes" DOUBLE PRECISION DEFAULT 100,
    "fat_total_g" DOUBLE PRECISION NOT NULL,
    "fat_saturated_g" DOUBLE PRECISION NOT NULL,
    "protein_g" DOUBLE PRECISION NOT NULL,
    "sodium_mg" DOUBLE PRECISION NOT NULL,
    "potassium_mg" DOUBLE PRECISION NOT NULL,
    "cholesterol_mg" DOUBLE PRECISION NOT NULL,
    "carbohydrates_total_g" DOUBLE PRECISION NOT NULL,
    "fiber_g" DOUBLE PRECISION NOT NULL,
    "sugar_g" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Ingredients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recettes" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "UserId" TEXT NOT NULL,
    "instructions" JSONB[],

    CONSTRAINT "Recettes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Categories_name_key" ON "Categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Ingredients_name_key" ON "Ingredients"("name");

-- AddForeignKey
ALTER TABLE "Ingredients" ADD CONSTRAINT "Ingredients_CategorieId_fkey" FOREIGN KEY ("CategorieId") REFERENCES "Categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
