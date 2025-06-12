-- CreateEnum
CREATE TYPE "CourseAdmissionState" AS ENUM ('ACCEPTED', 'REJECTED');

-- CreateTable
CREATE TABLE "CourseAdmision" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "CourseAdmision_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CourseAdmision" ADD CONSTRAINT "CourseAdmision_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseAdmision" ADD CONSTRAINT "CourseAdmision_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
