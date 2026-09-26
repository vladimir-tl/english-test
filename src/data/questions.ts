export type Level = 'A1' | 'A2' | 'B1' | 'B2';

export interface Question {
  level: Level;
  prompt: string;
  /** multiple-choice options; empty for gap-fill questions */
  options: string[];
  /** index of the correct option (multiple choice) */
  answer: number;
  /** gap-fill: accepted typed answers (case-insensitive); the learner types into the blank */
  accept?: string[];
  /** optional audio clip played above the question */
  audio?: string;
}

// Test content is English in every UI language; only the interface is translated.
export const questions: Question[] = [
  { level: 'A1', prompt: 'She ___ a teacher.', options: ['am', 'is', 'are', 'be'], answer: 1 },
  { level: 'A1', prompt: 'I have two ___.', options: ['child', 'childs', 'children', 'childrens'], answer: 2 },
  { level: 'A1', prompt: '"What time is it?" — "It’s ___."', options: ['in the morning', 'three o’clock', 'on Monday', 'very good'], answer: 1 },
  { level: 'A2', prompt: 'Yesterday we ___ to the cinema.', options: ['go', 'goes', 'went', 'going'], answer: 2 },
  { level: 'A2', prompt: 'This bag is ___ than that one.', options: ['heavy', 'heavier', 'more heavy', 'heaviest'], answer: 1 },
  { level: 'A2', prompt: 'I’m ___ to visit my grandparents next weekend.', options: ['going', 'go', 'goes', 'went'], answer: 0 },
  { level: 'B1', prompt: 'I ___ in Tallinn since 2019.', options: ['live', 'lived', 'have lived', 'am living'], answer: 2 },
  { level: 'B1', prompt: 'If it rains tomorrow, we ___ at home.', options: ['stayed', 'will stay', 'would stay', 'staying'], answer: 1 },
  { level: 'B1', prompt: 'The book ___ by millions of people.', options: ['has read', 'has been read', 'have read', 'is reading'], answer: 1 },
  { level: 'B1', prompt: 'He asked me where ___.', options: ['do I live', 'did I live', 'I lived', 'I do live'], answer: 2 },
  { level: 'A1', prompt: 'My sister ___ (like) pizza.', options: [], answer: -1, accept: ['likes'] },
  { level: 'A2', prompt: 'Last summer we ___ (visit) Italy.', options: [], answer: -1, accept: ['visited'] },
  { level: 'B1', prompt: 'If I ___ (be) you, I would take that job.', options: [], answer: -1, accept: ['were', 'was'] },
  { level: 'B1', prompt: 'She is very interested ___ modern art.', options: [], answer: -1, accept: ['in'] },
  { level: 'A2', audio: '/audio/running-late-message.mp3', prompt: 'Listening: Why is the speaker late?', options: ['The café is closed.', 'The bus hasn’t arrived.', 'They missed the train.', 'They are still at work.'], answer: 1 },
  { level: 'A2', audio: '/audio/running-late-message.mp3', prompt: 'Listening: What time will the speaker probably arrive?', options: ['At 5:30', 'At 6:00', 'At 6:30', 'At 7:30'], answer: 2 },
  { level: 'B1', audio: '/audio/running-late-message.mp3', prompt: 'Listening: What does the speaker ask Emma to do?', options: ['Wait outside the café', 'Call back later', 'Go into the café and get a table', 'Take the next bus'], answer: 2 },
  { level: 'B2', audio: '/audio/photography-course.mp3', prompt: 'Listening 2: Why did the speaker join the course?', options: ['To become a professional photographer', 'To improve travel photography', 'To learn how to repair a camera', 'To meet other travellers'], answer: 1 },
  { level: 'B2', audio: '/audio/photography-course.mp3', prompt: 'Listening 2: What surprised the speaker about the first session?', options: ['It was more expensive than expected', 'Most of it took place outdoors', 'The group was very large', 'They had to buy new equipment'], answer: 1 },
  { level: 'B2', audio: '/audio/photography-course.mp3', prompt: 'Listening 2: What did the instructor focus on?', options: ['Camera settings', 'Editing software', 'Light and composition', 'Photography history'], answer: 2 },
  { level: 'B2', audio: '/audio/photography-course.mp3', prompt: 'Listening 2: How did the speaker’s attitude change?', options: ['From disappointed to appreciative', 'From nervous to frustrated', 'From excited to bored', 'From confused to angry'], answer: 0 },
];

/** Minimum score (out of 21) for each result. */
export const thresholds: { level: 'A0' | Level; min: number }[] = [
  { level: 'B1', min: 16 },
  { level: 'A2', min: 11 },
  { level: 'A1', min: 6 },
  { level: 'A0', min: 0 },
];
