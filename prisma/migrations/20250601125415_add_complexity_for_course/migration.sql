-- CreateEnum
CREATE TYPE "Complexity" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "complexity" "Complexity" NOT NULL DEFAULT 'EASY';
