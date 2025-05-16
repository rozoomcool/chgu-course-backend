/*
  Warnings:

  - You are about to drop the column `testId` on the `TestLessonStage` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[testLessonStageId]` on the table `Test` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "TestLessonStage" DROP CONSTRAINT "TestLessonStage_testId_fkey";

-- DropIndex
DROP INDEX "TestLessonStage_testId_key";

-- AlterTable
ALTER TABLE "Test" ADD COLUMN     "testLessonStageId" INTEGER;

-- AlterTable
ALTER TABLE "TestLessonStage" DROP COLUMN "testId";

-- CreateIndex
CREATE UNIQUE INDEX "Test_testLessonStageId_key" ON "Test"("testLessonStageId");

-- AddForeignKey
ALTER TABLE "Test" ADD CONSTRAINT "Test_testLessonStageId_fkey" FOREIGN KEY ("testLessonStageId") REFERENCES "TestLessonStage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
