import { Answer } from "@prisma/client";
import prisma from "../database.js";

export type CreateAnswerData = Omit<Answer, "id">;

async function create(answerData: CreateAnswerData) {
  await prisma.answer.create({
    data: {
        ...answerData,
    },
  });
}

async function getByQuestionId(questionId: number) {
  const answers = await prisma.answer.findMany({
    where: {
      questionId,
    },
  });
  return answers;
}

const answerService = { create, getByQuestionId };
export default answerService;
