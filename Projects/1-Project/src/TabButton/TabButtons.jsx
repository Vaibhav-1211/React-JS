const TabButtons = ({ children, onSelect, isSelected }) => {
  console.log('TAB BUTTON COMPONENT EXECUTING');
  return (
    <div>
      <li>
        {/* function to the onClick prop */}
        <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
      </li>
    </div>
  )
}


export default TabButtons 