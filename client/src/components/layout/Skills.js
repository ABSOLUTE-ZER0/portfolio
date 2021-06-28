import React, { useEffect, useState } from "react";

const Skills = ({ choice }) => {
  useEffect(() => {
    if (choice) {
      if (choice === "web") {
        setPage("Full Stack Web Development");
      }
      if (choice === "app") {
        setPage("Android App Development");
      }
      if (choice === "game") {
        setPage("Game Development");
      }
      if (choice === "ds") {
        setPage("Data Science");
      }
    }
    return () => {
      setPage(null);
    };
  }, [choice]);

  const [page, setPage] = useState("Full Stack Web Development");

  return (
    <div className='skills'>
      <div className='skills-title'>
        <h1 className='titleStyle1'>{page}</h1>
      </div>
      <div className='skills-myskills'> 
        <h1 className='titleStyle5'>
          <span>My&thinsp;</span>&thinsp;Skills
        </h1>
      </div>
    </div>
  );
};

export default Skills;
