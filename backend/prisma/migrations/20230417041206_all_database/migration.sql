-- CreateTable
CREATE TABLE "assessments" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "indicatorId" INTEGER NOT NULL,
    "scoreId" INTEGER NOT NULL,

    CONSTRAINT "assessments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "levels" (
    "id" SERIAL NOT NULL,
    "assessmentId" INTEGER NOT NULL,
    "initial" INTEGER NOT NULL,
    "repeatable" INTEGER NOT NULL,
    "defined" INTEGER NOT NULL,
    "managed" INTEGER NOT NULL,
    "optimized" INTEGER NOT NULL,

    CONSTRAINT "levels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "indicators" (
    "id" SERIAL NOT NULL,
    "optionsId" INTEGER NOT NULL,
    "Indicator" TEXT NOT NULL,

    CONSTRAINT "indicators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "options" (
    "id" SERIAL NOT NULL,
    "level" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "options_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scores" (
    "id" SERIAL NOT NULL,
    "recommendationId" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "average_score" INTEGER NOT NULL,
    "maturity_level" TEXT NOT NULL,

    CONSTRAINT "scores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recommendations" (
    "id" SERIAL NOT NULL,
    "dimension" TEXT NOT NULL,
    "maturity_level" TEXT NOT NULL,
    "recommendation" TEXT NOT NULL,

    CONSTRAINT "recommendations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "assessments" ADD CONSTRAINT "assessments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assessments" ADD CONSTRAINT "assessments_indicatorId_fkey" FOREIGN KEY ("indicatorId") REFERENCES "indicators"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assessments" ADD CONSTRAINT "assessments_scoreId_fkey" FOREIGN KEY ("scoreId") REFERENCES "scores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "levels" ADD CONSTRAINT "levels_assessmentId_fkey" FOREIGN KEY ("assessmentId") REFERENCES "assessments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "indicators" ADD CONSTRAINT "indicators_optionsId_fkey" FOREIGN KEY ("optionsId") REFERENCES "options"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scores" ADD CONSTRAINT "scores_recommendationId_fkey" FOREIGN KEY ("recommendationId") REFERENCES "recommendations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
