-- CreateTable
CREATE TABLE "Students"//students (
    "student_id" SERIAL NOT NULL,
    "student_name" TEXT NOT NULL,
    "grade" INTEGER NOT NULL,

    CONSTRAINT "Students_pkey" PRIMARY KEY ("student_id")
);
