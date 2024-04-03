import { useState } from 'react';
import CoreConcept from './CoreConcept/CoreConcepts.jsx';
import Header from './Header/Header.jsx';
import TabButtons from './TabButton/TabButtons.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';



function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(SelectedButton) {

    setSelectedTopic(SelectedButton)

  }
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
            {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Example</h2>
          <menu>
            <TabButtons isSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>Components</TabButtons>
            <TabButtons isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButtons>
            <TabButtons isSelected={selectedTopic === 'props'} onSelect={() => handleSelect("props")}>Props</TabButtons>
            <TabButtons isSelected={selectedTopic === 'state'} onSelect={() => handleSelect("state")}>State</TabButtons>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
