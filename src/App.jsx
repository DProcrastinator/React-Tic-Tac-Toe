import Player from "./components/Player";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
        <Player intialName="Player 1" symbol="X"/>
        <Player intialName="Player 2" symbol="O"/>
        </ol>
        Game Board
      </div>
    </main>
  );
}

export default App;