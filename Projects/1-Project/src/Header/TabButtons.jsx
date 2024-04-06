const TabButtons = ({ children, isSelected, ...props }) => {
  console.log('TAB BUTTON COMPONENT EXECUTING');
  return (
    <div>
      <li>
        <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
      </li>
    </div>
  )
}


export default TabButtons 