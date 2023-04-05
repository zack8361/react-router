import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import SkyblueButton from '../pages/SkyblueButton';
import { next } from '../store/modules/mbti';
import Progress from './Progress';
const SurveyQuestion = styled.p`
  font-size: 1.5em;
  color: #777;
`;

const Vs = styled.p`
  font-size: 2em;
  padding: 1em;
`;
export default function Mbti() {
  const dispatch = useDispatch();
  const survey = useSelector((state) => state.mbti.survey);
  const page = useSelector((state) => state.mbti.page);
  return (
    <div>
      <SurveyQuestion>{survey[page - 1].question}</SurveyQuestion>
      <ul>
        {survey[page - 1].answer.map((el, index) => {
          return (
            <li key={index}>
              <SkyblueButton
                text={el.text}
                clickEvent={() => dispatch(next())}
              />
              {index == 0 && <Vs>VS</Vs>}
            </li>
          );
        })}
      </ul>
      <Progress page={page} maxPage={survey.length} />
    </div>
  );
}
