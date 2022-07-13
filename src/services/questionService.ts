import { Question } from "@prisma/client";
import prisma from "../database.js";

export type CreateQuestionData = Omit<Question, "id">;

async function create(question: CreateQuestionData) {
  await prisma.question.create({
    data: question,
  });
}

async function getById(id: number) {
  const question = await prisma.question.findMany({
    where: {
      id,
    },
  });
  return question[0];
}

async function getAll() {
  const questions = await prisma.question.findMany();
  return questions;
}

const questionService = { create, getById, getAll };
export default questionService;
