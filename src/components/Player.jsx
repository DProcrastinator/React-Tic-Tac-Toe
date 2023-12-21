import { useState } from "react";

export default function Player({ intialName, symbol }) {
  const [isEditing, setEditing] = useState(false);
  const[playerName , setPlayeName] = useState(intialName)
  function handleEditClick() {
    setEditing((editing) => !editing);
  }
  
  function handleChange(event){
    setPlayeName(event.target.value)
  }

  let editablePlayerName= <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = <input type="text" required Value={playerName} onChange={handleChange}></input>;
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "save" : "Edit"}</button>
    </li>
  );
}
