/*
  Warnings:

  - You are about to drop the column `answerId` on the `TestStage` table. All the data in the column will be lost.
  - Added the required column `isCorret` to the `Option` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TestStage" DROP CONSTRAINT "TestStage_answerId_fkey";

-- DropIndex
DROP INDEX "TestStage_answerId_key";

-- AlterTable
ALTER TABLE "Option" ADD COLUMN     "isCorret" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "TestStage" DROP COLUMN "answerId";
