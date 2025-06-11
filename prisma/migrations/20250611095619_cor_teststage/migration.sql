/*
  Warnings:

  - You are about to drop the column `isCorret` on the `Option` table. All the data in the column will be lost.
  - Added the required column `isCorrect` to the `Option` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Option" DROP COLUMN "isCorret",
ADD COLUMN     "isCorrect" BOOLEAN NOT NULL;
