import { useState } from 'react';
//This is a react hook. All the function starting with "use" are react hook.
//useState is react hook.
//and those special things about those React hooks is that they're technical regualr funciton. 
//but they only be called inside of react components function or inside of other React hooks.for ex custom react hooks 

import CoreConcept from './CoreConcept/CoreConcepts.jsx';
import Header from './Header/Header.jsx';
import TabButtons from './TabButton/TabButtons.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';



function App() {
  //useState does except the argument which is basically a default value you want to react to store 
  //USeState() yeilds an array with two elements and it will always be exacatly two elements 
  //here stateArray produced and returned by react's useState() function - Contains exactly two elements.
  // const stateArray = useState('Please click a button');
  //And therefor i used here i destructring 
  //setSelectedTopic function is update fn which tell that this function should be executed again.
  //selectedTopic - with const i used which will recreate everytime when the funcition will execute. So we don't neeed a variable here.BTS react will store and update the actual value which will then pass to this const.

  const [selectedTopic, setSelectedTopic] = useState();

  // let tabContent = "Please click the button"

  function handleSelect(SelectedButton) {
    // selectedButton => 'components','jsx','props','state'
    //Now we get our cutome indentifier and custom parameter
    // console.log(SelectedButton);
    setSelectedTopic(SelectedButton)
    // console.log(selectedTopic);
  }

  //Conditional rendering (if condition and ternary condition)
  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    );
  }

  return (

    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {/* map method produces the new array based on existing array -given list is generated dyanamically using map method - key prop is used by react under the hood to effeceitly  render and update the list */}
            {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
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
            <TabButtons isSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>Components</TabButtons>
            <TabButtons isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButtons>
            <TabButtons isSelected={selectedTopic === 'props'} onSelect={() => handleSelect("props")}>Props</TabButtons>
            <TabButtons isSelected={selectedTopic === 'state'} onSelect={() => handleSelect("state")}>State</TabButtons>
            {/* Children prop approch */}
          </menu>
          {tabContent}
          {/* !== shortform or truthy value ! before the text */}
          {/* we can use ternary op with separeted dyanmic segments or combine them both in one like below and also we can use && op to get same behaviour in project */}
          {/* {!selectedTopic ? (<p>Please select a topic.</p>) : (<div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
          )} */}



          {/* so this state snanpshot-so we can finally update the value */}
        </section>
      </main>
    </div>
  );
}

export default App;
