/*
  Warnings:

  - A unique constraint covering the columns `[testId]` on the table `TestLessonStage` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `testId` to the `TestLessonStage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TestLessonStage" ADD COLUMN     "testId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TestLessonStage_testId_key" ON "TestLessonStage"("testId");

-- AddForeignKey
ALTER TABLE "TestLessonStage" ADD CONSTRAINT "TestLessonStage_testId_fkey" FOREIGN KEY ("testId") REFERENCES "Test"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
