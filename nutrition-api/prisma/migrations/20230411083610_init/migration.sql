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
    "CategorieId" INTEGER NOT NULL,
    "grammes" INTEGER DEFAULT 100,
    "fat_total_g" INTEGER NOT NULL,
    "fat_saturated_g" INTEGER NOT NULL,
    "protein_g" INTEGER NOT NULL,
    "sodium_mg" INTEGER NOT NULL,
    "potassium_mg" INTEGER NOT NULL,
    "cholesterol_mg" INTEGER NOT NULL,
    "carbohydrates_total_g" INTEGER NOT NULL,
    "fiber_g" INTEGER NOT NULL,
    "sugar_g" INTEGER NOT NULL,

    CONSTRAINT "Ingredients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Categories_name_key" ON "Categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Ingredients_name_key" ON "Ingredients"("name");

-- AddForeignKey
ALTER TABLE "Ingredients" ADD CONSTRAINT "Ingredients_CategorieId_fkey" FOREIGN KEY ("CategorieId") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
