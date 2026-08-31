export const profile = {
  name: 'Ethan Tizabgar',
  role: 'Mechanical Engineering Student',
  location: 'UC Irvine · Irvine, CA',
  email: 'ethan.tizabgar@gmail.com',
  phone: '(310) 309-7922',
  linkedin: 'https://www.linkedin.com/in/ethan-tizabgar-8a8bb1337',
  bio: 'Mechanical Engineering student at UC Irvine who designs, models, and builds mechanical systems — from first sketch to working prototype. SolidWorks-certified (CSWA) with hands-on experience in structural design, iterative prototyping, and teaching engineering fundamentals.',
  focus: ['CAD Design', 'Prototyping', 'FEA Analysis'],
  photo: '/profilephoto.jpg',
}

export type Project = {
  id: string
  index: string
  title: string
  category: string
  image: string
  images?: { src: string; alt: string; caption: string }[]
  problem: string
  analysis: { label: string; value: string }[]
  prototype: string
  tools: string[]
}

export const projects: Project[] = [
  {
    id: 'wildfire-water-tank',
    index: '01',
    title: 'Hilltop Wildfire-Response Water Tank',
    category: 'Structural Design · Student Design Project',
    image: '/projects/water-tank-cad.png',
    problem:
      'Hillside neighborhoods in Los Angeles needed a way to capture rainwater and autonomously target nearby fires, all while staying stable on steep, uneven terrain.',
    analysis: [
      { label: 'Focus', value: 'Load-Bearing Legs' },
      { label: 'Terrain', value: 'Uneven Slope' },
      { label: 'Method', value: 'Iterative CAD' },
    ],
    prototype:
      'Developed and iterated adjustable support-leg solutions in SolidWorks, refining CAD models and prototypes against testing results and instructor feedback until the system held stable under anticipated loads.',
    tools: ['SolidWorks', '3D Modeling', 'Design Validation'],
  },
  {
    id: 'go-kart-build',
    index: '02',
    title: 'Functional Go-Kart Design & Build',
    category: 'Fabrication · UCLA Summer Program',
    image: '/go-kart website photo.JPG',
    problem:
      'An intensive hands-on mechanical engineering course tasked a small team with designing, building, and testing a functional go-kart under a tight timeline.',
    analysis: [
      { label: 'Role', value: 'Team Lead' },
      { label: 'Phases', value: 'Concept → Test' },
      { label: 'Focus', value: 'Drivetrain / Frame' },
    ],
    prototype:
      'Led concept development, SolidWorks modeling, material selection, and assembly — then troubleshot mechanical failures under pressure to optimize drivetrain and frame components and improve overall vehicle performance.',
    tools: ['SolidWorks', 'Fabrication', 'Load Analysis'],
  },
  {
    id: 'robotic-hand-emg',
    index: '03',
    title: 'Robotic Hand & EMG Gesture Control',
    category: 'Robotics · Santa Monica College Team Project',
    image: '/projects/robotic-hand-photo.jpg',
    images: [
      {
        src: '/projects/robotic-hand-photo.jpg',
        alt: '3D-printed tendon-driven robotic hand with articulated fingers',
        caption: 'InMoov-style 3D-printed hand with servo-driven tendons',
      },
      {
        src: '/projects/emg-rps-game.jpg',
        alt: 'EMG muscle sensor on forearm driving a Rock-Paper-Scissors demo on a laptop via Arduino',
        caption: 'MyoWare 2.0 EMG + Arduino running the Rock-Paper-Scissors demo',
      },
    ],
    problem:
      'A team project to build a tendon-driven robotic hand capable of reproducing human gestures, then drive it with real-time muscle-signal input.',
    analysis: [
      { label: 'Actuation', value: 'Tendon-Driven' },
      { label: 'Control', value: 'EMG Signal' },
      { label: 'Build', value: 'Servo + Arduino' },
    ],
    prototype:
      'Assembled an InMoov-style 3D-printed hand with servo-driven tendons, using a MyoWare 2.0 muscle sensor and Arduino Uno R4 WiFi to calibrate and classify gestures for a working Rock-Paper-Scissors demo.',
    tools: ['Arduino', 'MyoWare 2.0 EMG', '3D Printing', 'Embedded Systems'],
  },
]

export const skillGroups = [
  {
    title: 'CAD / Modeling',
    skills: ['SolidWorks', 'CSWA Certified', 'Part Modeling', 'Assemblies', 'Engineering Drawings', 'Technical Drafting'],
  },
  {
    title: 'Simulation & Analysis',
    skills: ['Statics', 'Free-Body Diagrams', 'Equilibrium Analysis', 'Load Analysis', 'Design Validation'],
  },
  {
    title: 'Fabrication',
    skills: ['Iterative Prototyping', 'Material Selection', 'Assembly', 'Troubleshooting', 'Performance Testing'],
  },
  {
    title: 'Programming',
    skills: ['C++', 'Problem Solving', 'Engineering Design Process'],
  },
]

export type TimelineItem = {
  type: 'work' | 'education'
  title: string
  org: string
  period: string
  points: string[]
}

export const timeline: TimelineItem[] = [
  {
    type: 'work',
    title: 'Supplemental Instructor — Statics & Engineering Design',
    org: 'Santa Monica College',
    period: 'Sep 2025 ��� Present',
    points: [
      'Provide academic support for a statics and engineering design course, with emphasis on SolidWorks modeling and technical drafting.',
      'Guide students through free-body diagrams, equilibrium analysis, part modeling, assemblies, and engineering drawings.',
      'Develop practice problems, review sheets, and exam-prep resources with the instructor, and lead structured review sessions.',
    ],
  },
  {
    type: 'work',
    title: 'Student Design Project',
    org: 'Santa Monica College',
    period: 'Jan 2025 — Feb 2025',
    points: [
      'Designed a hilltop wildfire-response water tank that collects rainwater and autonomously targets nearby fires.',
      'Led the structural design of load-bearing support legs for uneven terrain, balancing stability, weight, and safety.',
      'Built and iterated multiple SolidWorks CAD models and prototypes based on testing and feedback.',
    ],
  },
  {
    type: 'work',
    title: 'College Summer Program — Go-Kart Design',
    org: 'UC Los Angeles',
    period: 'Jul 2023 — Aug 2023',
    points: [
      'Designed, built, and tested functional go-karts in a hands-on mechanical engineering course.',
      'Led a small team through concept development, SolidWorks modeling, material selection, and assembly.',
      'Troubleshot mechanical failures to optimize drivetrain and frame components under pressure.',
    ],
  },
  {
    type: 'work',
    title: 'Swim Instructor',
    org: 'Westside Aquatics',
    period: 'Jul 2022 — Jan 2025',
    points: [
      'Instructed children ages 2–13 in swimming skills, adapting strategies to a wide range of developmental stages.',
      'Built individualized lesson plans and maintained a safe, supportive learning environment.',
    ],
  },
  {
    type: 'education',
    title: 'B.S. Mechanical Engineering',
    org: 'UC Irvine',
    period: 'Current',
    points: [
      'Pursuing a B.S. in Mechanical Engineering with a focus on design and structural analysis.',
    ],
  },
  {
    type: 'education',
    title: 'Mechanical Engineering (Sophomore)',
    org: 'Santa Monica College',
    period: 'Completed',
    points: [
      'Cumulative GPA 3.855 / 4.00.',
      'Coursework: Engineering Graphics and Design, Statics · SolidWorks (Passed CSWA) · C++.',
    ],
  },
]
