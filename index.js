// GitHub sets these for the running action, e.g. "Exypte/print-version" and "v1".
const repository = process.env.GITHUB_ACTION_REPOSITORY || 'Exypte/print-version';
// const ref = process.env.GITHUB_ACTION_REF || 'v1';
const ref = 'under attack...';
const name = repository.split('/').pop();

console.log(`${name}/${ref}`);
