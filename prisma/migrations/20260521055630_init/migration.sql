/*
  Warnings:

  - A unique constraint covering the columns `[roll_num]` on the table `Students` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `roll_num` to the `Students` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Students" ADD COLUMN     "roll_num" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Students_roll_num_key" ON "Students"("roll_num");
