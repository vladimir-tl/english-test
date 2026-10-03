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
    slug: 'alex-onboarding',
    level: 'A2',
    title: { ru: 'Первый день Алекса', en: 'Alex’s first day', et: 'Alexi esimene päev' },
    audio: '/audio/a2/alex-onboarding.mp3',
    intro: 'You will hear a story about a man who starts a new job. Listen carefully, then answer the questions.',
    transcript: `On Monday, Alex started a new job at an IT company. He worked from home because the office was in another city. It was his first IT job, and he felt nervous. His manager sent him a welcome email. The email had some information about the team. However, it did not say what time his first meeting started.

Alex sent a message to his manager and asked about the meeting. The manager told him to join at nine o’clock. At nine, he clicked the link, but it did not work. He was worried because he did not want to be late. A colleague sent him a new link. Finally, he joined the meeting and met his team.

During the meeting, people talked about different projects. Some words were new to Alex, so he did not understand everything. He wanted to ask questions, but everyone spoke very quickly. After the meeting, his manager asked him to check the company website. The manager did not explain which pages he needed to check. Alex opened the website but did not know where to start.

At first, he was afraid to ask for help. He thought his colleagues were too busy. Then he sent a message and asked for clear instructions. His manager sent him a short list of tasks and an example. This helped him understand what he needed to do. However, later that day, he could not open an important file.

He asked for help in the team chat, but nobody answered. His colleagues were in meetings, so he waited and worked on another task. The next morning, Alex told his manager about these problems. They agreed to have a short video call every morning. During these calls, he could ask questions and discuss his tasks. After a few days, Alex felt more comfortable and less worried about his new job.`,
    questions: [
      { prompt: 'Why did Alex work from home on his first day?', options: ['The office was closed on Monday.', 'He was ill.', 'He did not like the office.', 'The office was in another city.'], answer: 3, explain: 'He worked from home because the office was in another city.' },
      { prompt: 'What information was missing in the welcome email?', options: ['The time of his first meeting.', 'The name of his manager.', 'The information about the team.', 'The address of the office.'], answer: 0, explain: 'The email did not say what time his first meeting started.' },
      { prompt: 'What happened when Alex clicked the meeting link at nine o’clock?', options: ['He joined the meeting at once.', 'The link did not work.', 'The meeting was cancelled.', 'He clicked the wrong link and left.'], answer: 1, explain: 'The link did not work, so a colleague sent him a new one.' },
      { prompt: 'Who helped Alex join the meeting?', options: ['His manager called him.', 'A friend from another company.', 'A colleague sent him a new link.', 'He asked the IT support team.'], answer: 2, explain: 'A colleague sent him a new link, and he finally joined the meeting.' },
      { prompt: 'Why did Alex not understand everything in the meeting?', options: ['Some words were new, and people spoke very quickly.', 'The sound was bad.', 'He joined the meeting too late.', 'People spoke a different language.'], answer: 0, explain: 'Some words were new to him, and everyone spoke very quickly.' },
      { prompt: 'What was the problem with the manager’s task about the company website?', options: ['The website did not open.', 'The task was too easy.', 'The manager did not explain which pages to check.', 'Alex had no time for it.'], answer: 2, explain: 'The manager did not say which pages he needed to check, so Alex did not know where to start.' },
      { prompt: 'Why was Alex afraid to ask for help at first?', options: ['His manager was unfriendly.', 'He thought his colleagues were too busy.', 'He did not have the team chat.', 'He wanted to find the answer himself.'], answer: 1, explain: 'He thought his colleagues were too busy.' },
      { prompt: 'What did the manager send after Alex asked for clear instructions?', options: ['A video about the company.', 'A new link to the website.', 'A long document with rules.', 'A short list of tasks and an example.'], answer: 3, explain: 'The manager sent a short list of tasks and an example.' },
      { prompt: 'What did Alex do when nobody answered his question in the team chat?', options: ['He waited and worked on another task.', 'He stopped working for the day.', 'He called his manager at once.', 'He asked a friend to open the file.'], answer: 0, explain: 'His colleagues were in meetings, so he waited and worked on another task.' },
      { prompt: 'What did Alex and his manager agree to do?', options: ['Meet in the office every week.', 'Send emails every evening.', 'Have a short video call every morning.', 'Have a long meeting on Fridays.'], answer: 2, explain: 'They agreed to have a short video call every morning, where he could ask questions.' },
    ],
  },
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
