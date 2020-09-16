import React from 'react';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './App.css';
// import Table from './components/songComponent';
// import withTableLoading from './components/withTableLoading';
import LandingPage from './components/LandingPage/landingPage';

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;

// function App() {
//   const TableLoading = withTableLoading(Table);
//   const [appState, setAppState] = useState({
//     loading: false,
//     songs: null,
//   });

//   useEffect(() => {
//     setAppState({ loading: true });
//     const apiUrl = `/songs`;
//     axios.get(apiUrl).then((songs) => {
//       const allSongs = songs.data;
//       setAppState({ loading: false, songs: allSongs });
//     });
//   }, [setAppState]);
//   return (
//     <div className='App'>
//       <div className='container'>
//         <h1>Songs</h1>
//       </div>
//       <div className='song-container'>
//         <TableLoading isLoading={appState.loading} songs={appState.songs} />
//       </div>
//     </div>
//   );
// }

// export default App;

//
//SECOND ATTEMPT BELOW (class component)
//
// class App extends React.Component {
//   state = { songs: [] }
  
//   componentDidMount() {
//     fetch('/songs')
//       .then(res => {
//         console.log(res);
//         res.json()
//       })
//       .then(songs => {
//         console.log(songs);
//         this.setState({ songs });
//       })  
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Songs</h1>
//         {this.state.songs.map(song =>
//           <div>
//             {song.title}
//           </div>
//         )}
//       </div>
//     );
//   }

// }

// export default App;

//FIRST ATTEMPT BELOW
// export default class App extends React.Component{
//   state = {
//     songs: [],
//   };
//   componentDidMount() {
//     axios.get("./data/songs.json").then((response) => {
//       this.setState({songs: response.data});
//     });
//   }
//   render() {
//   const { songs } = this.state;
//   return (
//     <div>
//       <h1>APP.JS RENDER SUCCESSFUL</h1>
//       {/* <ul className="songs">
//           {songs.map((song) => (
//             <li className="song">
//               <p>
//                 <strong>Title:</strong> {song.title}
//               </p>
//               <p>
//                 <strong>Artist:</strong> {song.artist}
//               </p>
//               <p>
//                 <strong>Year:</strong> {song.year}
//               </p> 
//             </li>
//           ))}
//         </ul> */}
//     </div>
//   );
//   }
// }

