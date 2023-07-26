const jobsDataLoader = async () => {
    try {
      const jobsLoaded = await fetch('jobs.json');
      const jobsData = await jobsLoaded.json();
      return jobsData;
    } catch (error) {
      console.error('Error loading jobs data:', error);
      return [];
    }
  };
  
  export default jobsDataLoader;
  