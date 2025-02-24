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
  'Azure',
  'AWS',
  'node.js',
];

export const useSkills = () => {
  const shuffledSkills = [...SKILLS].sort(() => Math.random() - 0.5);
  return { skills: shuffledSkills };
};
