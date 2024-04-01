const TabButtons = ({ children,onSelect }) => {
console.log('TAB BUTTON COMPONENT EXECUTING');
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