/*
  Warnings:

  - Added the required column `students_id` to the `Sports` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sports" ADD COLUMN     "students_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Sports" ADD CONSTRAINT "Sports_students_id_fkey" FOREIGN KEY ("students_id") REFERENCES "Students"("student_id") ON DELETE RESTRICT ON UPDATE CASCADE;
