import test from './fixtures/pageFixtures'

// import projectData from '../testdata/projectData.json';
test.beforeAll(async ({}) => {
    console.log('Before all the tests...')    
});

test.afterAll(async () => {
    console.log('After all the tests...');
});

export default test
