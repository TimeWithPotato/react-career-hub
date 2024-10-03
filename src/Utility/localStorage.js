const getStoredJobApplication = () => {
    const storedJobApplication = window.localStorage.getItem('job-application');
    return (storedJobApplication) ? JSON.parse(storedJobApplication) : [];
}

const savedJobApplication = (id, setSuccess) => {
    const storedJobApplication = getStoredJobApplication();
    const exist = storedJobApplication.find(jobID => jobID === id);

    if (!exist) {
        storedJobApplication.push(id);
        window.localStorage.setItem('job-application', JSON.stringify(storedJobApplication));
        setSuccess(true); // Call the function to update success
    } else {
        setSuccess(false); // Call the function to update success
    }
}

export { savedJobApplication };
