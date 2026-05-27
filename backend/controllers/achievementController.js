const achievements = [
  {
    id: 1,
    title: '🥈 First Runner-Up — Hackathon-I',
    description:
      'I participated in Hackathon-I organized by StackCode Training Institute and achieved First Runner-Up position. This experience improved my teamwork, creativity, and problem-solving abilities.',
    note: 'Received gifts and certificate for outstanding performance in Hackathon-I.',
    images: [
      { key: 'certificate', alt: 'Hackathon Certificate' },
      { key: 'gifts', alt: 'Gifts and Awards' },
    ],
  },
];

export const getAchievements = (req, res) => {
  res.json(achievements);
};
