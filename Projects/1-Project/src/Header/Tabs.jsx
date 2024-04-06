export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
  // const ButtonsContainer = buttonContainer
  //which can use as custom component which we are using in below as component
  //setting a defualt prop value Buttonscontainer = 'menu'
  return <>
    {/* as value for props using  that component identifier using inside of the components to dynamically render different HTML element.  */}
    <ButtonsContainer>
      {buttons}
    </ButtonsContainer>
    {children}
  </>
}