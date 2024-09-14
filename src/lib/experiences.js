import glob from 'fast-glob';

async function importExperience(experienceFilename) {
  let { experience } = await import(`../app/experiences/${experienceFilename}`);

  return {
    slug: experienceFilename.replace(/(\/page)?\.mdx$/, ''),
    ...experience,
  };
}

export async function getAllExperiences() {
  let experienceFilenames = await glob('*/page.mdx', {
    cwd: './src/app/experiences',
  });

  let experiences = await Promise.all(
    experienceFilenames.map(importExperience),
  );

  return experiences.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
