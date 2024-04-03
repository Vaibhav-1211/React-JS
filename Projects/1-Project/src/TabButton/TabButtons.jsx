const TabButtons = ({ children, onSelect, isSelected }) => {
  console.log('TAB BUTTON COMPONENT EXECUTING');
  return (
    <div>
      <li>
        <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
      </li>
    </div>
  )
}


export default TabButtons 