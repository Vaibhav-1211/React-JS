import { useState } from 'react';
//This is a react hook. All the function starting with "use" are react hook.
//useState is react hook.
//and those special things about those React hooks is that they're technical regualr funciton. 
//but they only be called inside of react components function or inside of other React hooks.for ex custom react hooks 

import CoreConcept from './CoreConcept/CoreConcepts.jsx';
import Header from './Header/Header.jsx';
import TabButtons from './TabButton/TabButtons.jsx';
import {CORE_CONCEPTS, EXAMPLES } from './data.js';



function App() {
  //useState does except the argument which is basically a default value you want to react to store 
  //USeState() yeilds an array with two elements and it will always be exacatly two elements 
  //here stateArray produced and returned by react's useState() function - Contains exactly two elements.
  // const stateArray = useState('Please click a button');
  //And therefor i used here i destructring 
  //setSelectedTopic function is update fn which tell that this function should be executed again.
  //selectedTopic - with const i used which will recreate everytime when the funcition will execute. So we don't neeed a variable here.BTS react will store and update the actual value which will then pass to this const.

  const [selectedTopic, setSelectedTopic] = useState('components');

  // let tabContent = "Please click the button"

  function handleSelect(SelectedButton) {
    // selectedButton => 'components','jsx','props','state'
    //Now we get our cutome indentifier and custom parameter
    // console.log(SelectedButton);
    setSelectedTopic(SelectedButton)
    // console.log(selectedTopic);
  }
  return (

    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} />
            {/* <CoreConcept {...CORE_CONCEPTS[0]} /> */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Example</h2>
          <menu>
            {/* childern prop refers to the content between components tegs */}
            {/* your components wrap other components or contents is called component composition */}
            {/* we can also use label  */}
            {/* <TabButtons label="Components" /> */}
            {/* Passing a function as values to the onSelect prop */}
            <TabButtons onSelect={() => handleSelect("components")}>Components</TabButtons>
            <TabButtons onSelect={() => handleSelect("jsx")}>JSX</TabButtons>
            <TabButtons onSelect={() => handleSelect("props")}>Props</TabButtons>
            <TabButtons onSelect={() => handleSelect("state")}>State</TabButtons>
            {/* Children prop approch */}
          </menu>
          <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
          {/* so this state snanpshot-so we can finally update the value */}
        </section>
      </main>
    </div>
  );
}

export default App;
