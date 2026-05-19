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
    parentName: 'Ravi Sharma',
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
