/*
  Warnings:

  - The primary key for the `CourseAdmision` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `CourseAdmision` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CourseAdmision" DROP CONSTRAINT "CourseAdmision_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "CourseAdmision_pkey" PRIMARY KEY ("userId", "courseId");
