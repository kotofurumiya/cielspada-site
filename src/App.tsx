import React, { useState, useEffect } from 'react';
import { TopPage } from './pages/TopPage';
import { CrewInfo, CrewContext } from './context/crew';

export const App = () => {
  const [crewInfo, setCrewInfo] = useState<CrewInfo | undefined>();
  
  useEffect(() => {
    fetch('https://api.jsonbin.io/b/5e5518e8b383ea294aef4d08/latest')
      .then((response) => {
        if(!response.ok) {
          throw response.status;
        }
        return response.json();
      })
      .then((json) => setCrewInfo(json))
      .catch((e) => {
        console.log(e);
        setCrewInfo(undefined);
      });
  }, [setCrewInfo]);

  return (
    <CrewContext.Provider value={crewInfo}>
      <TopPage/>
    </CrewContext.Provider>
  );
}
