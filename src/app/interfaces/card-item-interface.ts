import {HostInterface} from "./host-interface";
import {ParticipiantAnswerInterface} from "./participiant-answer-interface";

export interface CardItemInterface{
  answerAmount:number,
  answers:string[],
  endTime:number,
  host:HostInterface,
  parcipiantAnswers:[ParticipiantAnswerInterface],
  id:number,
  question:string,
  startTime:number,
  room:{eventAmount:number}
  thumImage:string
}
