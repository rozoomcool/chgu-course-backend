/*
  Warnings:

  - You are about to drop the `Stage` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `courseId` on table `Chapter` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "TestStageType" AS ENUM ('MANUAL', 'OPTIONAL');

-- DropForeignKey
ALTER TABLE "Chapter" DROP CONSTRAINT "Chapter_courseId_fkey";

-- AlterTable
ALTER TABLE "Chapter" ALTER COLUMN "courseId" SET NOT NULL;

-- DropTable
DROP TABLE "Stage";

-- CreateTable
CREATE TABLE "LectureLessonStage" (
    "id" SERIAL NOT NULL,
    "lessonId" INTEGER NOT NULL,

    CONSTRAINT "LectureLessonStage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestLessonStage" (
    "id" SERIAL NOT NULL,
    "lessonId" INTEGER NOT NULL,

    CONSTRAINT "TestLessonStage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestStage" (
    "id" SERIAL NOT NULL,
    "testId" INTEGER NOT NULL,
    "type" "TestStageType" NOT NULL DEFAULT 'OPTIONAL',
    "answerId" INTEGER NOT NULL,

    CONSTRAINT "TestStage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "qeustion" TEXT NOT NULL,
    "testStageId" INTEGER NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Option" (
    "id" SERIAL NOT NULL,
    "option" TEXT NOT NULL,
    "testStageId" INTEGER NOT NULL,

    CONSTRAINT "Option_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TestStage_answerId_key" ON "TestStage"("answerId");

-- CreateIndex
CREATE UNIQUE INDEX "Question_testStageId_key" ON "Question"("testStageId");

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LectureLessonStage" ADD CONSTRAINT "LectureLessonStage_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestLessonStage" ADD CONSTRAINT "TestLessonStage_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestStage" ADD CONSTRAINT "TestStage_testId_fkey" FOREIGN KEY ("testId") REFERENCES "Test"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestStage" ADD CONSTRAINT "TestStage_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "Option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_testStageId_fkey" FOREIGN KEY ("testStageId") REFERENCES "TestStage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Option" ADD CONSTRAINT "Option_testStageId_fkey" FOREIGN KEY ("testStageId") REFERENCES "TestStage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
