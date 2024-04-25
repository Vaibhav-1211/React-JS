import { Side_Project_Data } from "./data.js";
import SideProject from "./Sideprojects";


const Projects = () => {
  return (
    <div className="container mt-5">
      <div className="display-2">Projects</div>
      <div className="card shadow w-100 mx-auto m-4">
        <ul className="list-group list-group-flush list-group-numbered mt-2 p-2">
          {Side_Project_Data.map((sideItem) => (<SideProject key='sideItem' {...sideItem} />))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
