export default function SideProject(props) {
  return (
    <li className="list-group-item text-start">{props.title}
      <a href={props.link} className="text-decoration-none"> Link</a>
    </li>
  )
}