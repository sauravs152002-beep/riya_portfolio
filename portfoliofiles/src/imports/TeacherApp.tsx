import React, { useState } from 'react';
import {
  Menu, CalendarCheck, Users, MessageSquare, Video, ClipboardList, X, LogOut, UserCircle,
  CheckCircle2, BellRing, Home, Calendar, Clock, User, Plus, Loader2, Search, Send,
  ArrowLeft, Check, ChevronRight, BookOpen, Activity, Phone, ArrowRight
} from 'lucide-react';
import { MOCK_STUDENTS, MOCK_LEAVES, MOCK_PTM_SLOTS, MOCK_CHATS, Student, LeaveRequest, ChatPreview } from './mockData';
import { toast } from 'sonner';

type Screen = 'login' | 'dashboard' | 'attendance' | 'ptm' | 'messages' | 'chat' | 'leaves' | 'students' | 'studentProfile';

export function TeacherApp() {
  const [screen, setScreen] = useState<Screen>('login');
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

  const navigate = (s: Screen, opts?: { studentId?: string; chatId?: string }) => {
    if (opts?.studentId) setSelectedStudentId(opts.studentId);
    if (opts?.chatId) setSelectedChatId(opts.chatId);
    setScreen(s);
  };

  return (
    <div className="h-full w-full flex flex-col relative overflow-hidden">
      {screen === 'login' && <LoginScreen navigate={navigate} />}
      {screen === 'dashboard' && <DashboardScreen navigate={navigate} />}
      {screen === 'attendance' && <AttendanceScreen navigate={navigate} />}
      {screen === 'ptm' && <PTMScreen navigate={navigate} />}
      {screen === 'messages' && <MessagesScreen navigate={navigate} />}
      {screen === 'chat' && <ChatScreen navigate={navigate} chatId={selectedChatId} />}
      {screen === 'leaves' && <LeavesScreen navigate={navigate} />}
      {screen === 'students' && <StudentsScreen navigate={navigate} />}
      {screen === 'studentProfile' && <StudentProfileScreen navigate={navigate} studentId={selectedStudentId} />}
    </div>
  );
}

// ---- LOGIN ----
function LoginScreen({ navigate }: { navigate: (s: Screen) => void }) {
  const [code, setCode] = useState('');
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length >= 4) navigate('dashboard');
  };
  return (
    <div className="flex flex-col h-full bg-[#F8F9FA] px-8 py-12 relative overflow-hidden">
      <div className="absolute top-[-30px] right-[-30px] w-48 h-48 bg-[#FFB067] rounded-full opacity-10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-[-40px] w-64 h-64 bg-[#8A73FF] rounded-full opacity-10 blur-3xl pointer-events-none" />
      <div className="flex-1 flex flex-col justify-center relative z-10">
        <div className="w-16 h-16 bg-white rounded-[20px] flex items-center justify-center mb-8 shadow-[0_8px_24px_rgba(138,115,255,0.12)]">
          <BookOpen size={28} className="text-[#8A73FF]" />
        </div>
        <h1 className="text-[32px] font-semibold text-[#1C1C1E] tracking-tight mb-2">Welcome.</h1>
        <p className="text-[#8E8E93] text-[15px] font-medium leading-relaxed">
          Enter your school code to access your classroom dashboard and updates.
        </p>
      </div>
      <div className="flex-1 flex flex-col justify-end pb-12 relative z-10">
        <form onSubmit={handleLogin} className="flex flex-col bg-white p-6 rounded-[28px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-50">
          <div className="mb-8 cursor-pointer" onClick={() => setCode('84920')}>
            <label className="text-xs font-semibold text-[#8E8E93] mb-2 block tracking-wide uppercase cursor-pointer">School Code</label>
            <input type="text" placeholder="e.g. 84920" value={code} onChange={(e) => setCode(e.target.value)}
              className="w-full bg-[#F8F9FA] border border-gray-100 text-[#1C1C1E] rounded-[16px] py-4 px-4 font-semibold text-lg outline-none focus:border-[#8A73FF] focus:ring-1 focus:ring-[#8A73FF] transition-all placeholder:font-medium placeholder:text-[#C7C7CC] cursor-pointer"
              maxLength={8}
              readOnly
            />
          </div>
          <button type="submit" disabled={code.length < 4}
            className={`w-full py-4 rounded-[16px] font-semibold text-sm flex justify-center items-center transition-all duration-300 ${
              code.length >= 4 ? 'bg-[#8A73FF] text-white shadow-lg shadow-[#8A73FF]/30 active:scale-95' : 'bg-gray-100 text-[#C7C7CC] cursor-not-allowed'
            }`}
          >
            Continue <ArrowRight size={18} className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
}

