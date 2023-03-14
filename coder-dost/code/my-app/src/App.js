// import AddVideo from './components/AddVideo';
// import Counter from './components/Counter';
// import Parent from './components/Parent';
// import PlayButton from './components/PlayButton';
// import Video from './components/Video';

import CRUD from './todo-list-2/CRUD';

// import TodoApp from './todo-list-2/TodoApp';
// import Todo from './todo-list/Todo';

// import BasePage from './todo-list/BasePage';
// import Todo from './todo-list/Todo';

// const App = () => {
//   return (
//     <>
//       <Parent />
//       <AddVideo />
//       <Counter />
//       <div>Hello</div>
//       <Video title="React Js" time="2" views="1000" channel="code" />
//       <Video title="Node Js" />

//       <PlayButton
//         message="play"
//         onPlay={() => console.log('Playyyy')}
//         onPause={() => console.log('Pause')}
//       >
//         Play
//       </PlayButton>
//       {/* <PlayButton message="pause" onClick={() => alert('Playyy')}>
//         Pause
//       </PlayButton> */}
//     </>
//   );
// };

// export default App;

// import './App.css';

// const App = () => {
//   const data = [
//     { id: 1, name: 'Apple' },
//     { id: '2', name: 'Chocos' },
//   ];
//   return (
//     <>
//       <div className="app">
//         <div className="container">
//           <h1>Todo List App</h1>
//           <form>
//             <input type="text" />
//             <button>Add</button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

const App = () => {
  return (
    <>
      <CRUD />
    </>
  );
};

export default App;
