import Board from "./components/board/Board";
import { Provider } from "react-redux";
import {store} from "./store/store";
import ScoreCard from "./components/scorecard/ScoreCard";
import Header from "./components/header/Header";

function App() {

  return (
    <>
    <Provider store={store}>
      <div className='h-screen flex flex-col bg-stone-50'>
        <header className="h-1/5 bg-stone-100">
          <Header/>
        </header>
        <main className="flex h-full">
          <section className="w-4/5 bg-stone-200">
            <Board/>
          </section>
          <section className="w-1/5 bg-stone-400">
            <ScoreCard players={[0 , 1]}/>
          </section>
        </main>
      </div>
    </Provider>
    </>
  )
}

export default App
