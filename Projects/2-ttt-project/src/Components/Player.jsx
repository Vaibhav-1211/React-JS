import { useState } from "react";


export default function Player({ initialName, symbol, isActive, onChangeName }) {

  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing)

    if(isEditing){
      onChangeName(symbol, playerName)
    }//we click the button to stop editing

    //it is good habit to use function form here for updating the state insted of below way to update the state
    // setIsEditing(!isEditing); // => Schdule a state update true
  }

  function handleChange(event) {
    //  console.log(event);
    setPlayerName(event.target.value);

  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = 'Edit';


  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
    // btnCaption = "Save";
  }


  return (
    <li className={isActive ? 'active' : undefined} >
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      {/* <button onClick={handleEditClick}>{btnCaption}</button> */}
    </li>
  )
}