// Single source of truth: edit content here.
export const profile = {
  name: 'ADARSH MISHRA',
  roles: ['Full-Stack Developer', 'React • Node • FastAPI', 'Problem solver'],
  bio: 'Software development enthusiast building full-stack web apps with React, Node.js, Express, MongoDB, MySQL, FastAPI and PostgreSQL. Passionate about scalable software, problem-solving and collaboration.',
  stats: [['3+', 'Major projects'], ['Intern', 'Full-Stack'], ['2026', 'B.E. CSE']],
  email: 'adarshpmishra284@gmail.com', phone: '8180062942',
  github: 'https://github.com/Adarsh28m',
  linkedin: 'https://www.linkedin.com/in/adarsh-mishra-93907b33b/',
  resume: '/resume.pdf',
  available: true, // set to false to hide the badge
  availableText: 'Available for work',
  formspreeId: '', // paste your Formspree form ID (the part after /f/) to enable the form
}
export const sections = [
  { id: 'hero', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' }, { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' }, { id: 'contact', label: 'Contact' },
]
export const skills = {
  Languages: ['Python', 'JavaScript', 'HTML', 'CSS'],
  Frontend: ['React.js', 'Tailwind CSS', 'Bootstrap', 'React Query', 'Redux Toolkit'],
  Backend: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs'],
  Databases: ['MongoDB', 'MySQL', 'PostgreSQL'],
  Tools: ['Docker', 'AWS', 'Nginx', 'Git', 'GitHub', 'Socket.io'],
  'CS Fundamentals': ['DBMS', 'JWT Auth', 'OOPs', 'Computer Networks'],
}
export const projects = [
  { name: 'FoodHub', desc: 'Full-stack food delivery platform with role-based access, real-time order tracking via WebSockets, restaurant/menu management, cart & checkout, payments.', stack: ['React.js', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Redux Toolkit', 'JWT', 'Docker'], github: 'https://github.com/Adarsh28m/Foodhub', live: 'https://foodhub-one-lime.vercel.app/' },
  { name: 'Residential Welfare & Management Platform', desc: 'Acknowledged by a Government Aashram School. Multi-school platform with REST APIs, authentication, hostel and attendance management.', stack: ['Java', 'Spring Boot', 'React.js', 'Hibernate', 'Spring Security (JWT)'], github: 'https://github.com/Adarsh28m/Aashram_School_Welfare' },
  { name: 'Intentify-AI', desc: 'AI-powered writing assistant for prompt enhancement, grammar correction and sentence rewriting.', stack: ['React.js', 'FastAPI', 'PostgreSQL'], github: 'https://github.com/Adarsh28m/Intentify-AI' },
  { name: 'LiveMesh', desc: 'Real-time chat and communication platform.', stack: [], github: 'https://github.com/Adarsh28m/LiveMesh' },
]
export const experience = [{ role: 'Full Stack Developer Intern', org: 'Anky.ai, Thane, Maharashtra', period: 'May 2026 – June 2026', points: ['Designed and developed scalable full-stack apps with React.js, FastAPI and PostgreSQL.', 'Built and integrated REST APIs, JWT authentication, NLP and AI-powered features.'] }]
export const education = { degree: 'B.E. Computer Science and Engineering', school: 'Mumbai University, Theem College of Engineering, Boisar', period: '2022–2026', cgpi: '8.1/10',
  earlier: [['HSC, Science: Adarsh Education Society, Nallasopara', '62%', '2022'], ['SSC: Mother Mary English High School, Vasai', '82%', '2020']],
  certs: ['Python Programming Complete Course (Udemy)', 'JavaScript Complete Course (Udemy)', 'Green Skills and Artificial Intelligence (Skill4Future)'] }
