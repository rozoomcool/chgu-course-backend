-- DropForeignKey
ALTER TABLE "TestStage" DROP CONSTRAINT "TestStage_answerId_fkey";

-- AlterTable
ALTER TABLE "TestStage" ALTER COLUMN "answerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "TestStage" ADD CONSTRAINT "TestStage_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "Option"("id") ON DELETE SET NULL ON UPDATE CASCADE;
