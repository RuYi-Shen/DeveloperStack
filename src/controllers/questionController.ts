import { Request, Response } from "express";
import answerService from "../services/answerService.js";
import questionService  from "../services/questionService.js";

export async function create(req: Request, res: Response) {
  const { question } = req.body;
  await questionService.create(question);
  res.sendStatus(201);
}

export async function answer(req: Request, res: Response) {
  const questionId = +req.params.id;
  const { answer } = req.body;
  await answerService.create({ questionId, answer });
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.getAll();
  res.json(questions);
}

export async function getById(req: Request, res: Response) {
  const id = +req.params.id;
  const question = await questionService.getById(id);
  const answers = await answerService.getByQuestionId(id);
  res.json({ question , answers });
}
