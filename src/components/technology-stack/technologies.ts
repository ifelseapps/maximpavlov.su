type Level = 'expert' | 'confident' | 'medium' | 'tried';
export interface IStyles {
  backgroundColor?: string;
  width: string;
}

export interface ITechnology {
  name: string;
  level: Level;
}

export const stylesByLevel: Record<Level, IStyles> = {
  expert: {
    width: '100%',
    backgroundColor: '#00E676',
  },
  confident: {
    width: '75%',
    backgroundColor: '#00B0FF',
  },
  medium: {
    width: '50%',
    backgroundColor: '#FDD835',
  },
  tried: {
    width: '15%',
    backgroundColor: '#ff5722',
  },
};

export const technologies: ITechnology[] = [
  { name: 'HTML', level: 'expert' },
  { name: 'CSS', level: 'expert' },
  { name: 'JavaScript', level: 'expert' },
  { name: 'TypeScript', level: 'expert' },
  { name: 'React', level: 'confident' },
  { name: 'Angular', level: 'confident' },
  { name: 'jQuery', level: 'expert' },
  { name: 'Sass', level: 'expert' },
  { name: 'Less', level: 'expert' },
  { name: 'BEM', level: 'expert' },
  { name: 'Webpack', level: 'confident' },
  { name: 'Gulp', level: 'confident' },
  { name: 'Redux', level: 'confident' },
  { name: 'redux-saga', level: 'confident' },
  { name: 'Akita', level: 'medium' },
  { name: 'Rx.js', level: 'confident' },
  { name: 'Node.js', level: 'confident' },
  { name: 'Git', level: 'confident' },
  { name: 'Linux', level: 'medium' },
  { name: 'SQL', level: 'medium' },
  { name: 'MongoDB', level: 'tried' },
];
