/*
  Warnings:

  - Added the required column `title` to the `Chapter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chapter" ADD COLUMN     "description" TEXT,
ADD COLUMN     "title" TEXT NOT NULL;
