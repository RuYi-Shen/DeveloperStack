/*
  Warnings:

  - You are about to drop the column `description` on the `answers` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `questions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[question]` on the table `questions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `answer` to the `answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question` to the `questions` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "questions_description_key";

-- AlterTable
ALTER TABLE "answers" DROP COLUMN "description",
ADD COLUMN     "answer" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "questions" DROP COLUMN "description",
ADD COLUMN     "question" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "questions_question_key" ON "questions"("question");
