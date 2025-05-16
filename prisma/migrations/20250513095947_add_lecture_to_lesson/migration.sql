/*
  Warnings:

  - Added the required column `lecture` to the `LectureLessonStage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LectureLessonStage" ADD COLUMN     "lecture" TEXT NOT NULL;