// ---- DASHBOARD ----
function DashboardScreen({ navigate }: { navigate: (s: Screen) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pendingLeaves = MOCK_LEAVES.filter(l => l.status === 'pending').length;
  const todayPTM = MOCK_PTM_SLOTS.filter(p => p.date === 'Today').length;
  const unreadMessages = MOCK_CHATS.reduce((acc, chat) => acc + chat.unread, 0);

  return (
    <div className="flex flex-col h-full bg-[#F8F9FA] relative overflow-hidden">
      <header className="px-6 pt-[68px] pb-5 flex justify-between items-center relative z-20 shrink-0">
        <div className="flex items-center space-x-4">
          <button onClick={() => setMenuOpen(true)} className="w-[42px] h-[42px] rounded-[12px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-gray-100 flex justify-center items-center">
            <Menu size={20} className="text-[#1C1C1E]" />
          </button>
          <div className="flex flex-col">
            <h1 className="text-[20px] font-bold text-[#1C1C1E] tracking-tight leading-none mb-1">Hi! Anjali S.</h1>
            <span className="text-[13px] font-medium text-[#8E8E93] leading-none">Class 5A</span>
          </div>
        </div>
        <div className="w-[42px] h-[42px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-gray-100 rounded-[12px] flex items-center justify-center text-[#8A73FF] font-bold text-[16px]">A</div>
      </header>

      <div className="px-6 py-4 flex-1 flex flex-col gap-[14px] overflow-y-auto pb-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {[
          { icon: CalendarCheck, label: 'Mark Attendance', sub: '12 Students', badge: 'Urgent', iconBg: 'bg-[#F4F0FF]', iconColor: 'text-[#8A73FF]', badgeClass: 'text-white bg-[#8A73FF] shadow-[0_4px_10px_rgba(138,115,255,0.3)]', screen: 'attendance' as Screen },
          { icon: Video, label: 'PTM Slots', sub: 'Manage setup', badge: todayPTM > 0 ? `${todayPTM} Today` : '', iconBg: 'bg-[#F0F5FF]', iconColor: 'text-[#6BA4FF]', badgeClass: 'text-[#6BA4FF] bg-[#F0F5FF]', screen: 'ptm' as Screen },
          { icon: MessageSquare, label: 'Messages', sub: 'Parent chats', badge: unreadMessages > 0 ? `${unreadMessages} Unread` : '', iconBg: 'bg-[#FFF4EC]', iconColor: 'text-[#FA9A50]', badgeClass: 'text-white bg-[#FA9A50] shadow-[0_4px_10px_rgba(250,154,80,0.3)]', screen: 'messages' as Screen },
          { icon: ClipboardList, label: 'Leaves', sub: 'Requests', badge: pendingLeaves > 0 ? `${pendingLeaves} Pending` : '', iconBg: 'bg-[#FFF0F0]', iconColor: 'text-[#FF7A7A]', badgeClass: 'text-[#FF7A7A] bg-[#FFF0F0]', screen: 'leaves' as Screen },
          { icon: Users, label: 'Students', sub: 'View full roster', badge: '', iconBg: 'bg-[#EFFFF8]', iconColor: 'text-[#65D4B0]', badgeClass: '', screen: 'students' as Screen },
        ].map((card) => (
          <button key={card.label} onClick={() => navigate(card.screen)}
            className="flex-1 relative bg-white border border-gray-100 rounded-[24px] flex items-center p-4 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all overflow-hidden group text-left"
          >
            <div className={`w-[68px] h-[68px] rounded-[20px] ${card.iconBg} flex items-center justify-center mr-5 shrink-0 transition-transform group-hover:scale-105`}>
              <card.icon size={32} className={card.iconColor} />
            </div>
            <div className="flex-1 flex flex-col justify-center h-full py-1">
              <h2 className="text-[18px] font-bold text-[#1C1C1E] leading-tight mb-1">{card.label}</h2>
              <div className="flex items-center justify-between mt-auto">
                <p className="text-[#8E8E93] text-[12px] font-medium">{card.sub}</p>
                {card.badge && <span className={`text-[10px] font-bold px-3 py-1 rounded-[8px] ${card.badgeClass}`}>{card.badge}</span>}
              </div>
            </div>
          </button>
        ))}
      </div>

      {menuOpen && (
        <div className="absolute inset-0 z-50 flex">
          <div className="absolute inset-0 bg-[#1C1C1E]/20 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          <div className="absolute top-0 left-0 bottom-0 w-[80%] max-w-sm bg-[#F8F9FA] shadow-2xl flex flex-col">
            <div className="px-6 pb-6 pt-[68px] border-b border-gray-100 flex justify-between items-start bg-white">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-[#F4F0FF] rounded-[16px] flex items-center justify-center text-[#8A73FF]"><UserCircle size={28} /></div>
                <div><h2 className="text-[18px] font-bold text-[#1C1C1E]">Anjali Sharma</h2><p className="text-[12px] text-[#8E8E93] font-medium">Class 5A Teacher</p></div>
              </div>
              <button onClick={() => setMenuOpen(false)} className="w-[32px] h-[32px] bg-gray-50 rounded-[8px] flex items-center justify-center text-[#8E8E93]"><X size={18} /></button>
            </div>
            <div className="flex-1 p-5 space-y-2 overflow-y-auto [&::-webkit-scrollbar]:hidden">
              <button className="flex items-center w-full py-4 px-5 text-[#1C1C1E] font-semibold bg-white rounded-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.02)] text-[14px]"><UserCircle size={20} className="mr-4 text-[#8A73FF]" /> Account Settings</button>
              <button className="flex items-center w-full py-4 px-5 text-[#1C1C1E] font-semibold bg-white rounded-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.02)] text-[14px]"><CalendarCheck size={20} className="mr-4 text-[#8A73FF]" /> Academic Calendar</button>
            </div>
            <div className="p-5">
              <button onClick={() => { setMenuOpen(false); navigate('login'); }} className="flex items-center justify-center w-full py-4 bg-white text-[#FF7A7A] rounded-[16px] font-bold shadow-[0_4px_12px_rgba(0,0,0,0.02)] text-[14px]"><LogOut size={18} className="mr-2" /> Log Out</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ---- ATTENDANCE ----
function AttendanceScreen({ navigate }: { navigate: (s: Screen) => void }) {
  const [students] = useState<Student[]>(MOCK_STUDENTS);
  const [attendance, setAttendance] = useState<Record<string, 'present' | 'absent'>>(
    MOCK_STUDENTS.reduce((acc, s) => ({ ...acc, [s.id]: 'present' }), {} as Record<string, 'present' | 'absent'>)
  );
  const [filter, setFilter] = useState<'all' | 'present' | 'absent'>('all');
  const [submitted, setSubmitted] = useState(false);
  const [notifying, setNotifying] = useState(false);

  const handleToggle = (id: string, status: 'present' | 'absent') => setAttendance(prev => ({ ...prev, [id]: status }));

  const handleNotify = () => {
    const absentees = students.filter(s => attendance[s.id] === 'absent');
    if (absentees.length === 0) { toast.error('No absent students to notify.'); return; }
    setNotifying(true);
    toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
      loading: `Sending notifications to parents of ${absentees.length} kids...`,
      success: () => { setNotifying(false); return 'Notifications sent successfully!'; },
      error: 'Failed to send notifications.',
    });
  };

  const handleSubmit = () => { setSubmitted(true); setTimeout(() => navigate('dashboard'), 1500); };

  const totalCount = students.length;
  const presentCount = Object.values(attendance).filter(s => s === 'present').length;
  const absentCount = Object.values(attendance).filter(s => s === 'absent').length;
  const filteredStudents = students.filter(s => filter === 'all' ? true : attendance[s.id] === filter);

  const today = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-[#F8F9FA] px-6 text-center">
        <div className="w-[80px] h-[80px] bg-[#F4F0FF] rounded-full flex items-center justify-center mb-6 shadow-[0_8px_24px_rgba(138,115,255,0.15)]"><CheckCircle2 size={40} className="text-[#8A73FF]" /></div>
        <h2 className="text-[24px] font-bold text-[#1C1C1E] mb-2">Done!</h2>
        <p className="text-[#8E8E93] text-[14px]">Attendance successfully recorded.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#F8F9FA] relative overflow-hidden">
      <header className="px-6 pt-[68px] pb-4 shrink-0 flex items-center justify-between relative z-20">
        <div><h1 className="text-[20px] font-bold text-[#1C1C1E] tracking-tight leading-none">Attendance</h1><p className="text-[12px] font-medium text-[#8E8E93] mt-1.5 uppercase tracking-wider">{today}</p></div>
        <button onClick={() => navigate('dashboard')} className="h-[38px] px-5 rounded-full bg-white border border-[#E5E5EA] shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#1C1C1E] active:scale-95 transition-transform"><span className="text-[14px] font-semibold tracking-wide">Home</span></button>
      </header>

      <div className="px-6 grid grid-cols-3 gap-3 mb-4 shrink-0 relative z-20">
        <button onClick={() => setFilter('all')} className={`flex flex-col items-center justify-center py-2.5 rounded-[18px] border transition-all ${filter === 'all' ? 'bg-[#8A73FF] border-[#8A73FF] text-white shadow-[0_4px_16px_rgba(138,115,255,0.3)] -translate-y-0.5' : 'bg-white border-gray-100 text-[#1C1C1E] shadow-[0_2px_8px_rgba(0,0,0,0.02)]'}`}>
          <span className={`text-[10px] font-bold uppercase tracking-widest mb-0.5 ${filter === 'all' ? 'text-white/80' : 'text-[#8E8E93]'}`}>Total</span><span className="text-[20px] font-bold leading-tight">{totalCount}</span>
        </button>
        <button onClick={() => setFilter('present')} className={`flex flex-col items-center justify-center py-2.5 rounded-[18px] border transition-all ${filter === 'present' ? 'bg-[#65D4B0] border-[#65D4B0] text-white shadow-[0_4px_16px_rgba(101,212,176,0.3)] -translate-y-0.5' : 'bg-[#EFFFF8] border-[#EFFFF8] text-[#65D4B0]'}`}>
          <span className={`text-[10px] font-bold uppercase tracking-widest mb-0.5 ${filter === 'present' ? 'text-white/80' : 'text-[#56C5A1]'}`}>Present</span><span className="text-[20px] font-bold leading-tight">{presentCount}</span>
        </button>
        <button onClick={() => setFilter('absent')} className={`flex flex-col items-center justify-center py-2.5 rounded-[18px] border transition-all ${filter === 'absent' ? 'bg-[#FF7A7A] border-[#FF7A7A] text-white shadow-[0_4px_16px_rgba(255,122,122,0.3)] -translate-y-0.5' : 'bg-[#FFF0F0] border-[#FFF0F0] text-[#FF7A7A]'}`}>
          <span className={`text-[10px] font-bold uppercase tracking-widest mb-0.5 ${filter === 'absent' ? 'text-white/80' : 'text-[#FF7A7A]'}`}>Absent</span><span className="text-[20px] font-bold leading-tight">{absentCount}</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 space-y-[8px] pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {filteredStudents.length === 0 ? <p className="text-center text-[#8E8E93] text-[13px] font-medium py-4">No students in this category.</p> :
          filteredStudents.map(student => (
            <div key={student.id} className="bg-white rounded-[16px] py-[8px] px-[12px] flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-gray-50">
              <div className="flex items-center space-x-3 ml-1">
                <span className="text-[11px] font-bold text-[#8E8E93] w-[14px]">{student.rollNo}.</span>
                <h3 className="text-[14px] font-bold text-[#1C1C1E] truncate max-w-[120px]">{student.name}</h3>
              </div>
              <div className="flex bg-[#F8F9FA] rounded-[12px] p-[3px] border border-gray-100">
                <button onClick={() => handleToggle(student.id, 'present')} className={`w-[40px] h-[30px] flex items-center justify-center rounded-[8px] text-[12px] font-bold transition-all ${attendance[student.id] === 'present' ? 'bg-[#65D4B0] text-white shadow-sm' : 'text-[#8E8E93]'}`}>P</button>
                <button onClick={() => handleToggle(student.id, 'absent')} className={`w-[40px] h-[30px] flex items-center justify-center rounded-[8px] text-[12px] font-bold transition-all ${attendance[student.id] === 'absent' ? 'bg-[#FF7A7A] text-white shadow-sm' : 'text-[#8E8E93]'}`}>A</button>
              </div>
            </div>
          ))
        }
      </div>

      <div className="sticky bottom-0 left-0 right-0 p-5 pb-10 bg-gradient-to-t from-[#F8F9FA] via-[#F8F9FA] to-[#F8F9FA]/0 z-30 space-y-3 shrink-0">
        {absentCount > 0 && (
          <button onClick={handleNotify} disabled={notifying} className="w-full py-[12px] bg-white text-[#FF7A7A] border border-[#FF7A7A]/20 rounded-[16px] font-bold shadow-[0_4px_12px_rgba(255,122,122,0.1)] active:scale-[0.98] transition-all text-[14px] flex items-center justify-center space-x-2 disabled:opacity-50">
            <BellRing size={18} /><span>Notify Parents of {absentCount} Kids</span>
          </button>
        )}
        <button onClick={handleSubmit} className="w-full py-[16px] bg-[#8A73FF] text-white rounded-[16px] font-bold shadow-[0_8px_20px_rgba(138,115,255,0.3)] active:scale-[0.98] transition-all text-[15px]">Submit Attendance</button>
      </div>
    </div>
  );
}

// ---- PTM ----
function PTMScreen({ navigate }: { navigate: (s: Screen) => void }) {
  const [slots] = useState(MOCK_PTM_SLOTS);
  const [meetingStarted, setMeetingStarted] = useState<string | null>(null);
  const [selectedSlots, setSelectedSlots] = useState<string[]>(['10:00', '10:15', '10:30', '11:00']);
  const availableSlots = ['10:00', '10:15', '10:30', '10:45', '11:00', '11:15', '11:30', '11:45'];
  const [showAllSlots, setShowAllSlots] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [published, setPublished] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 3, 18));
  const [showCalendar, setShowCalendar] = useState(false);

  const formatDate = (date: Date) => date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  const generateCalendarDays = () => {
    const days: React.ReactNode[] = [];
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let i = 0; i < firstDay; i++) days.push(<div key={`empty-${i}`} className="w-8 h-8" />);
    for (let i = 1; i <= daysInMonth; i++) {
      const isSelected = selectedDate.getDate() === i;
      days.push(
        <button key={`day-${i}`} onClick={() => { setSelectedDate(new Date(year, month, i)); setShowCalendar(false); }}
          className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold transition-colors ${isSelected ? 'bg-[#6BA4FF] text-white shadow-sm' : 'text-[#1C1C1E] hover:bg-[#F0F5FF] hover:text-[#6BA4FF]'}`}
        >{i}</button>
      );
    }
    return days;
  };

  const toggleSlot = (time: string) => {
    setSelectedSlots(prev => prev.includes(time) ? prev.filter(t => t !== time) : [...prev, time].sort());
    setPublished(false);
  };

  const handlePublish = () => {
    if (selectedSlots.length === 0) return;
    setIsPublishing(true);
    setTimeout(() => { setIsPublishing(false); setPublished(true); setTimeout(() => setPublished(false), 3000); }, 1000);
  };

  const startMeeting = (id: string) => {
    setMeetingStarted(id);
    setTimeout(() => { toast.success("Meeting started!"); setMeetingStarted(null); }, 1500);
  };

  return (
    <div className="flex flex-col h-full bg-[#F8F9FA] relative overflow-hidden">
      <header className="px-6 pt-[68px] pb-5 shrink-0 flex items-center justify-between relative z-20">
        <h1 className="text-[20px] font-bold text-[#1C1C1E] tracking-tight">PTM Meetings</h1>
        <button onClick={() => navigate('dashboard')} className="h-[38px] px-5 rounded-full bg-white border border-[#E5E5EA] shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#1C1C1E] active:scale-95 transition-transform"><span className="text-[14px] font-semibold tracking-wide">Home</span></button>
      </header>

      <div className="flex-1 overflow-y-auto px-6 py-2 space-y-[24px] pb-[100px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <section className="bg-white rounded-[24px] p-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-gray-50">
          <h2 className="text-[12px] font-bold text-[#8E8E93] uppercase tracking-widest mb-[16px]">Set Availability</h2>
          <div className="space-y-[16px]">
            <div className="flex items-center justify-between border-b border-gray-100 pb-[16px] relative">
              <div><label className="block text-[10px] font-bold text-[#C7C7CC] uppercase tracking-widest mb-[6px]">Date</label><span className="text-[15px] font-bold text-[#1C1C1E]">{formatDate(selectedDate)}</span></div>
              <button onClick={() => setShowCalendar(!showCalendar)} className={`w-[44px] h-[44px] border rounded-[14px] flex items-center justify-center transition-colors active:scale-95 cursor-pointer z-30 relative ${showCalendar ? 'bg-[#6BA4FF] text-white border-[#6BA4FF] shadow-lg shadow-[#6BA4FF]/20' : 'bg-[#F0F5FF] text-[#6BA4FF] border-gray-50 shadow-[0_4px_12px_rgba(107,164,255,0.15)]'}`}>
                <Calendar size={20} />
              </button>
              {showCalendar && (
                <div className="absolute top-[60px] right-0 bg-white border border-[#E5E5EA] shadow-[0_12px_40px_rgba(0,0,0,0.12)] rounded-[20px] p-[16px] w-[280px] z-50">
                  <div className="flex items-center justify-between mb-[16px]"><span className="text-[14px] font-bold text-[#1C1C1E]">{selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</span></div>
                  <div className="grid grid-cols-7 gap-y-[12px] gap-x-[4px] justify-items-center">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (<div key={`head-${i}`} className="text-[10px] font-bold text-[#C7C7CC] uppercase w-8 text-center">{day}</div>))}
                    {generateCalendarDays()}
                  </div>
                </div>
              )}
            </div>
            <div>
              <label className="block text-[10px] font-bold text-[#C7C7CC] uppercase tracking-widest mb-[10px]">15-Min Slots</label>
              <div className="grid grid-cols-3 gap-[10px]">
                {(showAllSlots ? availableSlots : availableSlots.slice(0, 5)).map(time => (
                  <div key={time} onClick={() => toggleSlot(time)} className={`text-center py-[10px] rounded-[12px] text-[13px] font-bold transition-all cursor-pointer active:scale-95 ${selectedSlots.includes(time) ? 'bg-[#F0F5FF] border border-[#E6F0FF] text-[#6BA4FF] shadow-[0_2px_8px_rgba(107,164,255,0.1)]' : 'bg-[#F8F9FA] border border-gray-100 text-[#8E8E93]'}`}>{time}</div>
                ))}
                {!showAllSlots && <div onClick={() => setShowAllSlots(true)} className="border border-dashed border-[#C7C7CC] text-[#8E8E93] flex items-center justify-center rounded-[12px] text-[13px] font-bold bg-[#F8F9FA] py-[10px] cursor-pointer active:scale-95"><Plus size={18} /></div>}
              </div>
            </div>
            <button onClick={handlePublish} disabled={selectedSlots.length === 0 || isPublishing || published}
              className={`w-full mt-[8px] py-[14px] rounded-[16px] font-bold text-[14px] transition-all flex items-center justify-center ${selectedSlots.length === 0 ? 'bg-[#F8F9FA] text-[#C7C7CC] border border-gray-100 cursor-not-allowed' : published ? 'bg-[#EFFFF8] text-[#65D4B0] border border-[#DDFDF0]' : 'bg-[#6BA4FF] text-white shadow-[0_8px_20px_rgba(107,164,255,0.3)] active:scale-95'}`}
            >
              {isPublishing ? <><Loader2 size={18} className="mr-2 animate-spin" /> Publishing...</> : published ? <><CheckCircle2 size={18} className="mr-2" /> Published</> : `Publish ${selectedSlots.length} Slot${selectedSlots.length !== 1 ? 's' : ''}`}
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-[12px] font-bold text-[#8E8E93] uppercase tracking-widest mb-[12px]">Upcoming Meetings</h2>
          <div className="space-y-[14px]">
            {slots.map(slot => (
              <div key={slot.id} className="bg-white rounded-[24px] p-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-gray-50">
                <div className="flex justify-between items-start mb-[14px]">
                  <div><h3 className="font-bold text-[16px] text-[#1C1C1E] leading-tight mb-[6px]">{slot.studentName}</h3><p className="text-[11px] text-[#8E8E93] font-bold uppercase tracking-wider flex items-center"><User size={12} className="mr-[6px] text-[#6BA4FF]" /> {slot.parentName}</p></div>
                  <span className={`text-[10px] font-bold px-[12px] py-[6px] rounded-[10px] uppercase tracking-wider border shadow-sm ${slot.date === 'Today' ? 'bg-[#F0F5FF] text-[#6BA4FF] border-[#E6F0FF]' : 'bg-[#F8F9FA] text-[#8E8E93] border-gray-100'}`}>{slot.date}</span>
                </div>
                <div className="flex items-center text-[13px] font-bold text-[#4A4A4A] mb-[18px] bg-[#F8F9FA] border border-gray-100 w-fit px-[12px] py-[8px] rounded-[12px]"><Clock size={14} className="mr-[8px] text-[#8E8E93]" />{slot.time}</div>
                <button onClick={() => startMeeting(slot.id)} disabled={slot.date !== 'Today'}
                  className={`w-full flex justify-center items-center rounded-[16px] py-[14px] text-[14px] font-bold transition-all border ${slot.date === 'Today' ? meetingStarted === slot.id ? 'bg-[#EFFFF8] text-[#65D4B0] border-[#DDFDF0]' : 'bg-[#6BA4FF] text-white border-[#6BA4FF] shadow-[0_4px_16px_rgba(107,164,255,0.3)]' : 'bg-[#F8F9FA] text-[#C7C7CC] border-gray-100 cursor-not-allowed'}`}
                >
                  {meetingStarted === slot.id ? <><CheckCircle2 size={18} className="mr-2" /> Connecting...</> : <><Video size={18} className="mr-2" /> Join Call</>}
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// ---- MESSAGES ----
function MessagesScreen({ navigate }: { navigate: (s: Screen, opts?: any) => void }) {
  const [chats, setChats] = useState<ChatPreview[]>(MOCK_CHATS);
  return (
    <div className="flex flex-col h-full bg-[#F8F9FA] relative overflow-hidden">
      <header className="px-6 pt-[68px] pb-5 shrink-0 flex flex-col relative z-20">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[20px] font-bold text-[#1C1C1E] tracking-tight">Messages</h1>
          <button onClick={() => navigate('dashboard')} className="h-[38px] px-5 rounded-full bg-white border border-[#E5E5EA] shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#1C1C1E] active:scale-95 transition-transform"><span className="text-[14px] font-semibold tracking-wide">Home</span></button>
        </div>
        <div className="relative">
          <Search size={20} className="absolute left-[20px] top-1/2 -translate-y-1/2 text-[#8E8E93]" />
          <input type="text" placeholder="Search messages..." className="w-full bg-white border border-gray-100 text-[#1C1C1E] text-[14px] font-bold rounded-[16px] py-[16px] pl-[52px] pr-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.02)] outline-none focus:border-[#FA9A50] transition-all placeholder:text-[#C7C7CC] placeholder:font-medium" />
        </div>
      </header>
      <div className="flex-1 overflow-y-auto px-6 py-2 space-y-[14px] pb-[100px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {chats.map(chat => (
          <div key={chat.id} className="flex items-center p-[16px] bg-white rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] cursor-pointer hover:-translate-y-0.5 transition-transform border border-gray-50"
            onClick={() => navigate('chat', { chatId: chat.id })}
          >
            <div className="relative shrink-0 mr-[16px]"><div className="w-[52px] h-[52px] bg-[#FFF4EC] text-[#FA9A50] rounded-[18px] flex items-center justify-center font-bold text-[20px]">{chat.parentName.charAt(0)}</div></div>
            <div className="flex-1 overflow-hidden">
              <div className="flex justify-between items-center mb-[4px]">
                <h3 className="font-bold text-[16px] text-[#1C1C1E] truncate">{chat.parentName}</h3>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${chat.unread > 0 ? 'text-[#FA9A50]' : 'text-[#8E8E93]'}`}>{chat.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className={`text-[13px] truncate mr-4 ${chat.unread > 0 ? 'text-[#1C1C1E] font-bold' : 'text-[#8E8E93] font-medium'}`}>{chat.lastMessage}</p>
                {chat.unread > 0 && <div className="w-[24px] h-[24px] bg-[#FA9A50] rounded-[8px] flex items-center justify-center text-[11px] font-bold text-white shrink-0 shadow-[0_4px_10px_rgba(250,154,80,0.3)]">{chat.unread}</div>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- CHAT ----
function ChatScreen({ navigate, chatId }: { navigate: (s: Screen) => void; chatId: string | null }) {
  const chat = MOCK_CHATS.find(c => c.id === chatId);
  const [message, setMessage] = useState('');
  const [sentMessages, setSentMessages] = useState<string[]>([]);

  const handleSend = () => {
    if (!message.trim()) return;
    setSentMessages(prev => [...prev, message]);
    setMessage('');
  };

  if (!chat) return null;

  return (
    <div className="flex flex-col h-full bg-[#F8F9FA] relative overflow-hidden">
      <header className="px-6 pt-[68px] pb-5 shrink-0 flex items-center justify-between relative z-20 border-b border-gray-100">
        <div className="flex items-center">
          <button onClick={() => navigate('messages')} className="w-[42px] h-[42px] rounded-[12px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-gray-100 flex items-center justify-center mr-3 text-[#1C1C1E]"><ArrowLeft size={20} /></button>
          <div className="w-[40px] h-[40px] bg-[#FFF4EC] text-[#FA9A50] rounded-[12px] flex items-center justify-center font-bold text-[15px] mr-3 shrink-0">{chat.parentName.charAt(0)}</div>
          <div><h1 className="text-[15px] font-bold text-[#1C1C1E] tracking-tight leading-none mb-1">{chat.parentName}</h1><p className="text-[10px] font-bold text-[#8E8E93] uppercase tracking-widest">{chat.studentName}'s Parent</p></div>
        </div>
        <button onClick={() => navigate('dashboard')} className="h-[38px] px-5 rounded-full bg-white border border-[#E5E5EA] shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#1C1C1E] active:scale-95 transition-transform"><span className="text-[14px] font-semibold tracking-wide">Home</span></button>
      </header>

      <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6 pb-[100px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex justify-center"><span className="text-[10px] font-bold bg-white border border-gray-100 text-[#8E8E93] px-[14px] py-[6px] rounded-[10px] uppercase tracking-widest shadow-[0_4px_12px_rgba(0,0,0,0.03)]">Today</span></div>
        <div className="flex justify-start"><div className="bg-white text-[#4A4A4A] p-[16px] rounded-[20px] rounded-tl-[4px] shadow-[0_8px_24px_rgba(0,0,0,0.03)] max-w-[85%] border border-gray-50"><p className="text-[14px] font-medium leading-relaxed">Hello Teacher, {chat.studentName} will be 10 minutes late today.</p><p className="text-[10px] font-bold text-[#8E8E93] mt-[8px] text-right uppercase tracking-widest">08:15 AM</p></div></div>
        <div className="flex justify-end"><div className="bg-[#FA9A50] text-white p-[16px] rounded-[20px] rounded-tr-[4px] shadow-[0_8px_24px_rgba(250,154,80,0.2)] max-w-[85%]"><p className="text-[14px] font-medium leading-relaxed">Noted. Please ensure he submits yesterday's assignment.</p><p className="text-[10px] font-bold text-white/70 mt-[8px] text-right uppercase tracking-widest">08:20 AM</p></div></div>
        {sentMessages.map((msg, i) => (
          <div key={`sent-${i}`} className="flex justify-end"><div className="bg-[#FA9A50] text-white p-[16px] rounded-[20px] rounded-tr-[4px] shadow-[0_8px_24px_rgba(250,154,80,0.2)] max-w-[85%]"><p className="text-[14px] font-medium leading-relaxed">{msg}</p><p className="text-[10px] font-bold text-white/70 mt-[8px] text-right uppercase tracking-widest">Just now</p></div></div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-[20px] pb-10 bg-white border-t border-gray-100 z-30">
        <div className="flex items-center bg-[#F8F9FA] border border-gray-100 rounded-[18px] p-1.5 pr-2 shadow-inner">
          <input type="text" placeholder="Type message..." className="flex-1 bg-transparent text-[#1C1C1E] text-[15px] font-medium py-[14px] pl-[16px] outline-none placeholder:text-[#C7C7CC]" value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} />
          <button onClick={handleSend} disabled={!message.trim()} className={`w-[44px] h-[44px] rounded-[14px] flex items-center justify-center transition-all ${message.trim() ? 'bg-[#FA9A50] text-white shadow-[0_4px_16px_rgba(250,154,80,0.3)]' : 'bg-white border border-gray-200 text-[#C7C7CC] cursor-not-allowed'}`}><Send size={18} className="ml-0.5" /></button>
        </div>
      </div>
    </div>
  );
}

// ---- LEAVES ----
function LeavesScreen({ navigate }: { navigate: (s: Screen) => void }) {
  const [activeTab, setActiveTab] = useState<'pending' | 'approved'>('pending');
  const [leaves, setLeaves] = useState<LeaveRequest[]>(MOCK_LEAVES);
  const pendingLeaves = leaves.filter(l => l.status === 'pending');
  const approvedLeaves = leaves.filter(l => l.status === 'approved');
  const handleAction = (id: string, newStatus: 'approved' | 'rejected') => setLeaves(leaves.map(l => l.id === id ? { ...l, status: newStatus } : l));
  const currentList = activeTab === 'pending' ? pendingLeaves : approvedLeaves;

  return (
    <div className="flex flex-col h-full bg-[#F8F9FA] relative overflow-hidden">
      <header className="px-6 pt-[68px] pb-5 shrink-0 flex items-center justify-between relative z-20">
        <h1 className="text-[20px] font-bold text-[#1C1C1E] tracking-tight">Leave Applications</h1>
        <button onClick={() => navigate('dashboard')} className="h-[38px] px-5 rounded-full bg-white border border-[#E5E5EA] shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#1C1C1E] active:scale-95 transition-transform"><span className="text-[14px] font-semibold tracking-wide">Home</span></button>
      </header>
      <div className="px-6 pb-4 relative z-20">
        <div className="flex space-x-3 w-full">
          <button onClick={() => setActiveTab('pending')} className={`flex-1 py-[12px] text-[13px] font-bold rounded-[14px] transition-all border ${activeTab === 'pending' ? 'bg-[#FF7A7A] text-white border-[#FF7A7A] shadow-[0_4px_16px_rgba(255,122,122,0.3)]' : 'bg-white text-[#8E8E93] border-gray-100'}`}>Pending ({pendingLeaves.length})</button>
          <button onClick={() => setActiveTab('approved')} className={`flex-1 py-[12px] text-[13px] font-bold rounded-[14px] transition-all border ${activeTab === 'approved' ? 'bg-[#FF7A7A] text-white border-[#FF7A7A] shadow-[0_4px_16px_rgba(255,122,122,0.3)]' : 'bg-white text-[#8E8E93] border-gray-100'}`}>Approved ({approvedLeaves.length})</button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-2 space-y-[14px] pb-[100px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {currentList.length === 0 ? <div className="text-center py-10 text-[#8E8E93] text-[14px] font-medium">No leaves found in this section.</div> :
          currentList.map(leave => (
            <div key={leave.id} className="bg-white rounded-[24px] p-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-gray-50">
              <div className="flex justify-between items-start mb-[16px]">
                <div><h3 className="text-[16px] font-bold text-[#1C1C1E] mb-1">{leave.studentName}</h3><p className="text-[11px] font-bold text-[#8E8E93] uppercase tracking-wider">{leave.dates}</p></div>
                <span className={`px-[12px] py-[6px] rounded-[10px] text-[10px] font-bold uppercase tracking-wider ${leave.status === 'pending' ? 'bg-[#FFF5EB] text-[#FFB067]' : leave.status === 'approved' ? 'bg-[#EFFFF8] text-[#65D4B0]' : 'bg-[#FFF0F0] text-[#FF7A7A]'}`}>{leave.status}</span>
              </div>
              <div className="bg-[#F8F9FA] rounded-[16px] p-[16px] mb-[16px] border border-gray-100"><p className="text-[13px] text-[#4A4A4A] font-medium leading-relaxed"><span className="font-bold text-[#8E8E93] uppercase tracking-widest text-[10px] mr-1.5">Reason:</span> {leave.reason}</p></div>
              {leave.status === 'pending' && (
                <div className="flex space-x-3">
                  <button onClick={() => handleAction(leave.id, 'rejected')} className="flex-1 py-[12px] rounded-[14px] bg-[#FFF0F0] text-[#FF7A7A] font-bold text-[13px] flex items-center justify-center"><X size={16} className="mr-1.5" /> Reject</button>
                  <button onClick={() => handleAction(leave.id, 'approved')} className="flex-1 py-[12px] rounded-[14px] bg-[#EFFFF8] text-[#65D4B0] font-bold text-[13px] flex items-center justify-center"><Check size={16} className="mr-1.5" /> Approve</button>
                </div>
              )}
            </div>
          ))
        }
      </div>
    </div>
  );
}

// ---- STUDENTS ----
function StudentsScreen({ navigate }: { navigate: (s: Screen, opts?: any) => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredStudents = MOCK_STUDENTS.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="flex flex-col h-full bg-[#F8F9FA] relative overflow-hidden">
      <header className="px-6 pt-[68px] pb-5 shrink-0 flex items-center justify-between relative z-20">
        <h1 className="text-[20px] font-bold text-[#1C1C1E] tracking-tight">Student Profiles</h1>
        <button onClick={() => navigate('dashboard')} className="h-[38px] px-5 rounded-full bg-white border border-[#E5E5EA] shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#1C1C1E] active:scale-95 transition-transform"><span className="text-[14px] font-semibold tracking-wide">Home</span></button>
      </header>
      <div className="px-6 pb-4 relative z-20">
        <div className="relative">
          <Search size={20} className="absolute left-[20px] top-1/2 -translate-y-1/2 text-[#8E8E93]" />
          <input type="text" placeholder="Search students..." className="w-full bg-white border border-gray-100 text-[#1C1C1E] text-[14px] font-bold rounded-[16px] py-[16px] pl-[52px] pr-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.02)] outline-none focus:border-[#65D4B0] transition-all placeholder:text-[#C7C7CC] placeholder:font-medium" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-2 space-y-[14px] pb-[100px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {filteredStudents.length === 0 ? <p className="text-center text-[#8E8E93] font-medium text-[14px] py-10">No students found.</p> :
          filteredStudents.map(student => (
            <div key={student.id} onClick={() => navigate('studentProfile', { studentId: student.id })} className="bg-white rounded-[24px] p-[16px] flex items-center justify-between shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-gray-50 cursor-pointer hover:-translate-y-0.5 transition-transform group">
              <div className="flex items-center space-x-4">
                <div className="w-[52px] h-[52px] bg-[#EFFFF8] text-[#65D4B0] rounded-[18px] flex items-center justify-center font-bold text-[20px] shadow-[0_4px_12px_rgba(101,212,176,0.15)]">{student.name.charAt(0)}</div>
                <div><h3 className="font-bold text-[#1C1C1E] text-[16px] mb-[4px]">{student.name}</h3><p className="text-[10px] font-bold text-[#8E8E93] uppercase tracking-widest">Roll: {student.rollNo} • Class 5A</p></div>
              </div>
              <div className="w-[36px] h-[36px] rounded-[12px] flex items-center justify-center bg-[#F8F9FA] text-[#8E8E93] group-hover:bg-[#EFFFF8] group-hover:text-[#65D4B0] transition-colors border border-gray-100"><ChevronRight size={18} /></div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

// ---- STUDENT PROFILE ----
function StudentProfileScreen({ navigate, studentId }: { navigate: (s: Screen) => void; studentId: string | null }) {
  const student = MOCK_STUDENTS.find(s => s.id === studentId);
  if (!student) return <div className="p-6 text-center text-[#8E8E93] font-medium text-[14px]">Student not found</div>;

  return (
    <div className="flex flex-col h-full bg-[#F8F9FA] relative overflow-hidden">
      <header className="px-6 pt-[68px] pb-6 shrink-0 flex items-center justify-between relative z-20">
        <div className="flex items-center space-x-3">
          <button onClick={() => navigate('students')} className="w-[42px] h-[42px] rounded-[12px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-gray-100 flex items-center justify-center text-[#1C1C1E]"><ArrowLeft size={20} /></button>
          <h1 className="text-[18px] font-bold text-[#1C1C1E]">Profile</h1>
        </div>
        <button onClick={() => navigate('dashboard')} className="h-[38px] px-5 rounded-full bg-white border border-[#E5E5EA] shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#1C1C1E] active:scale-95 transition-transform"><span className="text-[14px] font-semibold tracking-wide">Home</span></button>
      </header>
      <div className="px-6 pb-6 flex items-center space-x-5 relative z-20">
        <div className="w-[64px] h-[64px] bg-[#EFFFF8] shadow-[0_8px_24px_rgba(101,212,176,0.15)] border border-[#DDFDF0] text-[#65D4B0] rounded-[24px] flex items-center justify-center font-bold text-[28px]">{student.name.charAt(0)}</div>
        <div><h1 className="text-[24px] font-bold text-[#1C1C1E] tracking-tight mb-[4px]">{student.name}</h1><p className="text-[11px] font-bold text-[#8E8E93] uppercase tracking-widest">Roll No: {student.rollNo} • Class 5A</p></div>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-2 space-y-[16px] pb-[100px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <section className="bg-white rounded-[24px] p-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-gray-50">
          <div className="flex items-center mb-[14px]"><User size={18} className="text-[#8E8E93] mr-[8px]" /><h2 className="text-[12px] font-bold text-[#1C1C1E] uppercase tracking-widest">Parent Details</h2></div>
          <div className="flex justify-between items-center bg-[#F8F9FA] rounded-[16px] p-[16px] border border-gray-100">
            <div><p className="text-[15px] font-bold text-[#1C1C1E] mb-[2px]">{student.parentName}</p><p className="text-[12px] text-[#8E8E93] font-medium">{student.parentPhone}</p></div>
            <button className="w-[42px] h-[42px] bg-[#EFFFF8] text-[#65D4B0] rounded-[12px] flex items-center justify-center border border-[#DDFDF0] shadow-[0_4px_12px_rgba(101,212,176,0.15)]"><Phone size={18} /></button>
          </div>
        </section>
        <div className="grid grid-cols-2 gap-[14px]">
          <section className="bg-white rounded-[24px] p-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col items-center justify-center">
            <h2 className="text-[10px] font-bold text-[#8E8E93] uppercase tracking-widest mb-[16px]">Attendance</h2>
            <div className="relative w-[72px] h-[72px] flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90"><circle cx="36" cy="36" r="30" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-100" /><circle cx="36" cy="36" r="30" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="188.5" strokeDashoffset={188.5 - (188.5 * student.attendance) / 100} className="text-[#FFB067]" strokeLinecap="round" /></svg>
              <span className="absolute text-[16px] font-bold text-[#1C1C1E]">{student.attendance}%</span>
            </div>
          </section>
          <section className="bg-[#65D4B0] rounded-[24px] p-[20px] shadow-[0_8px_24px_rgba(101,212,176,0.3)] flex flex-col items-center justify-center text-white relative overflow-hidden">
            <div className="absolute top-[-20px] right-[-20px] w-[80px] h-[80px] bg-white opacity-10 rounded-full blur-2xl" />
            <h2 className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-[12px] relative z-10">Avg Test Score</h2>
            <div className="text-[32px] font-bold mb-[8px] relative z-10">{student.testPerformance}%</div>
            <p className="text-[9px] bg-white/20 px-[8px] py-[4px] rounded-[6px] uppercase tracking-widest font-bold relative z-10 shadow-sm border border-white/10">Excellent</p>
          </section>
        </div>
        <section className="bg-white rounded-[24px] p-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-gray-50">
          <div className="flex items-center mb-[20px]"><BookOpen size={18} className="text-[#8E8E93] mr-[8px]" /><h2 className="text-[12px] font-bold text-[#1C1C1E] uppercase tracking-widest">Subject Scales</h2></div>
          <div className="space-y-[16px]">
            {[
              { label: 'Mathematics', score: student.performance.math, color: 'bg-[#6BA4FF]' },
              { label: 'Science', score: student.performance.science, color: 'bg-[#65D4B0]' },
              { label: 'English', score: student.performance.english, color: 'bg-[#8A73FF]' },
              { label: 'Social Studies', score: student.performance.social, color: 'bg-[#FFB067]' },
            ].map(s => (
              <div key={s.label}>
                <div className="flex justify-between items-center mb-[6px]"><span className="text-[12px] font-bold text-[#8E8E93]">{s.label}</span><span className="text-[12px] font-bold text-[#1C1C1E]">{s.score}%</span></div>
                <div className="w-full bg-[#F8F9FA] rounded-full h-[6px] overflow-hidden border border-gray-100"><div className={`h-full rounded-full ${s.color}`} style={{ width: `${s.score}%` }} /></div>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white rounded-[24px] p-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-gray-50">
          <div className="flex items-center mb-[16px]"><Activity size={18} className="text-[#8E8E93] mr-[8px]" /><h2 className="text-[12px] font-bold text-[#1C1C1E] uppercase tracking-widest">Behavior</h2></div>
          <div className="flex flex-wrap gap-[10px]">{student.behavior.map(tag => (<span key={tag} className="px-[14px] py-[8px] bg-[#F8F9FA] border border-gray-100 rounded-[12px] text-[11px] font-bold text-[#4A4A4A] uppercase tracking-widest shadow-sm">{tag}</span>))}</div>
        </section>
      </div>
    </div>
  );
}
