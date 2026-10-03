import type { Lang } from '../i18n/ui';
import type { TopicQuestion } from './topics';

type Text = Record<Lang, string>;

export interface ListeningTask {
  slug: string;
  level: 'A2' | 'B1';
  title: Text;
  /** MP3 path in public/ */
  audio: string;
  /** short English hint shown before listening */
  intro: string;
  /** full text, shown after the result */
  transcript?: string;
  /** answer is the index of the correct option; options are shuffled on screen */
  questions: TopicQuestion[];
}

// To add a task: put the MP3 in public/audio/ and add an entry here.
export const listeningTasks: ListeningTask[] = [
  {
    slug: 'anna-internship',
    level: 'B1',
    title: { ru: 'Стажировка Анны', en: 'Anna’s internship', et: 'Anna praktika' },
    audio: '/audio/b1/anna-internship.mp3',
    intro: 'You will hear a story about a student who looks for an internship. Listen carefully, then answer the questions.',
    transcript: `Last year, Anna decided to look for an internship at an IT company. She was in her final year at university and worked part-time in a bookshop. She had recently completed an online course in software testing and wanted to use her new skills. Although she enjoyed working with customers, she was ready to try something different. Before applying, she updated her CV and added information about her course project. A friend also helped her write a cover letter explaining why she wanted to change careers.

Over the next two weeks, Anna applied to six different companies. Several positions required professional experience, so she wasn’t sure whether she would be considered. However, one company was offering a paid three-month internship for people at the beginning of their careers. The job description said that a willingness to learn was more important than previous experience. Anna submitted her application on Thursday, just one day before the deadline. A few days later, a recruiter called Daniel contacted her to arrange a short phone call.

They agreed to speak on Thursday afternoon after three. However, that morning, one of Anna’s colleagues became ill, and she had to cover an extra shift. She emailed Daniel, apologised for the inconvenience, and asked whether they could reschedule. Daniel replied that Friday morning would also work for him. Anna was relieved that changing the appointment hadn’t caused a problem. Before the call, she prepared a list of questions about the internship.

Daniel explained that the internship involved twenty hours of work a week, including two days in the office. The pay was slightly lower than Anna had expected, but the training opportunities sounded promising. She asked whether someone would support her while she was learning. Daniel told her that each intern worked with an experienced mentor. He also explained that the next stage included an interview with the hiring manager and a practical task. To prepare, Anna researched the company and practised talking about her strengths.

At the interview, Anna admitted that she had limited technical experience. The manager asked her to describe a situation in which she had dealt with an unhappy customer. She explained how she had listened carefully to a complaint and found a solution without involving her supervisor. For the practical task, she had to test a shopping website and describe any problems she noticed. Although she missed one error, her notes were clear and easy to follow. The following week, Daniel called to offer her the internship.

During her first week, Anna met the team and learned how to use their tools. At first, she avoided asking questions because everyone seemed busy. Her mentor explained that asking for help was better than making assumptions. As the weeks passed, Anna became more confident and started asking for feedback regularly. By the end of the internship, she had completed a small project that helped improve the website’s checkout process.

Her manager was impressed by both her progress and her ability to communicate clearly. At their final meeting, he offered her a full-time position as a junior software tester. After discussing her university commitments, they agreed that she would start after graduation. Looking back, Anna realised that being honest about her experience and acting on feedback had helped her succeed. The internship had given her the practical experience she needed to take the next step in her career.`,
    questions: [
      { prompt: 'What was Anna doing before she applied for the internship?', options: ['She was working full-time as a software tester.', 'She was studying abroad and not working.', 'She was studying at university and working part-time in a bookshop.', 'She was travelling after finishing university.'], answer: 2, explain: 'She was in her final year at university and worked part-time in a bookshop.' },
      { prompt: 'How did she prepare her CV and cover letter?', options: ['She updated her CV with her course project, and a friend helped with the cover letter.', 'A recruiter wrote both documents for her.', 'She used the company’s template and sent no cover letter.', 'She wrote a new CV without her course and asked a teacher for the letter.'], answer: 0, explain: 'She added her course project to her CV, and a friend helped her write the cover letter.' },
      { prompt: 'Why did the three-month internship seem suitable for her?', options: ['It required several years of professional experience.', 'It was a paid job for beginners, and willingness to learn mattered more than experience.', 'It promised a full-time contract from the first day.', 'It was online, so she could keep working in the bookshop.'], answer: 1, explain: 'It was paid, aimed at people at the beginning of their careers, and willingness to learn was more important than experience.' },
      { prompt: 'Why did Anna need to reschedule her first call with Daniel?', options: ['She had an exam at university.', 'She forgot about the call.', 'She had to prepare more questions.', 'A colleague was ill, so she had to cover an extra shift.'], answer: 3, explain: 'One of her colleagues became ill, so she had to work an extra shift and asked to move the call to Friday morning.' },
      { prompt: 'What did Daniel tell her about the working hours and office attendance?', options: ['Twenty hours a week, including two days in the office.', 'Forty hours a week, all of them in the office.', 'Twenty hours a week, all from home.', 'Thirty hours a week, including three days in the office.'], answer: 0, explain: 'The internship involved twenty hours of work a week, including two days in the office.' },
      { prompt: 'How did Anna prepare for the interview with the hiring manager?', options: ['She asked her friend to write the answers.', 'She practised coding tasks for several days.', 'She researched the company and practised talking about her strengths.', 'She asked Daniel for the interview questions.'], answer: 2, explain: 'To prepare, she researched the company and practised talking about her strengths.' },
      { prompt: 'What example did she give to show that she could deal with a difficult situation?', options: ['She finished a university project before the deadline.', 'She listened carefully to a customer’s complaint and solved it without involving her supervisor.', 'She asked her supervisor to speak to an unhappy customer.', 'She fixed a mistake in her online course project.'], answer: 1, explain: 'She described how she listened to an unhappy customer and found a solution on her own.' },
      { prompt: 'What did Anna have to do during the practical task?', options: ['Write a program for an online shop.', 'Present her course project to the team.', 'Fix several errors in a website.', 'Test a shopping website and describe the problems she noticed.'], answer: 3, explain: 'She had to test a shopping website and describe any problems. She missed one error, but her notes were clear.' },
      { prompt: 'Why was she initially afraid to ask questions, and what advice did her mentor give her?', options: ['Everyone seemed busy; the mentor said asking for help is better than making assumptions.', 'She felt she knew everything; the mentor told her to wait for feedback.', 'The tools were too difficult; the mentor said she should read the manual first.', 'The team was unfriendly; the mentor said she should ask only her manager.'], answer: 0, explain: 'At first she avoided questions because everyone seemed busy. Her mentor said asking for help was better than making assumptions.' },
      { prompt: 'What opportunity did Anna receive at the end of the internship, and when would she start?', options: ['A second internship, starting the next month.', 'A full-time job as a junior software tester, starting after graduation.', 'A part-time job as a team mentor, starting immediately.', 'A full-time job as a recruiter, starting after the summer.'], answer: 1, explain: 'Her manager offered her a full-time position as a junior software tester, and she would start after graduation.' },
    ],
  },
  {
    slug: 'running-late',
    level: 'B1',
    title: { ru: 'Сообщение: я опаздываю', en: 'A message: running late', et: 'Sõnum: ma hilinen' },
    audio: '/audio/running-late-message.mp3',
    intro: 'You will hear a voice message. Listen carefully, then answer the questions.',
    questions: [
      { prompt: 'Why is the speaker late?', options: ['The café is closed.', 'The bus hasn’t arrived.', 'They missed the train.', 'They are still at work.'], answer: 1, explain: 'The speaker is waiting for a bus that has not come.' },
      { prompt: 'What time will the speaker probably arrive?', options: ['At 5:30', 'At 6:00', 'At 6:30', 'At 7:30'], answer: 2, explain: 'The speaker expects to arrive around 6:30.' },
      { prompt: 'What does the speaker ask Emma to do?', options: ['Wait outside the café', 'Call back later', 'Go into the café and get a table', 'Take the next bus'], answer: 2, explain: 'Emma should go in and get a table.' },
    ],
  },
];
