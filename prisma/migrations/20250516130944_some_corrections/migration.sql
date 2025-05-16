/*
  Warnings:

  - You are about to drop the column `testLessonStageId` on the `Test` table. All the data in the column will be lost.
  - You are about to drop the `LectureLessonStage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Question` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TestLessonStage` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[lessonId]` on the table `Test` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `question` to the `TestStage` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LessonAttachmentType" AS ENUM ('VIDEO', 'IMAGE', 'ARCHIVE', 'LINK');

-- DropForeignKey
ALTER TABLE "LectureLessonStage" DROP CONSTRAINT "LectureLessonStage_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_testStageId_fkey";

-- DropForeignKey
ALTER TABLE "Test" DROP CONSTRAINT "Test_testLessonStageId_fkey";

-- DropForeignKey
ALTER TABLE "TestLessonStage" DROP CONSTRAINT "TestLessonStage_lessonId_fkey";

-- DropIndex
DROP INDEX "Test_testLessonStageId_key";

-- AlterTable
ALTER TABLE "Lesson" ADD COLUMN     "lecture" TEXT;

-- AlterTable
ALTER TABLE "Test" DROP COLUMN "testLessonStageId",
ADD COLUMN     "lessonId" INTEGER;

-- AlterTable
ALTER TABLE "TestStage" ADD COLUMN     "question" TEXT NOT NULL;

-- DropTable
DROP TABLE "LectureLessonStage";

-- DropTable
DROP TABLE "Question";

-- DropTable
DROP TABLE "TestLessonStage";

-- CreateTable
CREATE TABLE "LessonAttachment" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "attachmentType" "LessonAttachmentType" NOT NULL,
    "lessonId" INTEGER NOT NULL,

    CONSTRAINT "LessonAttachment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LessonAttachment_lessonId_key" ON "LessonAttachment"("lessonId");

-- CreateIndex
CREATE UNIQUE INDEX "Test_lessonId_key" ON "Test"("lessonId");

-- AddForeignKey
ALTER TABLE "LessonAttachment" ADD CONSTRAINT "LessonAttachment_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Test" ADD CONSTRAINT "Test_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE SET NULL ON UPDATE CASCADE;
