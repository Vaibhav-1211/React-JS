export default function Section({ title, children,   ...props }) {
  //we are using props destructing 
  //forwarding props we are using in order to solve the proble of adding multiple element manually - forwarding element to wrapped element
  //here ...props this js feture is called 'Rest property'. This syntax groups all remaining object properties into a new obeject (named 'props' in tha case)
  //In simple words ... tells js to collect all other props and merge
  return (
    <section {...props} >
      <h2>{title}</h2>
      {children}
    </section>
  )
}