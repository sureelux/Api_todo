import TodoApp from "./components/TodoApp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {

  return (
    <>
      <div className="flex justify-between px-10 max-sm:px-5 py-2 ">
        <h1 className="text-5xl max-sm:text-xl font-bold text-slate-950 place-items-center font-sans" >Homework TODO</h1>
      </div>
      <div className="container mx-auto max-w-[700px] max-sm:text-[12px] max-sm:p-2 p-5 text-brown-text">
        <TodoApp />
      </div>
    </>
  )
}

export default App