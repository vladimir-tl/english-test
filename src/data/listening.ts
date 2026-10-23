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
  /** slug of the topic this task belongs to; the topic page links to it */
  topic?: string;
  /** filter tags on the listening page, English, lowercase */
  tags: string[];
}

// To add a task: put the MP3 in public/audio/ and add an entry here.
export const listeningTasks: ListeningTask[] = [
  {
    slug: 'sander-retrospective',
    tags: ['agile', 'retro'],
    level: 'A2',
    title: { ru: 'Ретроспектива Сандера', en: 'Sander’s retrospective', et: 'Sanderi retrospektiiv' },
    audio: '/audio/a2/retrospective.mp3',
    intro: 'You will hear a story about a team meeting after a sprint. Listen carefully, then answer the questions.',
    transcript: `Sander worked as a developer at an IT company. On Friday, his team finished a two-week sprint. In the afternoon, they had a retrospective. This was a meeting about how they worked together. They discussed good things and problems from the sprint. Everyone had a chance to speak and share ideas.

The meeting started with the question, “What went well?” Sander said that developers and testers worked closely together. They checked new features early and found problems quickly. A colleague said that their short daily calls also went well. Good communication helped everyone understand the plan. The team wanted to keep doing these things in the next sprint.

Then they discussed another question: “What could be improved?” Sander explained that some tasks did not have clear instructions. Sometimes, he did not know exactly what he needed to build. He had to ask questions and wait for answers. Other colleagues had the same problem. They agreed that they needed to improve the information in their tasks.

Sander wanted to suggest a simple change. He said, “Next time we should add a clear example to each new task.” Another colleague suggested a short checklist for writing tasks. The team liked this idea because it was easy to try. Their first action item was to create the checklist. Sander agreed to prepare it by Monday morning.

The checklist included a clear description, an example, and a contact person. Sander planned to share it in the team chat. Everyone agreed to use it during the next sprint. At the next retrospective, they would discuss whether it helped. One important lesson learned was that clear instructions could save time for everyone. Sander left the meeting with a useful task and a clear plan.`,
    questions: [
      { prompt: 'What was a retrospective?', options: ['A meeting about how the team worked together.', 'A meeting about a new customer.', 'A test of a new feature.', 'A planning meeting for the next sprint.'], answer: 0, explain: 'It was a meeting about how they worked together.' },
      { prompt: 'When did the team have the retrospective?', options: ['On Monday morning.', 'On Friday afternoon.', 'On Wednesday evening.', 'On Friday morning.'], answer: 1, explain: 'On Friday, in the afternoon, they had a retrospective.' },
      { prompt: 'What went well in the sprint?', options: ['The tasks had clear instructions.', 'The team finished early.', 'Developers and testers worked closely together.', 'The team had no problems.'], answer: 2, explain: 'Developers and testers worked closely together and found problems quickly.' },
      { prompt: 'What did the team want to do with the good things?', options: ['Keep doing them in the next sprint.', 'Stop doing them.', 'Change them.', 'Show them to another team.'], answer: 0, explain: 'The team wanted to keep doing these things in the next sprint.' },
      { prompt: 'What was the problem with some tasks?', options: ['They were too easy.', 'They had no deadline.', 'They had too many people.', 'They did not have clear instructions.'], answer: 3, explain: 'Some tasks did not have clear instructions.' },
      { prompt: 'What did Sander have to do when he did not know what to build?', options: ['Ask questions and wait for answers.', 'Change the task.', 'Leave the meeting.', 'Write the code anyway.'], answer: 0, explain: 'He had to ask questions and wait for answers.' },
      { prompt: 'What did Sander suggest?', options: ['To have fewer meetings.', 'To work on Fridays.', 'To add a clear example to each new task.', 'To write longer tasks.'], answer: 2, explain: 'He said they should add a clear example to each new task.' },
      { prompt: 'What was the team’s first action item?', options: ['To create a checklist.', 'To change the sprint length.', 'To hire a new tester.', 'To write a report.'], answer: 0, explain: 'Their first action item was to create the checklist.' },
      { prompt: 'When did Sander agree to prepare the checklist?', options: ['By Friday evening.', 'By Monday morning.', 'By the next retrospective.', 'By the end of the month.'], answer: 1, explain: 'Sander agreed to prepare it by Monday morning.' },
      { prompt: 'What was the lesson learned?', options: ['Daily calls take too much time.', 'Testers should work alone.', 'Meetings should be shorter.', 'Clear instructions could save time for everyone.'], answer: 3, explain: 'Clear instructions could save time for everyone.' },
    ],
  },
  {
    slug: 'indrek-stand-up',
    tags: ['agile', 'stand-up'],
    level: 'A2',
    title: { ru: 'Стендап Индрека', en: 'Indrek’s stand-up', et: 'Indreku stand-up' },
    audio: '/audio/a2/stand-up.mp3',
    intro: 'You will hear a story about a developer and his daily team meeting. Listen carefully, then answer the questions.',
    transcript: `Indrek worked as a developer at an IT company. His team worked on an online shop. Every morning, they had a short meeting called a stand-up. It usually lasted about fifteen minutes. Some colleagues joined from home, and others were in the office. Each person gave a short update about their work.

On Tuesday morning, Indrek checked the team’s task board. His task was still in progress. He was working on the login page. The day before, he found a problem with the login button. He needed to fix it before users could try the new page. Before the meeting, he prepared a few notes.

When it was his turn, he said, “Yesterday I worked on the login page.” “I fixed a problem with the login button,” he explained. Then he added, “Today I’m going to test my changes.” However, he could not open the test system. “I’m blocked by a problem with my access,” he told the team. He needed help before he could continue.

One colleague knew how to solve this blocker. She offered to check his access after the meeting. Then another developer gave an update about a different task. The team agreed to discuss the technical details after the stand-up. This helped them keep the meeting short. By the end, everyone knew the plan and who needed help.

After the meeting, Indrek and his colleague checked his account. She changed his access settings, and he could open the test system. He tested his changes, and another developer checked his code. Everything worked, so Indrek was ready to merge his changes into the main branch. After that, he moved his task to done on the board. At the next stand-up, he told the team that he was ready for a new task.`,
    questions: [
      { prompt: 'How long did the stand-up usually last?', options: ['About five minutes.', 'About fifteen minutes.', 'About thirty minutes.', 'About one hour.'], answer: 1, explain: 'The stand-up usually lasted about fifteen minutes.' },
      { prompt: 'What did each person do at the stand-up?', options: ['Gave a short update about their work.', 'Showed the website to the manager.', 'Wrote a report for the team.', 'Chose a new task from the board.'], answer: 0, explain: 'Each person gave a short update about their work.' },
      { prompt: 'What was Indrek working on?', options: ['The shopping cart.', 'The login page.', 'The test system.', 'The task board.'], answer: 1, explain: 'He was working on the login page.' },
      { prompt: 'What problem did Indrek find the day before?', options: ['A problem with the login button.', 'A problem with the task board.', 'A problem with his computer.', 'A problem with the main branch.'], answer: 0, explain: 'The day before, he found a problem with the login button.' },
      { prompt: 'What did Indrek say he was going to do today?', options: ['Fix the login button.', 'Ask for a new task.', 'Merge his changes.', 'Test his changes.'], answer: 3, explain: 'He said, “Today I’m going to test my changes.”' },
      { prompt: 'Why could Indrek not continue his work?', options: ['He was ill.', 'He could not open the test system.', 'He had no notes.', 'He was late for the meeting.'], answer: 1, explain: 'He was blocked by a problem with his access to the test system.' },
      { prompt: 'What did a colleague offer to do?', options: ['Test the login page for him.', 'Write his update for him.', 'Check his access after the meeting.', 'Take his task.'], answer: 2, explain: 'She offered to check his access after the meeting.' },
      { prompt: 'Why did the team discuss technical details after the stand-up?', options: ['To keep the meeting short.', 'To invite more colleagues.', 'To change the plan.', 'To choose a new leader.'], answer: 0, explain: 'This helped them keep the meeting short.' },
      { prompt: 'What happened after Indrek tested his changes?', options: ['He fixed the login button again.', 'He changed his access settings.', 'Another developer checked his code.', 'He went home.'], answer: 2, explain: 'He tested his changes, and another developer checked his code.' },
      { prompt: 'What did Indrek do when everything worked?', options: ['He deleted his task.', 'He moved his task to done on the board.', 'He started a new page.', 'He asked for more time.'], answer: 1, explain: 'He merged his changes and then moved his task to done on the board.' },
    ],
  },
  {
    slug: 'erik-sprint-planning',
    tags: ['agile', 'planning'],
    level: 'A2',
    title: { ru: 'Планирование спринта Эрика', en: 'Erik’s sprint planning', et: 'Eriku sprindi planeerimine' },
    audio: '/audio/a2/sprint-planning.mp3',
    intro: 'You will hear a story about a man at his first sprint planning meeting. Listen carefully, then answer the questions.',
    transcript: `On Monday, Erik joined his first sprint planning meeting. His team worked in short periods called sprints. Each sprint lasted two weeks. At the meeting, they opened the backlog, a list of work for the team. It included new features and problems they needed to fix. Erik read the list and asked a few questions.

One problem was with the login page. Some users could not log in to their accounts. This problem had a high priority because people could not use the website. Changing the colour of a button was less important. The team decided to discuss the login problem first. They talked about what they needed to do for this task.

Before choosing their work, the team needed to estimate its size. They used story points to compare different tasks. These points showed the size of the work, not an exact number of hours. A small task had two story points. A more difficult task had five story points. When team members chose different numbers, they explained their answers.

Erik asked, “How long will it take?” A developer thought the login problem would take about two days to fix. However, he might need more time if he found other problems. The team also discussed their capacity. This meant how much work they could do during the sprint. One colleague was on holiday, so the team could do less work than usual.

Erik agreed to take on the testing of the login page. He planned to check it with different accounts after the fix. Another tester offered to help him if he had questions. The team chose a few more tasks but left the rest in the backlog. Their main goal for the sprint was to help users log in without problems. By the end of the meeting, Erik knew what to do and felt ready to start.`,
    questions: [
      { prompt: 'How long did each sprint last?', options: ['One week.', 'Two weeks.', 'Three weeks.', 'One month.'], answer: 1, explain: 'Each sprint lasted two weeks.' },
      { prompt: 'What is a backlog?', options: ['A meeting of the team.', 'A list of work for the team.', 'A short period of work.', 'A problem on the website.'], answer: 1, explain: 'The backlog is a list of work for the team.' },
      { prompt: 'What was the problem with the login page?', options: ['The page was too slow.', 'The button had the wrong colour.', 'Some users could not log in.', 'The page did not open on phones.'], answer: 2, explain: 'Some users could not log in to their accounts.' },
      { prompt: 'Why did the login problem have a high priority?', options: ['People could not use the website.', 'It was easy to fix.', 'Erik found it first.', 'The manager asked for it.'], answer: 0, explain: 'It had a high priority because people could not use the website.' },
      { prompt: 'What do story points show?', options: ['The exact number of hours.', 'The names of the team members.', 'The importance of a task.', 'The size of the work.'], answer: 3, explain: 'Story points showed the size of the work, not an exact number of hours.' },
      { prompt: 'What did the team do when people chose different story points?', options: ['They explained their answers.', 'They asked the manager to choose.', 'They chose the smallest number.', 'They moved to the next task.'], answer: 0, explain: 'When team members chose different numbers, they explained their answers.' },
      { prompt: 'How long did a developer think the login problem would take?', options: ['About one day.', 'About five days.', 'About two days.', 'About two weeks.'], answer: 2, explain: 'A developer thought it would take about two days, but maybe more if he found other problems.' },
      { prompt: 'Why could the team do less work than usual?', options: ['The sprint was shorter.', 'One colleague was on holiday.', 'The tasks were more difficult.', 'Erik was new in the team.'], answer: 1, explain: 'One colleague was on holiday, so the team’s capacity was lower.' },
      { prompt: 'What did Erik agree to do?', options: ['Fix the login page.', 'Change the colour of the button.', 'Write the list of tasks.', 'Test the login page.'], answer: 3, explain: 'Erik agreed to take on the testing of the login page.' },
      { prompt: 'What was the main goal of the sprint?', options: ['To help users log in without problems.', 'To finish all tasks in the backlog.', 'To add new features to the website.', 'To train the new tester.'], answer: 0, explain: 'Their main goal was to help users log in without problems.' },
    ],
  },
  {
    slug: 'alex-onboarding',
    tags: ['career', 'onboarding'],
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
    slug: 'alex-goals',
    tags: ['career', 'goals'],
    level: 'A2',
    title: { ru: 'Цели Алекса', en: 'Alex’s goals', et: 'Alexi eesmärgid' },
    audio: '/audio/a2/goal.mp3',
    intro: 'You will hear a story about a man and his manager who talk about goals at work. Listen carefully, then answer the questions.',
    transcript: `During his first week, Alex had a meeting with his manager. They talked about his probation period, which lasted three months. The manager explained that this was a time to learn and show his work. Alex wanted to improve his testing skills. His main goal was to do simple tasks without help. He also wanted to communicate better with his team.

The manager showed Alex a written onboarding plan. The plan explained what he needed to learn each month. In the first month, he needed to learn about the company’s tools. In the second month, he would practise testing with a colleague. In the third month, he would do more tasks on his own. Each part of the plan had a deadline.

Then the manager explained OKRs, or objectives and key results. An objective describes what you want to achieve. Key results help you measure your progress. Alex’s objective was to become better at testing websites. His first key result was to complete ten website checks without help. His second key result was to write five clear reports about problems on the website.

Alex wrote his objective and key results in his notebook. They helped him to focus on the most important tasks. Every Friday, he met his manager to discuss his work. They talked about what was easy and what was difficult. Alex explained that writing reports was still hard for him. His manager showed him a good example and explained how to use it.

Alex practised this skill with a colleague twice a week. He could use the main tools by the end of the first month. However, he still needed more practice with his reports. His manager added extra practice time to the onboarding plan. By the end of the third month, Alex could do ten checks without help and had written five clear reports. He felt more confident and was ready to continue working with the team.`,
    questions: [
      { prompt: 'How long was Alex’s probation period?', options: ['One month.', 'Six months.', 'Three months.', 'One year.'], answer: 2, explain: 'His probation period lasted three months.' },
      { prompt: 'What was Alex’s main goal at the beginning?', options: ['To do simple tasks without help.', 'To change his team.', 'To write reports for his manager.', 'To learn a new language.'], answer: 0, explain: 'His main goal was to do simple tasks without help.' },
      { prompt: 'What else did Alex want to improve?', options: ['His speed of typing.', 'His communication with the team.', 'His knowledge of English grammar.', 'His salary.'], answer: 1, explain: 'He also wanted to communicate better with his team.' },
      { prompt: 'What did the onboarding plan show?', options: ['The names of all colleagues.', 'The working hours of the office.', 'What Alex needed to learn each month.', 'The salary for each month.'], answer: 2, explain: 'The plan explained what he needed to learn each month.' },
      { prompt: 'What did Alex plan to do in the second month?', options: ['Practise testing with a colleague.', 'Learn about the company’s tools.', 'Do more tasks on his own.', 'Write his first report.'], answer: 0, explain: 'In the second month, he would practise testing with a colleague.' },
      { prompt: 'What is a key result?', options: ['A list of tools.', 'A meeting with the manager.', 'A deadline in the plan.', 'A way to measure progress.'], answer: 3, explain: 'Key results help you measure your progress.' },
      { prompt: 'What was Alex’s second key result?', options: ['To complete ten website checks.', 'To write five clear reports about problems.', 'To learn all the tools in one week.', 'To meet his manager every day.'], answer: 1, explain: 'His second key result was to write five clear reports about problems on the website.' },
      { prompt: 'Why did Alex write his objective and key results in his notebook?', options: ['His manager asked him to do it.', 'He wanted to show them to the team.', 'They helped him focus on the most important tasks.', 'He often forgot his tasks.'], answer: 2, explain: 'They helped him to focus on the most important tasks.' },
      { prompt: 'What was still difficult for Alex?', options: ['Using the main tools.', 'Writing reports.', 'Testing websites.', 'Talking to his colleagues.'], answer: 1, explain: 'Alex explained that writing reports was still hard for him.' },
      { prompt: 'What was the result at the end of the third month?', options: ['Alex needed one more month of probation.', 'Alex changed his objective.', 'Alex did five checks and wrote ten reports.', 'Alex did ten checks without help and wrote five clear reports.'], answer: 3, explain: 'By the end of the third month, Alex could do ten checks without help and had written five clear reports.' },
    ],
  },
  {
    slug: 'anna-internship',
    tags: ['career', 'interview'],
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
    slug: 'demo-kristiina-designer',
    tags: ['demo'],
    level: 'B1',
    title: { ru: 'Демо: дизайнер Кристийна', en: 'Demo: Kristiina, designer', et: 'Demo: disainer Kristiina' },
    audio: '/audio/b1/demo/kristiina-designer.mp3',
    intro: 'HappySmile is building online video consultations and chat with the doctor. You will hear the designer at a demo meeting. Listen carefully, then answer the questions.',
    topic: 'demo-meeting',
    transcript: `Hi everyone. I’m Kristiina, the designer on this project. Let me show you what has been done on the design side.

First, the layout for the video consultation screen was designed last week. Three different versions were prepared, and they were shown to five real patients. The second version was chosen because it was the easiest to use. In this version, the video window is placed in the centre, and the chat is shown on the right.

The design of the chat was also finished. Large buttons were added, because many of our patients are older people. All the icons were tested on small phone screens, and two of them were changed because they were hard to understand.

The results are good. Four out of five patients were able to start a video call in less than one minute, without any help.

What still needs to be done? The screen for the end of the consultation hasn’t been designed yet. It will be prepared by next Wednesday. After that, the final mockups will be sent to the developers, and the colours will be checked one more time with the marketing team.`,
    questions: [
      { prompt: 'Which version of the layout was chosen?', options: ['The first version.', 'The second version.', 'The third version.', 'A mix of all three versions.'], answer: 1, explain: 'The second version was chosen because it was the easiest to use.' },
      { prompt: 'Where is the chat shown in the new layout?', options: ['In the centre.', 'At the bottom.', 'On the right.', 'In a separate window.'], answer: 2, explain: 'The video window is placed in the centre, and the chat is shown on the right.' },
      { prompt: 'Why were large buttons added?', options: ['Many patients are older people.', 'The doctors asked for them.', 'The marketing team liked them.', 'Small buttons didn’t work on iPhone.'], answer: 0, explain: 'Large buttons were added because many of the patients are older people.' },
      { prompt: 'How many patients started a video call in less than one minute?', options: ['All five.', 'Three out of five.', 'Two out of five.', 'Four out of five.'], answer: 3, explain: 'Four out of five patients were able to start a video call in less than one minute.' },
      { prompt: 'What hasn’t been designed yet?', options: ['The chat.', 'The screen for the end of the consultation.', 'The icons.', 'The video window.'], answer: 1, explain: 'The screen for the end of the consultation hasn’t been designed yet. It will be prepared by next Wednesday.' },
    ],
  },
  {
    slug: 'demo-martin-qa',
    tags: ['demo'],
    level: 'B1',
    title: { ru: 'Демо: тестировщик Мартин', en: 'Demo: Martin, QA engineer', et: 'Demo: testija Martin' },
    audio: '/audio/b1/demo/martin-qa.mp3',
    intro: 'HappySmile is building online video consultations and chat with the doctor. You will hear the QA engineer at a demo meeting. Listen carefully, then answer the questions.',
    topic: 'demo-meeting',
    transcript: `Hello, I’m Martin from the QA team. I’d like to tell you about testing.

So far, the chat feature has been tested on Android, on iPhone and in the web browser. More than sixty test cases were written for the chat and the video call. Most of them were run this week, and twelve bugs were found during testing.

Most of these bugs were small, and eight of them have already been fixed by the developers. For example, some messages were shown twice, and the camera didn’t turn on when the internet connection was slow. Both problems are solved now.

The other four bugs are still open. The most serious one is about sound: on some older Android phones, the doctor can’t be heard during the call. Our developers are working on it right now.

The results: the chat is stable, and in our tests ninety-five percent of video calls were connected on the first try.

Next steps: the open bugs will be tested again after they are fixed. Next week, the video call will be tested with real doctors from the clinic. A full test report will be shared with everyone on Friday.`,
    questions: [
      { prompt: 'How many bugs were found during testing?', options: ['Eight.', 'Four.', 'Twelve.', 'Sixty.'], answer: 2, explain: 'Twelve bugs were found during testing.' },
      { prompt: 'How many bugs have already been fixed?', options: ['Eight.', 'Four.', 'Twelve.', 'All of them.'], answer: 0, explain: 'Eight of them have already been fixed by the developers. Four are still open.' },
      { prompt: 'What is the most serious open bug?', options: ['Messages are shown twice.', 'The camera doesn’t turn on.', 'The chat is very slow.', 'On some older Android phones, the doctor can’t be heard.'], answer: 3, explain: 'The most serious bug is about sound on some older Android phones.' },
      { prompt: 'How many video calls were connected on the first try?', options: ['Sixty percent.', 'Ninety-five percent.', 'Fifty percent.', 'All of them.'], answer: 1, explain: 'Ninety-five percent of video calls were connected on the first try.' },
      { prompt: 'What will happen next week?', options: ['The feature will be released.', 'The test report will be written.', 'The video call will be tested with real doctors.', 'The chat will be redesigned.'], answer: 2, explain: 'Next week, the video call will be tested with real doctors from the clinic. The report will be shared on Friday.' },
    ],
  },
  {
    slug: 'demo-denis-developer',
    tags: ['demo'],
    level: 'B1',
    title: { ru: 'Демо: разработчик Денис', en: 'Demo: Denis, developer', et: 'Demo: arendaja Denis' },
    audio: '/audio/b1/demo/denis-dev.mp3',
    intro: 'HappySmile is building online video consultations and chat with the doctor. You will hear a developer at a demo meeting. Listen carefully, then answer the questions.',
    topic: 'demo-meeting',
    transcript: `Hi, I’m Denis, one of the developers. I’ll explain what has been implemented on the technical side.

The chat feature was implemented in the first week of the sprint. Messages are saved in our database, and they are encrypted, so patient data is protected. Photos can also be sent in the chat. This was requested by the doctors, because patients often want to show a problem with their teeth.

For the video calls, we didn’t build everything from zero. An external video service was chosen, and it was connected to our app last Tuesday. On Monday, the new feature was deployed to the test server, so now it can be checked by everyone in the team.

The results: a video call is started in about three seconds, and the chat works without delays.

What’s still to do? The sound bug on older Android phones will be fixed this week. Notifications haven’t been added yet. At the moment, the patient isn’t told when the doctor joins the call. They will be added in the next sprint. And finally, before the release, our code will be reviewed by another team.`,
    questions: [
      { prompt: 'When was the chat feature implemented?', options: ['In the first week of the sprint.', 'Last Tuesday.', 'On Monday.', 'In the last sprint.'], answer: 0, explain: 'The chat feature was implemented in the first week of the sprint.' },
      { prompt: 'Why can photos be sent in the chat?', options: ['The designer suggested it.', 'It was easy to add.', 'Patients asked for it.', 'The doctors requested it.'], answer: 3, explain: 'This was requested by the doctors, because patients often want to show a problem with their teeth.' },
      { prompt: 'How were the video calls built?', options: ['They were built from zero.', 'An external video service was connected to the app.', 'They were copied from another app.', 'They haven’t been built yet.'], answer: 1, explain: 'An external video service was chosen, and it was connected to the app last Tuesday.' },
      { prompt: 'What hasn’t been added yet?', options: ['Photos in the chat.', 'Encryption.', 'Notifications.', 'Video calls.'], answer: 2, explain: 'Notifications haven’t been added yet. They will be added in the next sprint.' },
      { prompt: 'What will happen before the release?', options: ['The code will be reviewed by another team.', 'The app will be tested by patients.', 'The database will be changed.', 'The chat will be removed.'], answer: 0, explain: 'Before the release, the code will be reviewed by another team.' },
    ],
  },
  {
    slug: 'demo-laura-team-lead',
    tags: ['demo'],
    level: 'B1',
    title: { ru: 'Демо: тимлид Лаура', en: 'Demo: Laura, team lead', et: 'Demo: tiimijuht Laura' },
    audio: '/audio/b1/demo/laura-team-lead.mp3',
    intro: 'HappySmile is building online video consultations and chat with the doctor. You will hear the team lead at the end of a demo meeting. Listen carefully, then answer the questions.',
    topic: 'demo-meeting',
    transcript: `Thank you, everyone. I’m Laura, the team lead. Let me sum up.

Overall, the project is on track. Most of the work has been done: the design was finished, the chat and the video calls were implemented, and more than sixty test cases were checked. Great job, team!

There was one problem. The video service was delivered by our partner one week late, so some of the testing was moved to the next sprint. Because of that, the release date was changed from the first to the fifteenth of December.

What happens next? The remaining bugs will be fixed by the end of this sprint. Then the video calls will be tested with three doctors from the clinic. Their feedback will be collected and discussed at our next meeting.

If everything goes well, the new feature will be released on the fifteenth of December, and it will be announced to all patients by email. Notifications are planned for the next sprint.

Now I’d like to hear your questions and feedback.`,
    questions: [
      { prompt: 'How is the project going, according to Laura?', options: ['It is behind schedule.', 'It is on track.', 'It is over budget.', 'It has been stopped.'], answer: 1, explain: 'Overall, the project is on track.' },
      { prompt: 'Why was some testing moved to the next sprint?', options: ['The partner delivered the video service one week late.', 'A tester was ill.', 'The design wasn’t ready.', 'There were too many bugs.'], answer: 0, explain: 'The video service was delivered by the partner one week late.' },
      { prompt: 'What is the new release date?', options: ['The first of December.', 'The fifth of December.', 'The fifteenth of November.', 'The fifteenth of December.'], answer: 3, explain: 'The release date was changed from the first to the fifteenth of December.' },
      { prompt: 'Who will test the video calls?', options: ['Five patients.', 'The marketing team.', 'Three doctors from the clinic.', 'Another development team.'], answer: 2, explain: 'The video calls will be tested with three doctors from the clinic.' },
      { prompt: 'How will patients learn about the new feature?', options: ['From their doctor.', 'By email.', 'From a notification in the app.', 'From an online advert.'], answer: 1, explain: 'It will be announced to all patients by email.' },
    ],
  },
];
