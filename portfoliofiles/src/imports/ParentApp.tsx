import React, { useState } from 'react';
import {
  Menu, Video, MessageSquare, Utensils, FileText, User, X, LogOut, CalendarDays,
  Search, Plus, Calendar, CircleCheck, Phone, CheckCircle2, Send, ArrowLeft
} from 'lucide-react';
import { toast } from 'sonner';

type MealOption = 'none' | 'veg' | 'non-veg' | 'jain';
interface DayPlan { day: string; date: string; option: MealOption; }

type Screen = 'login' | 'dashboard' | 'meals' | 'ptm' | 'leaves' | 'messages' | 'chat' | 'profile';

export function ParentApp() {
  const [screen, setScreen] = useState<Screen>('login');
  const [selectedChatIdx, setSelectedChatIdx] = useState(0);

  const navigate = (s: Screen, opts?: { chatIdx?: number }) => {
    if (opts?.chatIdx !== undefined) setSelectedChatIdx(opts.chatIdx);
    setScreen(s);
  };

  return (
    <div className="h-full w-full flex flex-col relative overflow-hidden">
      {screen === 'login' && <LoginScreen navigate={navigate} />}
      {screen === 'dashboard' && <DashboardScreen navigate={navigate} />}
      {screen === 'meals' && <MealsScreen navigate={navigate} />}
      {screen === 'ptm' && <PTMScreen navigate={navigate} />}
      {screen === 'leaves' && <LeavesScreen navigate={navigate} />}
      {screen === 'messages' && <MessagesScreen navigate={navigate} />}
      {screen === 'chat' && <ChatScreen navigate={navigate} chatIdx={selectedChatIdx} />}
      {screen === 'profile' && <ProfileScreen navigate={navigate} />}
    </div>
  );
}

// ---- LOGIN ----
function LoginScreen({ navigate }: { navigate: (s: Screen) => void }) {
  const [code, setCode] = useState('');
  const handleLogin = (e: React.FormEvent) => { e.preventDefault(); if (code) navigate('dashboard'); };
  return (
    <div className="flex flex-col h-full bg-white px-[24px] justify-center items-center">
      <div className="w-[80px] h-[80px] bg-[#f4f0ff] rounded-[24px] flex items-center justify-center mb-[32px]"><User size={40} className="text-[#8a73ff]" strokeWidth={2} /></div>
      <h1 className="text-[24px] font-bold text-[#1c1c1e] tracking-tight mb-[8px]">Parent Portal</h1>
      <p className="text-[14px] font-medium text-[#8e8e93] mb-[40px] text-center">Enter the access code provided by the school to continue.</p>
      <form onSubmit={handleLogin} className="w-full space-y-[24px]">
        <div className="space-y-[8px]">
          <label className="text-[12px] font-bold text-[#8e8e93] uppercase tracking-[1px]">School Code</label>
          <input type="text" placeholder="e.g. SCH-1234" value={code} onChange={(e) => setCode(e.target.value)}
            className="w-full bg-[#f8f9fa] border border-[#f3f4f6] text-[#1c1c1e] rounded-[16px] px-[16px] py-[16px] focus:outline-none focus:ring-2 focus:ring-[#8a73ff]/20 focus:border-[#8a73ff] font-bold text-[16px] placeholder:text-[#c7c7cc] placeholder:font-medium transition-all" />
        </div>
        <button type="submit" disabled={!code} className="w-full bg-[#8a73ff] text-white py-[16px] rounded-[16px] font-bold text-[16px] shadow-[0_4px_10px_rgba(138,115,255,0.3)] disabled:opacity-50 disabled:shadow-none transition-all active:scale-95">Login</button>
      </form>
    </div>
  );
}

