import CoreConcept from './CoreConcept/CoreConcepts.jsx';
import Header from './Header/Header.jsx';
import TabButtons from './TabButton/TabButtons.jsx';
import { CORE_CONCEPTS } from './data.js';



function App() {
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
            <TabButtons>Components</TabButtons>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
