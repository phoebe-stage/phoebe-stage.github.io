
import { useEffect, useState } from 'react';
import ChangePageButton from './ChangePageButton';

export default function ProjectSideBar() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/project_data/projects.json')
          .then((response) => response.json())
          .then((data) => setProjects(data))
          .catch((error) => console.error('Error fetching JSON:', error));
      }, []);

    return (
      <div className="bg-mid bg-opacity-50 bgflex flex-col">

        {projects.map((project) => (
            <ChangePageButton text =  {project.title} link={`/projects/${project.id}`} size="med_button"/>
        ))}
    </div>

  );
}

