import { Title } from './Component/title';
import './App.css';
import { Form } from './Component/form';
import { List } from './Component/list';
import { useState } from 'react'

function App() {

  let [list, setList] = useState([])

  return (
    <div className="App">
      <Title />
      <div className="container my-5 bg-info fw-bold">
        <p className="fw-bold">I often read books written in English and try to expand my knowledge of the book's content as well as understand the meanings of new words I encounter and how to improve my English. When I first started, I used to write down words on a piece of paper, but I always lost that paper somewhere. How useless, I thought. So next I used the note-taking function on my smartphone, but it was unorganized and difficult to use. So I created this site, which has the ability to write down unfamiliar words in a more organized environment.</p>
      </div>
      <div className="container bg-light mt-5">
        <div className="alert alert-primary pb-0">
          <Form list={list} setList={setList} />
          <List list={list} setList={setList} />
        </div>
      </div>
    </div>
  );
}

export default App;
