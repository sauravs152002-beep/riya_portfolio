export interface Student {
  id: string;
  name: string;
  rollNo: number;
  attendance: number;
  testPerformance: number;
  parentName: string;
  parentPhone: string;
  performance: { math: number; science: number; english: number; social: number };
  behavior: string[];
}

export interface LeaveRequest {
  id: string;
  studentName: string;
  dates: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface ChatPreview {
  id: string;
  parentName: string;
  studentName: string;
  lastMessage: string;
  time: string;
  unread: number;
}

export const MOCK_STUDENTS: Student[] = [
  {
    id: '1',
    name: 'Aarav Sharma',
    rollNo: 1,
    attendance: 92,
    testPerformance: 88,
    parentName: 'Rohan Sharma',
    parentPhone: '+91 9876543210',
    performance: { math: 95, science: 85, english: 90, social: 80 },
    behavior: ['Attentive', 'Helpful']
  },
  {
    id: '2',
    name: 'Diya Patel',
    rollNo: 2,
    attendance: 85,
    testPerformance: 92,
    parentName: 'Meera Patel',
    parentPhone: '+91 9876543211',
    performance: { math: 80, science: 95, english: 88, social: 90 },
    behavior: ['Creative', 'Quiet']
  },
  {
    id: '3',
    name: 'Vaishnavi Singh',
    rollNo: 3,
    attendance: 96,
    testPerformance: 89,
    parentName: 'Ramesh Singh',
    parentPhone: '+91 9876543212',
    performance: { math: 85, science: 90, english: 92, social: 85 },
    behavior: ['Diligent', 'Polite']
  },
  {
    id: '4',
    name: 'Niharika Joshi',
    rollNo: 4,
    attendance: 88,
    testPerformance: 94,
    parentName: 'Anil Joshi',
    parentPhone: '+91 9876543213',
    performance: { math: 92, science: 88, english: 95, social: 94 },
    behavior: ['Talkative', 'Curious']
  },
  {
    id: '5',
    name: 'Rohan Verma',
    rollNo: 5,
    attendance: 90,
    testPerformance: 85,
    parentName: 'Sunil Verma',
    parentPhone: '+91 9876543214',
    performance: { math: 88, science: 84, english: 86, social: 82 },
    behavior: ['Energetic', 'Friendly']
  },
  {
    id: '6',
    name: 'Aditi Rao',
    rollNo: 6,
    attendance: 98,
    testPerformance: 96,
    parentName: 'Kiran Rao',
    parentPhone: '+91 9876543215',
    performance: { math: 94, science: 98, english: 96, social: 95 },
    behavior: ['Focused', 'Leader']
  },
  {
    id: '7',
    name: 'Kabir Das',
    rollNo: 7,
    attendance: 82,
    testPerformance: 78,
    parentName: 'Amit Das',
    parentPhone: '+91 9876543216',
    performance: { math: 75, science: 80, english: 82, social: 76 },
    behavior: ['Playful', 'Distracted']
  },
  {
    id: '8',
    name: 'Sneha Gupta',
    rollNo: 8,
    attendance: 94,
    testPerformance: 91,
    parentName: 'Rajesh Gupta',
    parentPhone: '+91 9876543217',
    performance: { math: 90, science: 92, english: 89, social: 94 },
    behavior: ['Organized', 'Helpful']
  },
  {
    id: '9',
    name: 'Aryan Reddy',
    rollNo: 9,
    attendance: 89,
    testPerformance: 86,
    parentName: 'Vijay Reddy',
    parentPhone: '+91 9876543218',
    performance: { math: 86, science: 88, english: 84, social: 85 },
    behavior: ['Sporty', 'Active']
  },
  {
    id: '10',
    name: 'Ananya Desai',
    rollNo: 10,
    attendance: 95,
    testPerformance: 93,
    parentName: 'Manoj Desai',
    parentPhone: '+91 9876543219',
    performance: { math: 92, science: 94, english: 95, social: 90 },
    behavior: ['Artistic', 'Calm']
  },
  {
    id: '11',
    name: 'Ishaan Iyer',
    rollNo: 11,
    attendance: 91,
    testPerformance: 88,
    parentName: 'Suresh Iyer',
    parentPhone: '+91 9876543220',
    performance: { math: 89, science: 85, english: 88, social: 91 },
    behavior: ['Inquisitive', 'Bright']
  },
  {
    id: '12',
    name: 'Kavya Menon',
    rollNo: 12,
    attendance: 97,
    testPerformance: 95,
    parentName: 'Prakash Menon',
    parentPhone: '+91 9876543221',
    performance: { math: 95, science: 96, english: 94, social: 97 },
    behavior: ['Methodical', 'Polite']
  },
  {
    id: '13',
    name: 'Dev Malhotra',
    rollNo: 13,
    attendance: 86,
    testPerformance: 82,
    parentName: 'Vikram Malhotra',
    parentPhone: '+91 9876543222',
    performance: { math: 84, science: 80, english: 85, social: 78 },
    behavior: ['Humorous', 'Social']
  },
  {
    id: '14',
    name: 'Riya Kapoor',
    rollNo: 14,
    attendance: 93,
    testPerformance: 90,
    parentName: 'Sanjay Kapoor',
    parentPhone: '+91 9876543223',
    performance: { math: 88, science: 91, english: 92, social: 89 },
    behavior: ['Confident', 'Expressive']
  },
  {
    id: '15',
    name: 'Siddharth Pillai',
    rollNo: 15,
    attendance: 87,
    testPerformance: 85,
    parentName: 'Rajeev Pillai',
    parentPhone: '+91 9876543224',
    performance: { math: 85, science: 86, english: 84, social: 85 },
    behavior: ['Reserved', 'Observant']
  },
  {
    id: '16',
    name: 'Prisha Nair',
    rollNo: 16,
    attendance: 99,
    testPerformance: 97,
    parentName: 'Girish Nair',
    parentPhone: '+91 9876543225',
    performance: { math: 98, science: 95, english: 98, social: 96 },
    behavior: ['Excellent', 'Punctual']
  },
  {
    id: '17',
    name: 'Arjun Bhatia',
    rollNo: 17,
    attendance: 84,
    testPerformance: 80,
    parentName: 'Deepak Bhatia',
    parentPhone: '+91 9876543226',
    performance: { math: 80, science: 78, english: 82, social: 81 },
    behavior: ['Active', 'Restless']
  },
  {
    id: '18',
    name: 'Meher Kaur',
    rollNo: 18,
    attendance: 92,
    testPerformance: 89,
    parentName: 'Harpreet Singh',
    parentPhone: '+91 9876543227',
    performance: { math: 88, science: 90, english: 91, social: 86 },
    behavior: ['Friendly', 'Helpful']
  },
  {
    id: '19',
    name: 'Vihaan Mehra',
    rollNo: 19,
    attendance: 90,
    testPerformance: 87,
    parentName: 'Nitin Mehra',
    parentPhone: '+91 9876543228',
    performance: { math: 85, science: 89, english: 86, social: 88 },
    behavior: ['Thoughtful', 'Quiet']
  },
  {
    id: '20',
    name: 'Tara Banerjee',
    rollNo: 20,
    attendance: 94,
    testPerformance: 92,
    parentName: 'Subhas Banerjee',
    parentPhone: '+91 9876543229',
    performance: { math: 91, science: 93, english: 90, social: 95 },
    behavior: ['Creative', 'Leader']
  }
];

export const MOCK_LEAVES: LeaveRequest[] = [
  { id: '1', studentName: 'Aarav Sharma', dates: '12 May - 14 May', reason: 'Family Function', status: 'pending' },
  { id: '2', studentName: 'Diya Patel', dates: '15 May', reason: 'Sick Leave', status: 'approved' }
];

export const MOCK_PTM_SLOTS = [
  { id: '1', time: '10:00 AM', parentName: 'Ravi Sharma', studentName: 'Aarav Sharma', status: 'booked' },
  { id: '2', time: '10:30 AM', parentName: '', studentName: '', status: 'available' }
];

export const MOCK_CHATS: ChatPreview[] = [
  { id: '1', parentName: 'Ravi Sharma', studentName: 'Aarav', lastMessage: 'Will he need extra classes?', time: '08:15 AM', unread: 2 },
  { id: '2', parentName: 'Meera Patel', studentName: 'Diya', lastMessage: 'Thanks for the update!', time: 'Yesterday', unread: 0 }
];
