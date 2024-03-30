// we can also use obeject destructring insted of props to get the similar results in both
// function TabButton({ Components }) {
//   return (
//     <div><li><button>{children}</button></li></div>
//   )
// }


const TabButtons = (props) => {
  return (
    <div><li><button>{props.children}</button></li></div>
  )
}

export default TabButtons