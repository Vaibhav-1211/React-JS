import CoreConcept from './CoreConcept/CoreConcepts.jsx';
import Header from './Header/Header.jsx';
import TabButtons from './TabButton/TabButtons.jsx';
import { CORE_CONCEPTS } from './data.js';



function App() {
  function handleSelect(SelectedButton) {
    // selectedButton => 'components','jsx','props','state'
    //Now we get our cutome indentifier and custom parameter
    console.log(SelectedButton);
  }

  return (

    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} /> */}
            <CoreConcept {...CORE_CONCEPTS[0]} />
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
            <TabButtons onSelect={() => handleSelect("Component")}>Components</TabButtons>
            <TabButtons onSelect={() =>handleSelect("JSX")}>JSX</TabButtons>
            <TabButtons onSelect={() =>handleSelect("Props")}>Props</TabButtons>
            <TabButtons onSelect={() =>handleSelect("State")}>State</TabButtons>
            {/* Children prop approch */}
          </menu>
          Dyanamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
