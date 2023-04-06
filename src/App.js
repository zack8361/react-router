import { Route, Routes } from 'react-router-dom';
import './App.css';

import Board from './components/Board';
import Profile from './components/Profile';
import Header from './components/Header';
import NotFound from './components/NotFound';
import TestRedux from './components/TestRedux';
import ListContainer from './components/ListContainer';
import Start from './pages/Start';
import styled from 'styled-components';
import GlobalStyle from './pages/GlobalStyle';
import { useSelector } from 'react-redux';
import Mbti from './pages/Mbti';
import Show from './pages/Show';

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;
function App() {
  const page = useSelector((state) => state.mbti.page);
  const survey = useSelector((state) => state.mbti.survey);
  return (
    <>
      {/* <TestRedux /> */}
      {/* <ListContainer /> */}
      <GlobalStyle />
      <Main>
        {page === 0 ? <Start /> : page <= survey.length ? <Mbti /> : <Show />}
      </Main>
    </>
  );
}

export default App;
