import React from "react";
import Question from "../components/Question/Question";
import Prerequisite from "../components/Prerequisite/Prerequisite";
import CodeExplanation from "../components/CodeExplanation/CodeExplanation";
import InputOutput from "../components/InputOutput/InputOutput";
import IFrame from "../components/IFrame/IFrame";
import PythonQuestionData from "../Data/PythonQuestionData";
import {useParams} from "react-router-dom";
import Code from "../components/Code/Code";

function PythonQuestion(){
  const {id} = useParams();

  const question = PythonQuestionData.filter(q => id == q.id)[0];
  const ques = PythonQuestionData.filter(q => id == q.id)[0];

  return (
      <>
        <Question id={ques.id} question={ques.value} disableHover/>
        <Prerequisite foc arrayOfItems={question.PreReq} />
        <CodeExplanation text={question.Objective} />
        {/* <IFrame src={question.YouTubeLink} title={question.YouTubeLinkTitle} /> */}
        <InputOutput input={question.Input} output={question.Output} />
        <Code idx={question.id-1} />
        <div style={{height:"100px"}}></div>
      </>
  );
}

export default PythonQuestion;