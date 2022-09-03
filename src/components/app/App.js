import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {MainPage, ComicsPage, Page404, SingleComicPage} from '../pages';
import AppHeader from "../appHeader/AppHeader";

const App = () => {
    
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/comics" element={<ComicsPage/>}/>
                        <Route path="/comics/:comicId" element={<SingleComicPage/>}/>
                        <Route path="*" element={<Page404/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App;

// import {useReducer} from 'react';

// function init(initialCount) {
//     return {count: initialCount};
//   }
  
//   function reducer(state, action) {
//     switch (action.type) {
//       case 'increment':
//         return {count: state.count + 1};
//       case 'decrement':
//         return {count: state.count - 1};
//       case 'reset':
//         return init(action.payload);
//       default:
//         throw new Error();
//     }
//   }
  
//   function Counter({initialCount}) {
//     const [state, dispatch] = useReducer(reducer, initialCount=3, init);
//     return (
//       <>
//         Count: {state.count}
//         <button
//           onClick={() => dispatch({type: 'reset', payload: initialCount})}>
//           Reset
//         </button>
//         <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//         <button onClick={() => dispatch({type: 'increment'})}>+</button>
//       </>
//     );
//   }
  
//   const App = () => {
    
//         return (
//             <Counter/>
//         )
//      }

// export default App;