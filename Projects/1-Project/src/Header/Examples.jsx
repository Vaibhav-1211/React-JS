import { useState } from "react";
import TabButtons from "./TabButtons";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
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
    <Section title={"Examples"} id='examples'>
      {/* passing the component identifier buttonContainer={'menu'} */}
      <Tabs buttons={
        <>
          <TabButtons isSelected={selectedTopic === 'components'} onClick={() => handleSelect("components")}>Components</TabButtons>
          <TabButtons isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect("jsx")}>JSX</TabButtons>
          <TabButtons isSelected={selectedTopic === 'props'} onClick={() => handleSelect("props")}>Props</TabButtons>
          <TabButtons isSelected={selectedTopic === 'state'} onClick={() => handleSelect("state")}>State</TabButtons>
        </>
      }>{tabContent}</Tabs>
      <menu>

      </menu>

    </Section>
  )
}