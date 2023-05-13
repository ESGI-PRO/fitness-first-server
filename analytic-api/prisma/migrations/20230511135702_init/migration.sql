-- CreateTable
CREATE TABLE "Analytic" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "appId" TEXT NOT NULL,
    "evenType" TEXT NOT NULL,
    "data" JSONB,

    CONSTRAINT "Analytic_pkey" PRIMARY KEY ("id")
);
