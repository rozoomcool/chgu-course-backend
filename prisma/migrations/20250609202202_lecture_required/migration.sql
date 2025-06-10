/*
  Warnings:

  - Made the column `lecture` on table `Lesson` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Lesson" ALTER COLUMN "lecture" SET NOT NULL;
