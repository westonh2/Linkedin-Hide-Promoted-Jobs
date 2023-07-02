javascript: (() => {
    const jobList = document.querySelector('.jobs-search-results-list');

    jobList.addEventListener('scroll', removePromoted);

    jobList.scrollTo({top: jobList.scrollHeight, left: 0, behavior: 'smooth'});

    function removePromoted() {
        if (jobList.scrollTop >= jobList.scrollHeight - jobList.offsetHeight*2) {
            setTimeout(() => {
                jobList.scrollTo({top: 0, left: 0, behavior: 'smooth'});                
            }, 500);

            setTimeout(() => {
                const jobsElements = document.querySelectorAll('.job-card-list__footer-wrapper');
                console.log(jobsElements);

                jobsElements.forEach(job => {
                    if (job.children[0].innerHTML.includes('Promoted')) {
                        console.log('this one is promoted!');
                        /* job.parentElement.parentElement.parentElement.style.backgroundColor = 'lightgray'; */
                        job.parentElement.parentElement.parentElement.style.display = 'none';
                    }
                });
            }, 1000);
            jobList.removeEventListener('scroll', removePromoted);
        }
    }
})();