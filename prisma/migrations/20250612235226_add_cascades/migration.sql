-- DropForeignKey
ALTER TABLE "CourseAdmision" DROP CONSTRAINT "CourseAdmision_courseId_fkey";

-- DropForeignKey
ALTER TABLE "CourseAdmision" DROP CONSTRAINT "CourseAdmision_userId_fkey";

-- DropForeignKey
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_courseId_fkey";

-- DropForeignKey
ALTER TABLE "LessonAttachment" DROP CONSTRAINT "LessonAttachment_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "Option" DROP CONSTRAINT "Option_testStageId_fkey";

-- DropForeignKey
ALTER TABLE "Test" DROP CONSTRAINT "Test_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "TestStage" DROP CONSTRAINT "TestStage_testId_fkey";

-- AddForeignKey
ALTER TABLE "CourseAdmision" ADD CONSTRAINT "CourseAdmision_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseAdmision" ADD CONSTRAINT "CourseAdmision_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LessonAttachment" ADD CONSTRAINT "LessonAttachment_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Test" ADD CONSTRAINT "Test_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestStage" ADD CONSTRAINT "TestStage_testId_fkey" FOREIGN KEY ("testId") REFERENCES "Test"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Option" ADD CONSTRAINT "Option_testStageId_fkey" FOREIGN KEY ("testStageId") REFERENCES "TestStage"("id") ON DELETE CASCADE ON UPDATE CASCADE;
