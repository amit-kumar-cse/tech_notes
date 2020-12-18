const fetchedUserData = {
    id: '123',
    name: 'Amit',
    job: {
        title: 'developer',
        description: 'test'
    }
};

console.log(fetchedUserData?.job?.title);
console.log(fetchedUserData
    && fetchedUserData.job
    && fetchedUserData.job.title);
