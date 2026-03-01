const SKILLS = [
  'Typescript',
  'React.js',
  '.NET',
  'Blazor',
  'React Native',
  'JavaScript',
  'HTML',
  'CSS',
  'SQL Server',
  'PostgreSQL',
  'Azure',
  'AWS',
  'node.js',
  'Docker',
  'Playwright',
  'Cypress',
  'GitHub Actions',
];

export const useSkills = () => {
  const shuffledSkills = [...SKILLS].sort(() => Math.random() - 0.5);
  return { skills: shuffledSkills };
};
