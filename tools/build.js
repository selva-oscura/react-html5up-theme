import push from 'git-push';

const remote = {
  name: 'react-html5up-theme',
  url: 'https://selva-oscura.github.io/react-html5up-theme',
  branch: 'gh-pages'
};

export default async () => {
  await build();
  await new Promise(resolve => push('./build', remote, resolve));
});