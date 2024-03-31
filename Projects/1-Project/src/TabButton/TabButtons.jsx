const TabButtons = ({ children,onSelect }) => {

  return (
    <div>
      <li>
      {/* function to the onClick prop */}
        <button onClick={onSelect}>{children}</button>
      </li>
    </div>
  )
}


export default TabButtons 