// ---- DASHBOARD ----
function DashboardScreen({ navigate }: { navigate: (s: Screen) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cards = [
    { title: 'Lunch Booking', subtitle: 'Weekly Canteen', badge: 'Booked', icon: Utensils, bgClass: 'bg-[#effff8]', iconClass: 'text-[#65d4b0]', badgeClass: 'bg-[#65d4b0] text-white shadow-[0_4px_10px_rgba(101,212,176,0.3)]', screen: 'meals' as Screen },
    { title: 'PTM Slots', subtitle: 'Manage setup', badge: '2 Today', icon: Video, bgClass: 'bg-[#f0f5ff]', iconClass: 'text-[#6ba4ff]', badgeClass: 'bg-[#f0f5ff] text-[#6ba4ff]', screen: 'ptm' as Screen },
    { title: 'Leaves', subtitle: 'Requests', badge: '2 Pending', icon: FileText, bgClass: 'bg-[#fff0f0]', iconClass: 'text-[#ff7a7a]', badgeClass: 'bg-[#fff0f0] text-[#ff7a7a]', screen: 'leaves' as Screen },
    { title: 'Messages', subtitle: 'Parent chats', badge: '1 Unread', icon: MessageSquare, bgClass: 'bg-[#fff4ec]', iconClass: 'text-[#fa9a50]', badgeClass: 'bg-[#fa9a50] text-white shadow-[0_4px_10px_rgba(250,154,80,0.3)]', screen: 'messages' as Screen },
    { title: 'Aarav Sharma', subtitle: 'Roll No. 1 • Class 5A', badge: 'A+', icon: User, bgClass: 'bg-[#f4f0ff]', iconClass: 'text-[#8a73ff]', badgeClass: 'bg-[#f4f0ff] text-[#8a73ff]', screen: 'profile' as Screen },
  ];

  return (
    <div className="flex flex-col h-full bg-[#f8f9fa] overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {isMenuOpen && (
        <div className="absolute inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute top-0 left-0 w-[312px] h-full bg-white shadow-2xl flex flex-col z-10 rounded-r-[32px] overflow-hidden">
            <div className="p-[24px] pt-[68px] flex items-start justify-between border-b border-[#f3f4f6]">
              <div className="flex items-center gap-[16px]">
                <div className="w-[56px] h-[56px] bg-[#f4f0ff] rounded-[16px] flex items-center justify-center"><span className="text-[24px] font-bold text-[#8a73ff]">R</span></div>
                <div><h2 className="text-[18px] font-bold text-[#1c1c1e]">Rohan S.</h2><p className="text-[12px] font-medium text-[#8e8e93] mt-[2px]">Parent of Aarav</p></div>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="w-[32px] h-[32px] bg-[#f9fafb] rounded-[8px] flex items-center justify-center text-[#8e8e93]"><X size={18} /></button>
            </div>
            <div className="p-[20px] flex flex-col gap-[8px] flex-1 bg-[#f8f9fa]">
              <button onClick={() => { navigate('profile'); setIsMenuOpen(false); }} className="w-full bg-white h-[52px] rounded-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex items-center px-[20px] gap-[16px] active:scale-95 transition-transform"><User size={20} className="text-[#8a73ff]" /><span className="font-semibold text-[14px] text-[#1c1c1e]">Child Profile</span></button>
              <button className="w-full bg-white h-[52px] rounded-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex items-center px-[20px] gap-[16px] active:scale-95 transition-transform"><CalendarDays size={20} className="text-[#8a73ff]" /><span className="font-semibold text-[14px] text-[#1c1c1e]">Academic Calendar</span></button>
            </div>
            <div className="p-[24px] pb-[40px] bg-[#f8f9fa]">
              <button onClick={() => { navigate('login'); setIsMenuOpen(false); }} className="w-full bg-white h-[52px] rounded-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex items-center justify-center gap-[12px] active:scale-95 transition-transform"><LogOut size={18} className="text-[#ff7a7a]" /><span className="font-bold text-[14px] text-[#ff7a7a]">Log Out</span></button>
            </div>
          </div>
        </div>
      )}

      <div className="pt-[68px] px-[24px] pb-[32px] flex items-center justify-between">
        <div className="flex items-center gap-[16px]">
          <button onClick={() => setIsMenuOpen(true)} className="w-[42px] h-[42px] bg-white rounded-[12px] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-[#f3f4f6]"><Menu size={20} className="text-[#1c1c1e]" /></button>
          <div className="flex flex-col"><h1 className="text-[20px] font-bold text-[#1c1c1e] tracking-tight leading-[20px]">Hi! Rohan S.</h1><p className="text-[13px] font-medium text-[#8e8e93] leading-[13px] mt-[4px]">Parent of Aarav</p></div>
        </div>
        <div className="w-[42px] h-[42px] bg-white rounded-[12px] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-[#f3f4f6]"><span className="text-[16px] font-bold text-[#8a73ff]">R</span></div>
      </div>

      <div className="px-[24px] pb-[40px] flex flex-col gap-[16px]">
        {cards.map((card) => (
          <button key={card.title} onClick={() => navigate(card.screen)}
            className="bg-white rounded-[24px] p-[17px] flex items-center gap-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#f3f4f6] transition-transform active:scale-95 h-[122px] text-left w-full"
          >
            <div className={`w-[68px] h-[68px] rounded-[20px] flex items-center justify-center shrink-0 ${card.bgClass}`}><card.icon size={32} strokeWidth={2.5} className={card.iconClass} /></div>
            <div className="flex-1 flex flex-col justify-center min-w-0 h-full">
              <h2 className="text-[18px] font-bold text-[#1c1c1e] mb-[4px] leading-[22.5px] truncate">{card.title}</h2>
              <div className="flex items-center justify-between mt-[12px]"><p className="text-[12px] font-medium text-[#8e8e93] truncate">{card.subtitle}</p><span className={`text-[10px] font-bold px-[12px] py-[4px] rounded-[8px] whitespace-nowrap ${card.badgeClass}`}>{card.badge}</span></div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ---- MEALS ----
function MealsScreen({ navigate }: { navigate: (s: Screen) => void }) {
  const [plan, setPlan] = useState<DayPlan[]>([
    { day: 'Mon', date: '15 Apr', option: 'none' },
    { day: 'Tue', date: '16 Apr', option: 'none' },
    { day: 'Wed', date: '17 Apr', option: 'none' },
    { day: 'Thu', date: '18 Apr', option: 'none' },
    { day: 'Fri', date: '19 Apr', option: 'none' },
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedMealDetail, setSelectedMealDetail] = useState<{ day: string; type: string; menu: string[]; insights: string; nutrition: { label: string; value: string }[] } | null>(null);

  const mealMenus: Record<string, { menu: string[]; insights: string; nutrition: { label: string; value: string }[] }> = {
    veg: { menu: ['Paneer Butter Masala', 'Jeera Rice', 'Whole Wheat Roti', 'Fresh Cucumber Salad', 'Moong Dal Halwa'], insights: 'This meal is designed by Dr. Aditi Rao, Senior Pediatric Nutritionist. It focuses on high protein intake from Paneer and Moong Dal.', nutrition: [{ label: 'Protein', value: '18g' }, { label: 'Carbs', value: '45g' }, { label: 'Iron', value: '4.2mg' }, { label: 'Calcium', value: '210mg' }] },
    'non-veg': { menu: ['Grilled Chicken Curry', 'Steamed Basmati Rice', 'Tawa Roti', 'Mixed Sprouts Salad', 'Yogurt Cup'], insights: 'Approved by the School Health Board. Lean chicken provides essential amino acids for growing students.', nutrition: [{ label: 'Protein', value: '24g' }, { label: 'Carbs', value: '38g' }, { label: 'Vitamin B12', value: '1.8mcg' }, { label: 'Zinc', value: '3.5mg' }] },
    jain: { menu: ['Paneer Bhurji (No Onion/Garlic)', 'Steamed Rice', 'Whole Wheat Roti', 'Boiled Corn Salad', 'Fruit Custard'], insights: 'A specialized sattvic meal plan with nutrient-dense ingredients that respect Jain dietary guidelines.', nutrition: [{ label: 'Protein', value: '16g' }, { label: 'Carbs', value: '42g' }, { label: 'Vitamin C', value: '12mg' }, { label: 'Folate', value: '45mcg' }] },
  };

  const handleOptionChange = (index: number, option: MealOption) => {
    const newPlan = [...plan]; newPlan[index].option = option; setPlan(newPlan);
    if (option !== 'none') {
      const details = mealMenus[option];
      setSelectedMealDetail({ day: plan[index].day, type: option === 'veg' ? 'Vegetarian' : option === 'non-veg' ? 'Non-Vegetarian' : 'Jain', ...details });
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-[24px] bg-[#f8f9fa]">
        <div className="w-[100px] h-[100px] bg-[#effff8] rounded-full flex items-center justify-center mb-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.03)]"><CircleCheck size={48} className="text-[#65d4b0]" /></div>
        <h2 className="text-[24px] font-bold text-[#1c1c1e] mb-[8px] text-center">Meals Booked!</h2>
        <p className="text-[14px] font-medium text-[#8e8e93] text-center mb-[32px]">The weekly lunch plan has been confirmed.</p>
        <button onClick={() => navigate('dashboard')} className="w-full bg-[#65d4b0] text-white py-[16px] rounded-[16px] font-bold text-[16px] shadow-[0_4px_10px_rgba(101,212,176,0.3)] active:scale-95">Back to Dashboard</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-full bg-[#f8f9fa] pb-[20px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-y-auto">
      {selectedMealDetail && (
        <div className="absolute inset-0 z-50 flex flex-col justify-end">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" onClick={() => setSelectedMealDetail(null)} />
          <div className="relative bg-white shadow-2xl rounded-t-[32px] p-[24px] pb-[40px] max-h-[85%] overflow-y-auto z-10 [&::-webkit-scrollbar]:hidden">
            <div className="flex items-center justify-between mb-[24px]">
              <div><h2 className="text-[20px] font-bold text-[#1c1c1e]">{selectedMealDetail.day}'s {selectedMealDetail.type} Meal</h2><p className="text-[12px] font-medium text-[#8e8e93]">Nutritionist Approved Menu</p></div>
              <button onClick={() => setSelectedMealDetail(null)} className="w-[32px] h-[32px] bg-[#f9fafb] rounded-[8px] flex items-center justify-center text-[#8e8e93]"><X size={18} /></button>
            </div>
            <div className="space-y-[24px]">
              <div><h3 className="text-[10px] font-bold text-[#8e8e93] uppercase tracking-[1.2px] mb-[12px]">WHAT'S ON THE MENU</h3>
                <div className="space-y-[8px]">{selectedMealDetail.menu.map((item, i) => (<div key={i} className="flex items-center gap-[12px] bg-[#f8f9fa] p-[12px] rounded-[12px] border border-[#f3f4f6]"><div className="w-[6px] h-[6px] rounded-full bg-[#65d4b0]" /><span className="text-[14px] font-medium text-[#1c1c1e]">{item}</span></div>))}</div>
              </div>
              <div className="bg-[#effff8] p-[16px] rounded-[20px] border border-[#ddfdf0]">
                <div className="flex items-center gap-[8px] mb-[8px]"><User size={14} className="text-[#65d4b0]" /><h3 className="text-[10px] font-bold text-[#65d4b0] uppercase tracking-[1px]">NUTRITIONIST'S INSIGHT</h3></div>
                <p className="text-[13px] font-medium text-[#1c1c1e] leading-[20px]">{selectedMealDetail.insights}</p>
              </div>
              <div><h3 className="text-[10px] font-bold text-[#8e8e93] uppercase tracking-[1.2px] mb-[12px]">NUTRITIONAL FACTS</h3>
                <div className="grid grid-cols-2 gap-[12px]">{selectedMealDetail.nutrition.map((stat, i) => (<div key={i} className="bg-white p-[12px] rounded-[16px] border border-[#f3f4f6]"><span className="text-[10px] font-bold text-[#8e8e93] uppercase">{stat.label}</span><span className="text-[16px] font-bold text-[#1c1c1e] block">{stat.value}</span></div>))}</div>
              </div>
            </div>
            <button onClick={() => setSelectedMealDetail(null)} className="w-full bg-[#65d4b0] text-white py-[16px] rounded-[16px] font-bold text-[16px] shadow-[0_4px_10px_rgba(101,212,176,0.3)] mt-[24px] active:scale-95">Confirm Choice</button>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between px-[24px] pt-[68px] pb-[20px]">
        <h1 className="text-[20px] font-bold text-[#1c1c1e] tracking-tight">Lunch Booking</h1>
        <button onClick={() => navigate('dashboard')} className="px-[21px] py-[8px] bg-white rounded-[42px] text-[14px] font-semibold text-[#1c1c1e] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#e5e5ea] active:scale-95 transition-transform">Home</button>
      </div>
      <div className="px-[24px] space-y-[24px]">
        <div className="bg-white p-[20px] rounded-[24px] flex items-start gap-[16px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#f9fafb]">
          <div className="w-[56px] h-[56px] rounded-[16px] bg-[#effff8] flex items-center justify-center shrink-0"><Utensils size={24} className="text-[#65d4b0]" /></div>
          <div><h2 className="text-[#1c1c1e] font-bold text-[16px] mb-[4px]">Weekly Canteen Plan</h2><p className="text-[#8e8e93] text-[12px] font-medium leading-[18px]">Select healthy meals for your child. Charges are added directly to the monthly fee.</p></div>
        </div>
        <div className="flex justify-between items-center px-[8px]"><h3 className="text-[10px] font-bold text-[#8e8e93] uppercase tracking-[1px] flex items-center gap-[8px]"><CalendarDays size={14} /> 15-19 APR</h3></div>
        <div className="space-y-[16px]">
          {plan.map((day, idx) => (
            <div key={idx} className="bg-white p-[16px] rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#f9fafb] flex flex-col gap-[16px]">
              <div className="flex justify-between items-center border-b border-[#f3f4f6] pb-[12px]"><div className="flex items-baseline gap-[8px]"><span className="font-bold text-[16px] text-[#1c1c1e]">{day.day}</span><span className="text-[#8e8e93] text-[12px] font-medium">{day.date}</span></div></div>
              <div className="grid grid-cols-2 gap-[8px]">
                {([['veg', 'Veg', 'bg-[#effff8] text-[#65d4b0]', 'bg-[#65d4b0]'], ['non-veg', 'Non-Veg', 'bg-[#fff0f0] text-[#ff7a7a]', 'bg-[#ff7a7a]'], ['jain', 'Jain', 'bg-[#fff4ec] text-[#fa9a50]', 'bg-[#fa9a50]'], ['none', 'Skip', 'bg-[#fff5f5] text-[#ff8e8e]', '']] as const).map(([opt, label, activeClass, dotColor]) => (
                  <button key={opt} onClick={() => handleOptionChange(idx, opt as MealOption)}
                    className={`py-[12px] px-[8px] rounded-[12px] text-[13px] font-bold transition-all flex items-center justify-center gap-[6px] ${day.option === opt ? activeClass : 'bg-[#f8f9fa] text-[#8e8e93]'}`}
                  >
                    {dotColor && <div className={`w-[6px] h-[6px] rounded-full ${dotColor}`} />}
                    {opt === 'none' && <X size={14} />}
                    {label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="pt-[16px]"><button onClick={() => setSubmitted(true)} className="w-full bg-[#65d4b0] text-white px-[24px] py-[16px] rounded-[16px] font-bold shadow-[0_4px_10px_rgba(101,212,176,0.3)] active:scale-95">Confirm Plan</button></div>
      </div>
    </div>
  );
}

// ---- PTM ----
function PTMScreen({ navigate }: { navigate: (s: Screen) => void }) {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);
  const [selectedDate] = useState(new Date(2026, 3, 18));
  const slots = ['10:00', '10:15', '10:30', '10:45', '11:00'];
  const formattedDate = selectedDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });

  const handleConfirm = () => { setBooked(true); toast.success(`You have booked a slot for ${selectedSlot} on ${formattedDate}`); };
  const handleJoinCall = () => { let count = 5; const toastId = toast(`Your meeting is starting in ${count}...`, { duration: 6000 }); const interval = setInterval(() => { count -= 1; if (count > 0) toast(`Your meeting is starting in ${count}...`, { id: toastId, duration: 6000 }); else { clearInterval(interval); toast.success('Meeting started!', { id: toastId }); } }, 1000); };

  return (
    <div className="flex flex-col h-full bg-[#f8f9fa] overflow-y-auto pb-[20px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="flex items-center justify-between px-[24px] pt-[68px] pb-[20px]">
        <h1 className="text-[20px] font-bold text-[#1c1c1e] tracking-tight">PTM Meetings</h1>
        <button onClick={() => navigate('dashboard')} className="px-[21px] py-[8px] bg-white rounded-[42px] text-[14px] font-semibold text-[#1c1c1e] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#e5e5ea] active:scale-95">Home</button>
      </div>
      <div className="px-[24px] space-y-[24px]">
        <div className="bg-white rounded-[24px] p-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#f9fafb]">
          <h2 className="text-[10px] font-bold text-[#8e8e93] uppercase tracking-[1px] mb-[20px]">BOOK A SLOT</h2>
          <div className="mb-[24px]"><h3 className="text-[10px] font-bold text-[#c7c7cc] uppercase tracking-[1px] mb-[8px]">DATE</h3><p className="text-[16px] font-bold text-[#1c1c1e] border-b border-[#f3f4f6] pb-[16px]">{formattedDate}</p></div>
          <div className="mb-[24px]">
            <h3 className="text-[10px] font-bold text-[#c7c7cc] uppercase tracking-[1px] mb-[12px]">15-MIN SLOTS</h3>
            <div className="grid grid-cols-3 gap-[12px]">
              {slots.map(slot => (<button key={slot} onClick={() => setSelectedSlot(slot)} className={`py-[12px] rounded-[12px] text-[13px] font-bold transition-all border ${selectedSlot === slot ? 'bg-[#6ba4ff] text-white border-[#6ba4ff] shadow-[0_4px_10px_rgba(107,164,255,0.3)]' : 'bg-[#f0f5ff] text-[#6ba4ff] border-transparent'}`}>{slot}</button>))}
            </div>
          </div>
          <button disabled={!selectedSlot || booked} onClick={handleConfirm} className="w-full bg-[#6ba4ff] text-white py-[16px] rounded-[16px] font-bold text-[14px] shadow-[0_4px_10px_rgba(107,164,255,0.3)] disabled:opacity-50 disabled:shadow-none active:scale-95">{booked ? 'Slot Booked!' : `Confirm ${selectedSlot || 'Slot'}`}</button>
        </div>
        <div className="space-y-[16px]">
          <h2 className="text-[10px] font-bold text-[#8e8e93] uppercase tracking-[1px] px-[8px]">UPCOMING MEETINGS</h2>
          <div className="bg-white rounded-[24px] p-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#f9fafb]">
            <div className="flex justify-between items-start mb-[16px]">
              <div><h3 className="text-[16px] font-bold text-[#1c1c1e] mb-[4px]">Ms. Anjali Gupta</h3><div className="flex items-center gap-[6px] text-[#8e8e93]"><User size={12} className="text-[#6ba4ff]" /><p className="text-[10px] font-bold uppercase tracking-[1px]">AARAV SHARMA</p></div></div>
              <div className="bg-[#f0f5ff] text-[#6ba4ff] px-[12px] py-[4px] rounded-[8px] text-[10px] font-bold tracking-[1px] uppercase">TODAY</div>
            </div>
            <div className="flex items-center gap-[8px] mb-[24px] bg-[#f8f9fa] inline-flex px-[16px] py-[8px] rounded-[12px]"><Calendar size={14} className="text-[#1c1c1e]" /><p className="text-[13px] font-bold text-[#1c1c1e]">14:00 - 14:15</p></div>
            <button onClick={handleJoinCall} className="w-full bg-[#6ba4ff] text-white py-[16px] rounded-[16px] font-bold text-[14px] flex items-center justify-center gap-[8px] shadow-[0_4px_10px_rgba(107,164,255,0.3)] active:scale-95"><Video size={18} />Join Call</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- MESSAGES ----
function MessagesScreen({ navigate }: { navigate: (s: Screen, opts?: any) => void }) {
  const messages = [
    { name: 'Ms. Anjali Gupta', initial: 'A', msg: 'Thank you for the update.', time: '10:30 AM', unread: 0, recent: false },
    { name: 'Vikram Singh', initial: 'V', msg: 'Is he doing better in Math?', time: 'YESTERDAY', unread: 1, recent: true },
    { name: 'Mrs. Radhika', initial: 'R', msg: 'Choir practice is moved to Friday.', time: 'MONDAY', unread: 0, recent: false },
  ];
  return (
    <div className="flex flex-col min-h-full bg-[#f8f9fa] overflow-y-auto pb-[20px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="flex items-center justify-between px-[24px] pt-[68px] pb-[20px]"><h1 className="text-[20px] font-bold text-[#1c1c1e] tracking-tight">Messages</h1><button onClick={() => navigate('dashboard')} className="px-[21px] py-[8px] bg-white rounded-[42px] text-[14px] font-semibold text-[#1c1c1e] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#e5e5ea] active:scale-95">Home</button></div>
      <div className="px-[24px] space-y-[24px]">
        <div className="relative"><Search size={20} className="absolute left-[20px] top-[18px] text-[#8e8e93]" /><input type="text" placeholder="Search messages..." className="w-full bg-white border border-[#f3f4f6] text-[#1c1c1e] rounded-[16px] pl-[52px] pr-[20px] py-[16px] focus:outline-none focus:ring-2 focus:ring-[#fa9a50]/20 focus:border-[#fa9a50] font-medium text-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.02)] placeholder:text-[#c7c7cc]" /></div>
        <div className="space-y-[14px]">
          {messages.map((m, idx) => (
            <div key={idx} onClick={() => navigate('chat', { chatIdx: idx })} className="bg-white p-[17px] rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex items-center gap-[16px] border border-[#f9fafb] active:scale-95 transition-transform cursor-pointer">
              <div className="w-[52px] h-[52px] bg-[#fff4ec] rounded-[18px] flex items-center justify-center shrink-0"><span className="text-[20px] font-bold text-[#fa9a50]">{m.initial}</span></div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-[4px]"><h4 className="font-bold text-[#1c1c1e] text-[16px] truncate">{m.name}</h4><span className={`text-[10px] font-bold tracking-[1px] uppercase whitespace-nowrap ${m.recent ? 'text-[#fa9a50]' : 'text-[#8e8e93]'}`}>{m.time}</span></div>
                <div className="flex items-center justify-between"><p className={`text-[13px] truncate ${m.unread > 0 ? 'font-bold text-[#1c1c1e]' : 'font-medium text-[#8e8e93]'}`}>{m.msg}</p>{m.unread > 0 && <div className="w-[24px] h-[24px] bg-[#fa9a50] rounded-[8px] flex items-center justify-center shrink-0 shadow-[0_4px_10px_rgba(250,154,80,0.3)]"><span className="text-[11px] font-bold text-white">{m.unread}</span></div>}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---- CHAT ----
function ChatScreen({ navigate, chatIdx }: { navigate: (s: Screen) => void; chatIdx: number }) {
  const contacts = [
    { name: 'Ms. Anjali Gupta', initial: 'A' },
    { name: 'Vikram Singh', initial: 'V' },
    { name: 'Mrs. Radhika', initial: 'R' },
  ];
  const contact = contacts[chatIdx] || contacts[0];
  const [chatMessages, setChatMessages] = useState([
    { text: 'Hello! How is Aarav doing in class?', sent: true, time: '10:15 AM' },
    { text: "He's doing great! He participated very well in the Math quiz today.", sent: false, time: '10:25 AM' },
    { text: 'Thank you for the update.', sent: true, time: '10:30 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setChatMessages(prev => [...prev, { text: newMessage, sent: true, time: 'Just now' }]);
    setNewMessage('');
    setTimeout(() => setChatMessages(prev => [...prev, { text: "I'll look into that and get back to you soon.", sent: false, time: 'Just now' }]), 1500);
  };

  return (
    <div className="flex flex-col h-full bg-white relative overflow-hidden">
      <div className="pt-[68px] px-[24px] pb-[16px] border-b border-[#f3f4f6] flex items-center gap-[16px] bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <button onClick={() => navigate('messages')} className="w-[42px] h-[42px] bg-[#f8f9fa] rounded-[12px] flex items-center justify-center text-[#1c1c1e] active:scale-95"><ArrowLeft size={20} /></button>
        <div className="flex items-center gap-[12px] flex-1">
          <div className="w-[42px] h-[42px] bg-[#fff4ec] rounded-[12px] flex items-center justify-center shrink-0"><span className="text-[18px] font-bold text-[#fa9a50]">{contact.initial}</span></div>
          <div><h3 className="font-bold text-[#1c1c1e] text-[16px] leading-tight">{contact.name}</h3><p className="text-[11px] font-medium text-[#65d4b0]">Online</p></div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-[24px] space-y-[16px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex flex-col pb-[100px]">
        <div className="flex justify-center mb-[8px]"><span className="px-[12px] py-[4px] bg-[#f8f9fa] rounded-full text-[10px] font-bold text-[#c7c7cc] uppercase tracking-[1px]">Today</span></div>
        {chatMessages.map((m, idx) => (
          <div key={idx} className={`max-w-[80%] flex flex-col gap-[4px] ${m.sent ? 'self-end items-end' : 'self-start items-start'}`}>
            <div className={`px-[16px] py-[12px] rounded-[20px] text-[14px] leading-[20px] ${m.sent ? 'bg-[#fa9a50] text-white rounded-tr-[4px] shadow-[0_4px_10px_rgba(250,154,80,0.2)]' : 'bg-[#f8f9fa] text-[#1c1c1e] rounded-tl-[4px] border border-[#f3f4f6]'}`}>{m.text}</div>
            <span className="text-[10px] font-medium text-[#c7c7cc] px-[4px]">{m.time}</span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-[24px] pb-[40px] border-t border-[#f3f4f6] bg-white z-10">
        <form onSubmit={handleSend} className="flex gap-[12px] items-center">
          <div className="flex-1 relative"><input type="text" placeholder="Type a message..." value={newMessage} onChange={(e) => setNewMessage(e.target.value)} className="w-full bg-[#f8f9fa] border border-[#f3f4f6] text-[#1c1c1e] rounded-[16px] px-[20px] py-[16px] focus:outline-none focus:ring-2 focus:ring-[#fa9a50]/20 focus:border-[#fa9a50] font-medium text-[14px] placeholder:text-[#c7c7cc]" /></div>
          <button type="submit" disabled={!newMessage.trim()} className="w-[52px] h-[52px] bg-[#fa9a50] text-white rounded-[16px] flex items-center justify-center shadow-[0_4px_10px_rgba(250,154,80,0.3)] disabled:opacity-50 disabled:shadow-none active:scale-95"><Send size={22} /></button>
        </form>
      </div>
    </div>
  );
}

// ---- LEAVES ----
function LeavesScreen({ navigate }: { navigate: (s: Screen) => void }) {
  const [tab, setTab] = useState<'pending' | 'approved'>('pending');
  const [leavesList, setLeavesList] = useState([
    { child: 'Aarav Sharma', dates: '12 APR - 14 APR', reason: 'Family Function', status: 'pending' as const },
    { child: 'Aarav Sharma', dates: '15 APR', reason: 'Fever', status: 'approved' as const },
  ]);
  const [isAddingLeave, setIsAddingLeave] = useState(false);
  const [newLeave, setNewLeave] = useState({ dates: '', reason: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeave.dates || !newLeave.reason) { toast.error('Please fill all fields'); return; }
    setLeavesList([{ child: 'Aarav Sharma', dates: newLeave.dates.toUpperCase(), reason: newLeave.reason, status: 'pending' }, ...leavesList]);
    setIsAddingLeave(false); setNewLeave({ dates: '', reason: '' });
    toast.success('Leave application submitted successfully!');
  };

  return (
    <div className="flex flex-col min-h-full bg-[#f8f9fa] overflow-y-auto pb-[20px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative">
      {isAddingLeave && (
        <div className="absolute inset-0 z-50 flex flex-col justify-end">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" onClick={() => setIsAddingLeave(false)} />
          <div className="relative bg-white shadow-2xl rounded-t-[32px] p-[24px] pb-[40px] z-10">
            <div className="flex items-center justify-between mb-[32px]"><h2 className="text-[20px] font-bold text-[#1c1c1e]">Leave Application</h2><button onClick={() => setIsAddingLeave(false)} className="w-[32px] h-[32px] bg-[#f9fafb] rounded-[8px] flex items-center justify-center text-[#8e8e93]"><X size={18} /></button></div>
            <form onSubmit={handleSubmit} className="space-y-[24px]">
              <div className="space-y-[8px]"><label className="text-[12px] font-bold text-[#8e8e93] uppercase tracking-[1.2px]">DATES (E.G. 20 APR - 22 APR)</label>
                <div className="relative"><Calendar size={18} className="absolute left-[16px] top-[17px] text-[#ff7a7a]" /><input type="text" placeholder="Enter leave dates..." value={newLeave.dates} onChange={(e) => setNewLeave({...newLeave, dates: e.target.value})} className="w-full bg-[#f8f9fa] border border-[#f3f4f6] text-[#1c1c1e] rounded-[16px] pl-[48px] pr-[16px] py-[16px] focus:outline-none focus:ring-2 focus:ring-[#ff7a7a]/20 focus:border-[#ff7a7a] font-bold text-[14px] placeholder:text-[#c7c7cc] placeholder:font-medium" /></div>
              </div>
              <div className="space-y-[8px]"><label className="text-[12px] font-bold text-[#8e8e93] uppercase tracking-[1.2px]">REASON FOR LEAVE</label>
                <textarea placeholder="Enter the reason for leave..." value={newLeave.reason} onChange={(e) => setNewLeave({...newLeave, reason: e.target.value})} rows={4} className="w-full bg-[#f8f9fa] border border-[#f3f4f6] text-[#1c1c1e] rounded-[16px] px-[16px] py-[16px] focus:outline-none focus:ring-2 focus:ring-[#ff7a7a]/20 focus:border-[#ff7a7a] font-medium text-[14px] placeholder:text-[#c7c7cc] resize-none" />
              </div>
              <button type="submit" className="w-full bg-[#ff7a7a] text-white py-[16px] rounded-[16px] font-bold text-[16px] shadow-[0_4px_10px_rgba(255,122,122,0.3)] active:scale-95">Submit Application</button>
            </form>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between px-[24px] pt-[68px] pb-[20px]"><h1 className="text-[20px] font-bold text-[#1c1c1e] tracking-tight">Leave Applications</h1><button onClick={() => navigate('dashboard')} className="px-[21px] py-[8px] bg-white rounded-[42px] text-[14px] font-semibold text-[#1c1c1e] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#e5e5ea] active:scale-95">Home</button></div>
      <div className="px-[24px] space-y-[24px]">
        <div className="flex gap-[16px]">
          <button onClick={() => setTab('pending')} className={`flex-1 py-[12px] rounded-[12px] font-bold text-[14px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all ${tab === 'pending' ? 'bg-[#ff7a7a] text-white shadow-[0_4px_10px_rgba(255,122,122,0.3)] border border-[#ff7a7a]' : 'bg-white text-[#8e8e93] border border-[#f3f4f6]'}`}>Pending ({leavesList.filter(l => l.status === 'pending').length})</button>
          <button onClick={() => setTab('approved')} className={`flex-1 py-[12px] rounded-[12px] font-bold text-[14px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all ${tab === 'approved' ? 'bg-[#65d4b0] text-white shadow-[0_4px_10px_rgba(101,212,176,0.3)] border border-[#65d4b0]' : 'bg-white text-[#8e8e93] border border-[#f3f4f6]'}`}>Approved ({leavesList.filter(l => l.status === 'approved').length})</button>
        </div>
        <div className="space-y-[16px]">
          {leavesList.filter(l => l.status === tab).map((leave, idx) => (
            <div key={idx} className="bg-white p-[24px] rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#f9fafb]">
              <div className="flex justify-between items-start mb-[16px]"><div><h3 className="text-[16px] font-bold text-[#1c1c1e] mb-[4px]">{leave.child}</h3><p className="text-[10px] font-bold tracking-[1px] uppercase text-[#8e8e93]">{leave.dates}</p></div><div className={`px-[12px] py-[4px] rounded-[8px] text-[10px] font-bold tracking-[1px] uppercase ${leave.status === 'pending' ? 'bg-[#fff4ec] text-[#fa9a50]' : 'bg-[#effff8] text-[#65d4b0]'}`}>{leave.status}</div></div>
              <div className="bg-[#f8f9fa] rounded-[16px] p-[16px] mb-[16px] border border-[#f3f4f6]"><p className="text-[10px] font-bold tracking-[1px] uppercase text-[#8e8e93] mb-[4px]">REASON:</p><p className="text-[14px] font-medium text-[#1c1c1e]">{leave.reason}</p></div>
              {leave.status === 'pending' && <button onClick={() => setLeavesList(leavesList.filter((_, i) => i !== leavesList.indexOf(leave)))} className="w-full bg-[#fff0f0] text-[#ff7a7a] py-[12px] rounded-[12px] font-bold text-[14px] flex items-center justify-center gap-[8px]">Cancel Request</button>}
            </div>
          ))}
          {leavesList.filter(l => l.status === tab).length === 0 && <div className="py-[40px] flex flex-col items-center text-center opacity-40"><FileText size={48} className="text-[#8e8e93] mb-[16px]" /><p className="text-[14px] font-bold text-[#1c1c1e]">No {tab} applications found.</p></div>}
        </div>
      </div>
      <button onClick={() => setIsAddingLeave(true)} className="fixed bottom-[20px] right-[24px] w-[56px] h-[56px] bg-[#ff7a7a] text-white rounded-[20px] shadow-[0_4px_10px_rgba(255,122,122,0.3)] flex items-center justify-center active:scale-95 z-20"><Plus size={28} /></button>
    </div>
  );
}

// ---- PROFILE ----
function ProfileScreen({ navigate }: { navigate: (s: Screen) => void }) {
  const [isCalling, setIsCalling] = useState(false);
  return (
    <div className="flex flex-col h-full bg-[#f8f9fa] overflow-y-auto pb-[40px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {isCalling && (
        <div className="absolute inset-0 z-50 bg-[#1c1c1e] flex flex-col items-center justify-between p-[48px]">
          <div className="flex flex-col items-center mt-[40px]">
            <div className="w-[100px] h-[100px] bg-[#f0f5ff] rounded-full flex items-center justify-center mb-[24px] shadow-[0_0_40px_rgba(107,164,255,0.2)] animate-pulse"><span className="text-[40px] font-bold text-[#6ba4ff]">A</span></div>
            <h2 className="text-[28px] font-bold text-white">School Admin</h2><p className="text-[14px] font-medium text-[#8e8e93] mt-[8px]">Calling...</p>
          </div>
          <button onClick={() => setIsCalling(false)} className="w-[72px] h-[72px] bg-[#ff7a7a] rounded-full flex items-center justify-center text-white shadow-[0_8px_30px_rgba(255,122,122,0.3)] active:scale-95 mb-[60px]"><X size={32} /></button>
        </div>
      )}
      <div className="pt-[68px] px-[24px] pb-[24px] flex items-center justify-between">
        <div className="flex items-center gap-[12px]"><button onClick={() => navigate('dashboard')} className="w-[42px] h-[42px] bg-white rounded-[12px] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-[#f3f4f6]"><ArrowLeft size={20} className="text-[#1c1c1e]" /></button><h1 className="text-[18px] font-bold text-[#1c1c1e]">Profile</h1></div>
        <button onClick={() => navigate('dashboard')} className="px-[21px] py-[8px] bg-white rounded-[42px] text-[14px] font-semibold text-[#1c1c1e] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#e5e5ea] active:scale-95">Home</button>
      </div>
      <div className="px-[24px] space-y-[24px]">
        <div className="flex items-center gap-[20px]">
          <div className="w-[84px] h-[84px] bg-[#effff8] rounded-[28px] flex items-center justify-center shadow-[0_8px_24px_rgba(101,212,176,0.15)] border border-[#ddfdf0]"><span className="text-[32px] font-bold text-[#65d4b0]">A</span></div>
          <div><h2 className="text-[24px] font-bold text-[#1c1c1e]">Aarav Sharma</h2><p className="text-[12px] font-bold text-[#8e8e93] uppercase tracking-[1px] mt-[4px]">ROLL NO: 1 • CLASS 5A</p></div>
        </div>
        <div className="bg-white rounded-[24px] p-[21px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#f9fafb]">
          <div className="flex items-center gap-[8px] mb-[14px]"><User size={18} className="text-[#8e8e93]" /><h3 className="text-[12px] font-bold text-[#8e8e93] uppercase tracking-[1.2px]">CLASS TEACHER</h3></div>
          <div className="bg-[#f8f9fa] rounded-[16px] p-[17px] border border-[#f3f4f6] flex items-center justify-between">
            <div><p className="text-[15px] font-bold text-[#1c1c1e]">Anjali Sharma</p><p className="text-[12px] font-medium text-[#8e8e93]">+91 98765 43210</p></div>
            <button onClick={() => navigate('messages')} className="w-[42px] h-[42px] bg-[#effff8] rounded-[12px] flex items-center justify-center shadow-[0_4px_12px_rgba(101,212,176,0.15)] border border-[#ddfdf0] active:scale-95"><MessageSquare size={18} className="text-[#65d4b0]" /></button>
          </div>
        </div>
        <div className="bg-white rounded-[24px] p-[21px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#f9fafb]">
          <div className="flex items-center gap-[8px] mb-[14px]"><Menu size={18} className="text-[#8e8e93]" /><h3 className="text-[12px] font-bold text-[#8e8e93] uppercase tracking-[1.2px]">ADMINISTRATION</h3></div>
          <div className="bg-[#f8f9fa] rounded-[16px] p-[17px] border border-[#f3f4f6] flex items-center justify-between">
            <div><p className="text-[15px] font-bold text-[#1c1c1e]">School Admin Desk</p><p className="text-[12px] font-medium text-[#8e8e93]">+91 011 2345 6789</p></div>
            <button onClick={() => setIsCalling(true)} className="w-[42px] h-[42px] bg-[#f0f5ff] rounded-[12px] flex items-center justify-center shadow-[0_4px_12px_rgba(107,164,255,0.15)] border border-[#e5efff] active:scale-95"><Phone size={18} className="text-[#6ba4ff]" /></button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[16px]">
          <div className="bg-white rounded-[24px] p-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#f9fafb] flex flex-col items-center">
            <h3 className="text-[10px] font-bold text-[#8e8e93] uppercase tracking-[1px] mb-[20px]">ATTENDANCE</h3>
            <div className="relative w-[72px] h-[72px] flex items-center justify-center"><svg className="w-full h-full transform -rotate-90"><circle cx="36" cy="36" r="32" stroke="#f3f4f6" strokeWidth="8" fill="transparent" /><circle cx="36" cy="36" r="32" stroke="#ffb067" strokeWidth="8" fill="transparent" strokeDasharray="201" strokeDashoffset="16" strokeLinecap="round" /></svg><span className="absolute text-[16px] font-bold text-[#1c1c1e]">92%</span></div>
          </div>
          <div className="bg-[#65d4b0] rounded-[24px] p-[20px] shadow-[0_8px_24px_rgba(101,212,176,0.3)] flex flex-col items-center justify-center text-white relative overflow-hidden">
            <div className="absolute top-[-20px] right-[-20px] w-[80px] h-[80px] bg-white/10 rounded-full blur-[40px]" />
            <h3 className="text-[10px] font-bold text-white/70 uppercase tracking-[1px] mb-[10px]">AVG TEST SCORE</h3><span className="text-[32px] font-bold mb-[8px]">85%</span>
            <div className="bg-white/20 border border-white/10 px-[8px] py-[3px] rounded-[6px] shadow-sm"><span className="text-[9px] font-bold uppercase tracking-[0.9px]">EXCELLENT</span></div>
          </div>
        </div>
        <div className="bg-white rounded-[24px] p-[21px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#f9fafb]">
          <div className="flex items-center gap-[8px] mb-[20px]"><FileText size={18} className="text-[#8e8e93]" /><h3 className="text-[12px] font-bold text-[#1c1c1e] uppercase tracking-[1.2px]">SUBJECT SCALES</h3></div>
          <div className="space-y-[16px]">
            {[{ label: 'Mathematics', score: 88, color: 'bg-[#6ba4ff]' }, { label: 'Science', score: 90, color: 'bg-[#65d4b0]' }, { label: 'English', score: 85, color: 'bg-[#8a73ff]' }, { label: 'Social Studies', score: 78, color: 'bg-[#ffb067]' }].map(s => (
              <div key={s.label} className="space-y-[6px]"><div className="flex justify-between items-center"><span className="text-[12px] font-bold text-[#8e8e93]">{s.label}</span><span className="text-[12px] font-bold text-[#1c1c1e]">{s.score}%</span></div><div className="w-full bg-[#f8f9fa] h-[6px] rounded-full border border-[#f3f4f6] relative overflow-hidden"><div className={`absolute left-0 top-0 h-full rounded-full ${s.color}`} style={{ width: `${s.score}%` }} /></div></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
