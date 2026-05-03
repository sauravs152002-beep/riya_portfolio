import React, { useState, createContext, useContext } from "react";
import { 
  Video, 
  MessageSquare, 
  Utensils, 
  Menu, 
  FileText, 
  CircleCheck, 
  Search, 
  Plus, 
  Calendar, 
  User, 
  CalendarDays, 
  X, 
  LogOut,
  Phone
} from "lucide-react";
import clsx from "clsx";
import { Toaster, toast } from "sonner";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

// --- Types ---
type MealOption = "none" | "veg" | "non-veg" | "jain";

interface DayPlan {
  day: string;
  date: string;
  option: MealOption;
}

// --- Layout Component ---
function Layout() {
  const navItems = [
    { to: "/meals", icon: Utensils, label: "Meals" },
    { to: "/ptm", icon: Video, label: "PTM" },
    { to: "/leaves", icon: FileText, label: "Leaves" },
    { to: "/messages", icon: MessageSquare, label: "Messages" },
    { to: "/profile", icon: User, label: "Profile" },
  ];

  const location = useLocation();
  const isDashboard = location.pathname === "/";

  return (
    <div className="flex justify-center bg-[#f2f2f7] min-h-full">
      <div className="w-full bg-[#f8f9fa] min-h-full relative shadow-2xl overflow-hidden flex flex-col">
        <Toaster position="top-center" />
        <main className={clsx(
          "flex-1 overflow-y-auto no-scrollbar",
          !isDashboard && location.pathname !== "/login" && "pb-[110px]"
        )}>
          <Outlet />
        </main>
        {!isDashboard && location.pathname !== "/login" && (
          <nav className="absolute bottom-0 w-full bg-white/95 backdrop-blur-md border-t border-[#f3f4f6] h-[106px] px-4 flex justify-between items-start pt-4 z-10 shadow-[0_-8px_30px_rgba(0,0,0,0.02)]">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  clsx(
                    "flex flex-col items-center gap-1.5 w-[64px] no-underline",
                    isActive ? "text-[#8A73FF]" : "text-[#8E8E93]"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <div
                      className={clsx(
                        "w-10 h-10 rounded-[14px] flex items-center justify-center transition-colors",
                        isActive ? "bg-[#f4f0ff]" : "bg-transparent"
                      )}
                    >
                      <item.icon
                        size={22}
                        strokeWidth={isActive ? 2.5 : 2}
                        className={isActive ? "text-[#8A73FF]" : "text-[#8E8E93]"}
                      />
                    </div>
                    <span className="text-[9px] font-bold tracking-[-0.2px] uppercase text-center opacity-80">
                      {item.label}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}

// --- View Components ---

function Login() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (code) navigate("/");
  };

  return (
    <div className="flex justify-center bg-[#f2f2f7] min-h-full">
      <div className="w-full bg-white min-h-full relative shadow-2xl flex flex-col px-[24px] justify-center items-center">
        <div className="w-[80px] h-[80px] bg-[#f4f0ff] rounded-[24px] flex items-center justify-center mb-[32px]">
          <User size={40} className="text-[#8a73ff]" strokeWidth={2} />
        </div>
        <h1 className="text-[24px] font-bold text-[#1c1c1e] tracking-[-0.5px] mb-[8px]">Parent Portal</h1>
        <p className="text-[14px] font-medium text-[#8e8e93] mb-[40px] text-center">Enter the access code provided by the school to continue.</p>
        
        <form onSubmit={handleLogin} className="w-full space-y-[24px]">
          <div className="space-y-[8px]">
            <label className="text-[12px] font-bold text-[#8e8e93] uppercase tracking-[1px]">School Code</label>
            <input 
              type="text" 
              placeholder="e.g. SCH-1234"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full bg-[#f8f9fa] border border-[#f3f4f6] text-[#1c1c1e] rounded-[16px] px-[16px] py-[16px] focus:outline-none focus:ring-2 focus:ring-[#8a73ff]/20 focus:border-[#8a73ff] font-bold text-[16px] placeholder:text-[#c7c7cc] placeholder:font-medium transition-all"
            />
          </div>
          <button 
            type="submit"
            disabled={!code}
            className="w-full bg-[#8a73ff] text-white py-[16px] rounded-[16px] font-bold text-[16px] shadow-[0_4px_10px_rgba(138,115,255,0.3)] disabled:opacity-50 disabled:shadow-none transition-all active:scale-95"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const cards = [
    { to: "/meals", title: "Lunch Booking", subtitle: "Weekly Canteen", badge: "Booked", icon: Utensils, bgClass: "bg-[#effff8]", iconClass: "text-[#65d4b0]", badgeClass: "bg-[#65d4b0] text-white shadow-[0px_4px_10px_0px_rgba(101,212,176,0.3)]" },
    { to: "/ptm", title: "PTM Slots", subtitle: "Manage setup", badge: "2 Today", icon: Video, bgClass: "bg-[#f0f5ff]", iconClass: "text-[#6ba4ff]", badgeClass: "bg-[#f0f5ff] text-[#6ba4ff]" },
    { to: "/leaves", title: "Leaves", subtitle: "Requests", badge: "2 Pending", icon: FileText, bgClass: "bg-[#fff0f0]", iconClass: "text-[#ff7a7a]", badgeClass: "bg-[#fff0f0] text-[#ff7a7a]" },
    { to: "/messages", title: "Messages", subtitle: "Parent chats", badge: "1 Unread", icon: MessageSquare, bgClass: "bg-[#fff4ec]", iconClass: "text-[#fa9a50]", badgeClass: "bg-[#fa9a50] text-white shadow-[0px_4px_10px_0px_rgba(250,154,80,0.3)]" },
    { to: "/profile", title: "Aarav Sharma", subtitle: "Roll No. 1 • Class 5A", badge: "A+", icon: User, bgClass: "bg-[#f4f0ff]", iconClass: "text-[#8a73ff]", badgeClass: "bg-[#f4f0ff] text-[#8a73ff]" },
  ];

  return (
    <div className="flex flex-col h-full bg-[#f8f9fa] overflow-x-hidden no-scrollbar">
      {/* Side Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex justify-center bg-transparent pointer-events-none">
          <div className="w-full max-w-[390px] relative pointer-events-auto h-full">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] transition-opacity" onClick={() => setIsMenuOpen(false)} />
            <div className="absolute top-0 left-0 w-[312px] h-full bg-white shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-300 rounded-r-[32px] overflow-hidden">
              {/* Menu Header */}
              <div className="p-[24px] pt-[68px] flex items-start justify-between border-b border-[#f3f4f6]">
                <div className="flex items-center gap-[16px]">
                  <div className="w-[56px] h-[56px] bg-[#f4f0ff] rounded-[16px] flex items-center justify-center">
                    <span className="text-[24px] font-bold text-[#8a73ff]">R</span>
                  </div>
                  <div>
                    <h2 className="text-[18px] font-bold text-[#1c1c1e] leading-[22px]">Rohan S.</h2>
                    <p className="text-[12px] font-medium text-[#8e8e93] mt-[2px]">Parent of Aarav</p>
                  </div>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="w-[32px] h-[32px] bg-[#f9fafb] rounded-[8px] flex items-center justify-center text-[#8e8e93]">
                  <X size={18} strokeWidth={2.5} />
                </button>
              </div>
              
              {/* Menu Options */}
              <div className="p-[20px] flex flex-col gap-[8px] flex-1 bg-[#f8f9fa]">
                <button onClick={() => { navigate("/profile"); setIsMenuOpen(false); }} className="w-full bg-white h-[52px] rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.02)] flex items-center px-[20px] gap-[16px] active:scale-95 transition-transform">
                  <User size={20} className="text-[#8a73ff]" strokeWidth={2} />
                  <span className="font-semibold text-[14px] text-[#1c1c1e]">Child Profile</span>
                </button>
                <button className="w-full bg-white h-[52px] rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.02)] flex items-center px-[20px] gap-[16px] active:scale-95 transition-transform">
                  <CalendarDays size={20} className="text-[#8a73ff]" strokeWidth={2} />
                  <span className="font-semibold text-[14px] text-[#1c1c1e]">Academic Calendar</span>
                </button>
              </div>

              {/* Log Out */}
              <div className="p-[24px] pb-[40px] bg-[#f8f9fa]">
                <button onClick={() => navigate("/login")} className="w-full bg-white h-[52px] rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.02)] flex items-center justify-center gap-[12px] active:scale-95 transition-transform">
                  <LogOut size={18} className="text-[#ff7a7a]" strokeWidth={2.5} />
                  <span className="font-bold text-[14px] text-[#ff7a7a]">Log Out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="pt-[68px] px-[24px] pb-[32px] flex items-center justify-between">
        <div className="flex items-center gap-[16px]">
          <button onClick={() => setIsMenuOpen(true)} className="w-[42px] h-[42px] bg-white rounded-[12px] flex items-center justify-center shadow-[0px_4px_12px_0px_rgba(0,0,0,0.03)] border border-[#f3f4f6]">
            <Menu size={20} className="text-[#1c1c1e]" />
          </button>
          <div className="flex flex-col">
            <h1 className="text-[20px] font-bold text-[#1c1c1e] tracking-[-0.5px] leading-[20px]">Hi! Rohan S.</h1>
            <p className="text-[13px] font-medium text-[#8e8e93] leading-[13px] mt-[4px]">Parent of Aarav</p>
          </div>
        </div>
        <div className="w-[42px] h-[42px] bg-white rounded-[12px] flex items-center justify-center shadow-[0px_4px_12px_0px_rgba(0,0,0,0.03)] border border-[#f3f4f6]">
          <span className="text-[16px] font-bold text-[#8a73ff]">R</span>
        </div>
      </div>

      <div className="px-[24px] pb-[40px] flex flex-col gap-[16px]">
        {cards.map((card, idx) => (
          <Link 
            key={idx} 
            to={card.to} 
            className="no-underline bg-white rounded-[24px] p-[17px] flex items-center gap-[20px] shadow-[0px_8px_30px_0px_rgba(0,0,0,0.03)] border border-[#f3f4f6] transition-transform active:scale-95 h-[122px]"
          >
            <div className={clsx("w-[68px] h-[68px] rounded-[20px] flex items-center justify-center shrink-0", card.bgClass)}>
              <card.icon size={32} strokeWidth={2.5} className={card.iconClass} />
            </div>
            <div className="flex-1 flex flex-col justify-center min-w-0 h-full">
              <h2 className="text-[18px] font-bold text-[#1c1c1e] mb-[4px] leading-[22.5px] truncate">{card.title}</h2>
              <div className="flex items-center justify-between mt-[12px]">
                <p className="text-[12px] font-medium text-[#8e8e93] leading-[18px] truncate">{card.subtitle}</p>
                <span className={clsx("text-[10px] font-bold px-[12px] py-[4px] rounded-[8px] leading-[15px] whitespace-nowrap", card.badgeClass)}>{card.badge}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Profile() {
  const navigate = useNavigate();
  const [isCalling, setIsCalling] = useState(false);

  return (
    <div className="flex flex-col h-full bg-[#f8f9fa] overflow-x-hidden pb-[40px] no-scrollbar">
      {/* Calling Overlay */}
      {isCalling && (
        <div className="fixed inset-0 z-[100] flex justify-center bg-transparent pointer-events-none">
          <div className="w-full relative pointer-events-auto h-full bg-[#1c1c1e] flex flex-col items-center justify-between p-[48px] animate-in fade-in duration-300">
            <div className="flex flex-col items-center mt-[40px]">
              <div className="w-[100px] h-[100px] bg-[#f0f5ff] rounded-full flex items-center justify-center mb-[24px] shadow-[0_0_40px_rgba(107,164,255,0.2)] animate-pulse">
                <span className="text-[40px] font-bold text-[#6ba4ff]">A</span>
              </div>
              <h2 className="text-[28px] font-bold text-white tracking-[-0.5px]">School Admin</h2>
              <p className="text-[14px] font-medium text-[#8e8e93] mt-[8px]">Calling...</p>
            </div>

            <div className="flex flex-col items-center gap-[40px] mb-[60px]">
              <div className="grid grid-cols-3 gap-[40px]">
                {[Menu, Utensils, MessageSquare].map((Icon, i) => (
                  <button key={i} className="w-[56px] h-[56px] rounded-full bg-white/10 flex items-center justify-center text-white/50 active:scale-95 transition-transform">
                    <Icon size={24} />
                  </button>
                ))}
              </div>
              <button 
                onClick={() => setIsCalling(false)}
                className="w-[72px] h-[72px] bg-[#ff7a7a] rounded-full flex items-center justify-center text-white shadow-[0_8px_30px_rgba(255,122,122,0.3)] active:scale-95 transition-transform"
              >
                <X size={32} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="pt-[68px] px-[24px] pb-[24px] flex items-center justify-between">
        <div className="flex items-center gap-[12px]">
          <button onClick={() => navigate(-1)} className="w-[42px] h-[42px] bg-white rounded-[12px] flex items-center justify-center shadow-[0px_4px_12px_0px_rgba(0,0,0,0.03)] border border-[#f3f4f6]">
            <X size={20} className="text-[#1c1c1e]" />
          </button>
          <h1 className="text-[18px] font-bold text-[#1c1c1e]">Profile</h1>
        </div>
        <button onClick={() => navigate("/")} className="px-[21px] py-[8px] bg-white rounded-[42px] text-[14px] font-semibold text-[#1c1c1e] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#e5e5ea] active:scale-95 transition-transform no-underline">
          Home
        </button>
      </div>

      <div className="px-[24px] space-y-[24px]">
        {/* Child Card */}
        <div className="flex items-center gap-[20px]">
          <div className="w-[84px] h-[84px] bg-[#effff8] rounded-[28px] flex items-center justify-center shadow-[0px_8px_24px_rgba(101,212,176,0.15)] border border-[#ddfdf0]">
            <span className="text-[32px] font-bold text-[#65d4b0]">A</span>
          </div>
          <div>
            <h2 className="text-[24px] font-bold text-[#1c1c1e] tracking-[-0.6px]">Aarav Sharma</h2>
            <p className="text-[12px] font-bold text-[#8e8e93] uppercase tracking-[1px] mt-[4px]">ROLL NO: 1 • CLASS 5A</p>
          </div>
        </div>

        {/* Teacher Details */}
        <div className="bg-white rounded-[24px] p-[21px] shadow-[0px_8px_30px_rgba(0,0,0,0.03)] border border-[#f9fafb]">
          <div className="flex items-center gap-[8px] mb-[14px]">
            <User size={18} className="text-[#8e8e93]" />
            <h3 className="text-[12px] font-bold text-[#8e8e93] uppercase tracking-[1.2px]">CLASS TEACHER</h3>
          </div>
          <div className="bg-[#f8f9fa] rounded-[16px] p-[17px] border border-[#f3f4f6] flex items-center justify-between">
            <div>
              <p className="text-[15px] font-bold text-[#1c1c1e]">Anjali Sharma</p>
              <p className="text-[12px] font-medium text-[#8e8e93]">+91 98765 43210</p>
            </div>
            <button 
              onClick={() => navigate("/messages")}
              className="w-[42px] h-[42px] bg-[#effff8] rounded-[12px] flex items-center justify-center shadow-[0px_4px_12px_rgba(101,212,176,0.15)] border border-[#ddfdf0] active:scale-95 transition-transform"
            >
              <MessageSquare size={18} className="text-[#65d4b0]" />
            </button>
          </div>
        </div>

        {/* Administration Details */}
        <div className="bg-white rounded-[24px] p-[21px] shadow-[0px_8px_30px_rgba(0,0,0,0.03)] border border-[#f9fafb]">
          <div className="flex items-center gap-[8px] mb-[14px]">
            <Menu size={18} className="text-[#8e8e93]" />
            <h3 className="text-[12px] font-bold text-[#8e8e93] uppercase tracking-[1.2px]">ADMINISTRATION</h3>
          </div>
          <div className="bg-[#f8f9fa] rounded-[16px] p-[17px] border border-[#f3f4f6] flex items-center justify-between">
            <div>
              <p className="text-[15px] font-bold text-[#1c1c1e]">School Admin Desk</p>
              <p className="text-[12px] font-medium text-[#8e8e93]">+91 011 2345 6789</p>
            </div>
            <button 
              onClick={() => setIsCalling(true)}
              className="w-[42px] h-[42px] bg-[#f0f5ff] rounded-[12px] flex items-center justify-center shadow-[0px_4px_12px_rgba(107,164,255,0.15)] border border-[#e5efff] active:scale-95 transition-transform"
            >
              <Phone size={18} className="text-[#6ba4ff]" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-[16px]">
          <div className="bg-white rounded-[24px] p-[20px] shadow-[0px_8px_30px_rgba(0,0,0,0.03)] border border-[#f9fafb] flex flex-col items-center">
            <h3 className="text-[10px] font-bold text-[#8e8e93] uppercase tracking-[1px] mb-[20px]">ATTENDANCE</h3>
            <div className="relative w-[72px] h-[72px] flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="36" cy="36" r="32" stroke="#f3f4f6" strokeWidth="8" fill="transparent" />
                <circle cx="36" cy="36" r="32" stroke="#ffb067" strokeWidth="8" fill="transparent" strokeDasharray="201" strokeDashoffset="16" strokeLinecap="round" />
              </svg>
              <span className="absolute text-[16px] font-bold text-[#1c1c1e]">92%</span>
            </div>
          </div>
          <div className="bg-[#65d4b0] rounded-[24px] p-[20px] shadow-[0px_8px_24px_rgba(101,212,176,0.3)] flex flex-col items-center justify-center text-white relative overflow-hidden">
            <div className="absolute top-[-20px] right-[-20px] w-[80px] h-[80px] bg-white/10 rounded-full blur-[40px]" />
            <h3 className="text-[10px] font-bold text-white/70 uppercase tracking-[1px] mb-[10px]">AVG TEST SCORE</h3>
            <span className="text-[32px] font-bold mb-[8px]">85%</span>
            <div className="bg-white/20 border border-white/10 px-[8px] py-[3px] rounded-[6px] shadow-sm">
              <span className="text-[9px] font-bold uppercase tracking-[0.9px]">EXCELLENT</span>
            </div>
          </div>
        </div>

        {/* Subject Scales */}
        <div className="bg-white rounded-[24px] p-[21px] shadow-[0px_8px_30px_rgba(0,0,0,0.03)] border border-[#f9fafb]">
          <div className="flex items-center gap-[8px] mb-[20px]">
            <FileText size={18} className="text-[#8e8e93]" />
            <h3 className="text-[12px] font-bold text-[#1c1c1e] uppercase tracking-[1.2px]">SUBJECT SCALES</h3>
          </div>
          <div className="space-y-[16px]">
            {[
              { label: "Mathematics", score: 88, color: "bg-[#6ba4ff]" },
              { label: "Science", score: 90, color: "bg-[#65d4b0]" },
              { label: "English", score: 85, color: "bg-[#8a73ff]" },
              { label: "Social Studies", score: 78, color: "bg-[#ffb067]" },
            ].map((subject) => (
              <div key={subject.label} className="space-y-[6px]">
                <div className="flex justify-between items-center">
                  <span className="text-[12px] font-bold text-[#8e8e93]">{subject.label}</span>
                  <span className="text-[12px] font-bold text-[#1c1c1e]">{subject.score}%</span>
                </div>
                <div className="w-full bg-[#f8f9fa] h-[6px] rounded-full border border-[#f3f4f6] relative overflow-hidden">
                  <div className={clsx("absolute left-0 top-0 h-full rounded-full", subject.color)} style={{ width: `${subject.score}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PTM() {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2026, 3, 18)); // April 18, 2026
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const slots = ["10:00", "10:15", "10:30", "10:45", "11:00"];

  const formattedDate = selectedDate ? format(selectedDate, "dd MMMM yyyy") : "";

  const handleConfirm = () => {
    setBooked(true);
    toast.success(`You have booked a slot for ${selectedSlot} on ${formattedDate}`);
  };

  const handleJoinCall = () => {
    let count = 5;
    const toastId = toast(`Your meeting is starting in ${count}...`, { duration: 6000 });
    
    const interval = setInterval(() => {
      count -= 1;
      if (count > 0) {
        toast(`Your meeting is starting in ${count}...`, { id: toastId, duration: 6000 });
      } else {
        clearInterval(interval);
        toast.success("Meeting started!", { id: toastId });
      }
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-[#f8f9fa] overflow-x-hidden pb-[100px] no-scrollbar">
      <div className="flex items-center justify-between px-[24px] pt-[68px] pb-[20px]">
        <h1 className="text-[20px] font-bold text-[#1c1c1e] tracking-[-0.5px]">PTM Meetings</h1>
        <Link to="/" className="px-[21px] py-[8px] bg-white rounded-[42px] text-[14px] font-semibold text-[#1c1c1e] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#e5e5ea] active:scale-95 transition-transform no-underline">Home</Link>
      </div>
      <div className="px-[24px] space-y-[24px]">
        <div className="bg-white rounded-[24px] p-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#f9fafb]">
          <h2 className="text-[10px] font-bold text-[#8e8e93] uppercase tracking-[1px] mb-[20px]">BOOK A SLOT</h2>
          <div className="mb-[24px]">
            <h3 className="text-[10px] font-bold text-[#c7c7cc] uppercase tracking-[1px] mb-[8px]">DATE</h3>
            <div className="flex items-center justify-between border-b border-[#f3f4f6] pb-[16px] relative z-10">
              <p className="text-[16px] font-bold text-[#1c1c1e]">{formattedDate}</p>
              
              <button 
                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                className="relative w-[42px] h-[42px] bg-[#6ba4ff] rounded-[12px] flex items-center justify-center overflow-hidden shadow-[0_4px_10px_rgba(107,164,255,0.3)] active:scale-95 transition-transform"
              >
                <Calendar size={20} className="text-white" strokeWidth={2.5} />
              </button>
              
              {isCalendarOpen && (
                <>
                  <div className="fixed inset-0 z-40 bg-black/5 backdrop-blur-[2px]" onClick={() => setIsCalendarOpen(false)} />
                  <div className="absolute top-[100%] right-0 mt-[8px] bg-white rounded-[24px] p-[24px] shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-[#f3f4f6] z-50 w-[300px] animate-in fade-in zoom-in-95 duration-200">
                    <DayPicker
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => {
                        if (date) {
                          setSelectedDate(date);
                          setIsCalendarOpen(false);
                        }
                      }}
                      className="!m-0"
                      classNames={{
                        months: "flex flex-col space-y-4",
                        month: "space-y-4",
                        caption: "flex justify-center pt-1 relative items-center",
                        caption_label: "text-[14px] font-bold text-[#1c1c1e]",
                        nav: "space-x-1 flex items-center",
                        nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 flex items-center justify-center rounded-[8px]",
                        nav_button_previous: "absolute left-1",
                        nav_button_next: "absolute right-1",
                        table: "w-full border-collapse space-y-1",
                        head_row: "flex w-full mb-2",
                        head_cell: "text-[#c7c7cc] rounded-md w-9 font-bold text-[10px] uppercase text-center",
                        row: "flex w-full mt-2",
                        cell: "text-center text-[14px] p-0 relative [&:has([aria-selected])]:bg-transparent w-9 h-9",
                        day: "h-9 w-9 p-0 font-bold text-[14px] rounded-full hover:bg-[#f0f5ff] text-[#1c1c1e] bg-transparent border-none cursor-pointer flex items-center justify-center",
                        day_selected: "!bg-[#6ba4ff] !text-white hover:!bg-[#6ba4ff] shadow-[0_4px_10px_rgba(107,164,255,0.3)]",
                        day_today: "bg-[#f8f9fa] text-[#1c1c1e]",
                        day_outside: "text-[#c7c7cc] opacity-50",
                        day_disabled: "text-[#c7c7cc] opacity-50",
                        day_hidden: "invisible",
                      }}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="mb-[24px]">
            <h3 className="text-[10px] font-bold text-[#c7c7cc] uppercase tracking-[1px] mb-[12px]">15-MIN SLOTS</h3>
            <div className="grid grid-cols-3 gap-[12px]">
              {slots.map((slot) => (
                <button key={slot} onClick={() => setSelectedSlot(slot)} className={clsx("py-[12px] rounded-[12px] text-[13px] font-bold transition-all border", selectedSlot === slot ? "bg-[#6ba4ff] text-white border-[#6ba4ff] shadow-[0_4px_10px_rgba(107,164,255,0.3)]" : "bg-[#f0f5ff] text-[#6ba4ff] border-transparent hover:bg-[#e5efff]")}>{slot}</button>
              ))}
            </div>
          </div>
          <button disabled={!selectedSlot || booked} onClick={handleConfirm} className="w-full bg-[#6ba4ff] text-white py-[16px] rounded-[16px] font-bold text-[14px] shadow-[0_4px_10px_rgba(107,164,255,0.3)] disabled:opacity-50 disabled:shadow-none transition-all active:scale-95">{booked ? "Slot Booked!" : `Confirm ${selectedSlot || 'Slot'}`}</button>
        </div>
        <div className="space-y-[16px]">
          <h2 className="text-[10px] font-bold text-[#8e8e93] uppercase tracking-[1px] px-[8px]">UPCOMING MEETINGS</h2>
          <div className="bg-white rounded-[24px] p-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#f9fafb]">
            <div className="flex justify-between items-start mb-[16px]">
              <div>
                <h3 className="text-[16px] font-bold text-[#1c1c1e] mb-[4px]">Ms. Anjali Gupta</h3>
                <div className="flex items-center gap-[6px] text-[#8e8e93]">
                  <User size={12} strokeWidth={2.5} className="text-[#6ba4ff]" />
                  <p className="text-[10px] font-bold uppercase tracking-[1px]">AARAV SHARMA</p>
                </div>
              </div>
              <div className="bg-[#f0f5ff] text-[#6ba4ff] px-[12px] py-[4px] rounded-[8px] text-[10px] font-bold tracking-[1px] uppercase">TODAY</div>
            </div>
            <div className="flex items-center gap-[8px] mb-[24px] bg-[#f8f9fa] inline-flex px-[16px] py-[8px] rounded-[12px]">
              <Calendar size={14} className="text-[#1c1c1e]" strokeWidth={2.5} />
              <p className="text-[13px] font-bold text-[#1c1c1e]">14:00 - 14:15</p>
            </div>
            <button onClick={handleJoinCall} className="w-full bg-[#6ba4ff] text-white py-[16px] rounded-[16px] font-bold text-[14px] flex items-center justify-center gap-[8px] shadow-[0_4px_10px_rgba(107,164,255,0.3)] active:scale-95 transition-transform"><Video size={18} strokeWidth={2.5} />Join Call</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Messages() {
  const [selectedChat, setSelectedChat] = useState<{ name: string; initial: string } | null>(null);
  const [chatMessages, setChatMessages] = useState<{ text: string; sent: boolean; time: string }[]>([
    { text: "Hello! How is Aarav doing in class?", sent: true, time: "10:15 AM" },
    { text: "He's doing great! He participated very well in the Math quiz today.", sent: false, time: "10:25 AM" },
    { text: "Thank you for the update.", sent: true, time: "10:30 AM" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const msg = {
      text: newMessage,
      sent: true,
      time: format(new Date(), "p"),
    };

    setChatMessages([...chatMessages, msg]);
    setNewMessage("");
    
    // Mock response
    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        text: "I'll look into that and get back to you soon.",
        sent: false,
        time: format(new Date(), "p")
      }]);
    }, 1500);
  };

  const messages = [
    { name: "Ms. Anjali Gupta", initial: "A", msg: "Thank you for the update.", time: "10:30 AM", unread: 0, recent: false },
    { name: "Vikram Singh", initial: "V", msg: "Is he doing better in Math?", time: "YESTERDAY", unread: 1, recent: true },
    { name: "Mrs. Radhika", initial: "R", msg: "Choir practice is moved to Friday.", time: "MONDAY", unread: 0, recent: false },
  ];

  return (
    <div className="flex flex-col min-h-full bg-[#f8f9fa] overflow-x-hidden pb-[100px] no-scrollbar">
      {/* Chat Box Overlay */}
      {selectedChat && (
        <div className="fixed inset-0 z-[100] flex justify-center bg-transparent pointer-events-none">
          <div className="w-full max-w-[390px] relative pointer-events-auto h-full bg-white flex flex-col animate-in slide-in-from-right duration-300">
            {/* Chat Header */}
            <div className="pt-[68px] px-[24px] pb-[16px] border-b border-[#f3f4f6] flex items-center gap-[16px] bg-white/80 backdrop-blur-md sticky top-0 z-10">
              <button onClick={() => setSelectedChat(null)} className="w-[42px] h-[42px] bg-[#f8f9fa] rounded-[12px] flex items-center justify-center text-[#1c1c1e] active:scale-95 transition-transform">
                <X size={20} strokeWidth={2.5} />
              </button>
              <div className="flex items-center gap-[12px] flex-1">
                <div className="w-[42px] h-[42px] bg-[#fff4ec] rounded-[12px] flex items-center justify-center shrink-0">
                  <span className="text-[18px] font-bold text-[#fa9a50]">{selectedChat.initial}</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#1c1c1e] text-[16px] leading-tight">{selectedChat.name}</h3>
                  <p className="text-[11px] font-medium text-[#65d4b0]">Online</p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-[24px] space-y-[16px] no-scrollbar flex flex-col">
              <div className="flex justify-center mb-[8px]">
                <span className="px-[12px] py-[4px] bg-[#f8f9fa] rounded-full text-[10px] font-bold text-[#c7c7cc] uppercase tracking-[1px]">Today</span>
              </div>
              {chatMessages.map((m, idx) => (
                <div key={idx} className={clsx(
                  "max-w-[80%] flex flex-col gap-[4px]",
                  m.sent ? "self-end items-end" : "self-start items-start"
                )}>
                  <div className={clsx(
                    "px-[16px] py-[12px] rounded-[20px] text-[14px] leading-[20px]",
                    m.sent ? "bg-[#fa9a50] text-white rounded-tr-[4px] shadow-[0_4px_10px_rgba(250,154,80,0.2)]" : "bg-[#f8f9fa] text-[#1c1c1e] rounded-tl-[4px] border border-[#f3f4f6]"
                  )}>
                    {m.text}
                  </div>
                  <span className="text-[10px] font-medium text-[#c7c7cc] px-[4px]">{m.time}</span>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-[24px] pb-[40px] border-t border-[#f3f4f6] bg-white">
              <form onSubmit={handleSendMessage} className="flex gap-[12px] items-center">
                <div className="flex-1 relative">
                  <input 
                    type="text" 
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="w-full bg-[#f8f9fa] border border-[#f3f4f6] text-[#1c1c1e] rounded-[16px] px-[20px] py-[16px] focus:outline-none focus:ring-2 focus:ring-[#fa9a50]/20 focus:border-[#fa9a50] font-medium text-[14px] transition-all placeholder:text-[#c7c7cc]"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={!newMessage.trim()}
                  className="w-[52px] h-[52px] bg-[#fa9a50] text-white rounded-[16px] flex items-center justify-center shadow-[0_4px_10px_rgba(250,154,80,0.3)] disabled:opacity-50 disabled:shadow-none active:scale-95 transition-all"
                >
                  <MessageSquare size={22} strokeWidth={2.5} />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between px-[24px] pt-[68px] pb-[20px]">
        <h1 className="text-[20px] font-bold text-[#1c1c1e] tracking-[-0.5px]">Messages</h1>
        <Link to="/" className="px-[21px] py-[8px] bg-white rounded-[42px] text-[14px] font-semibold text-[#1c1c1e] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#e5e5ea] active:scale-95 transition-transform no-underline">Home</Link>
      </div>
      <div className="px-[24px] space-y-[24px]">
        <div className="relative">
          <Search size={20} className="absolute left-[20px] top-[18px] text-[#8e8e93]" strokeWidth={2} />
          <input type="text" placeholder="Search messages..." className="w-full bg-white border border-[#f3f4f6] text-[#1c1c1e] rounded-[16px] pl-[52px] pr-[20px] py-[16px] focus:outline-none focus:ring-2 focus:ring-[#fa9a50]/20 focus:border-[#fa9a50] font-medium text-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.02)] placeholder:text-[#c7c7cc]" />
        </div>
        <div className="space-y-[14px]">
          {messages.map((m, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedChat({ name: m.name, initial: m.initial })}
              className="bg-white p-[17px] rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex items-center gap-[16px] border border-[#f9fafb] active:scale-95 transition-transform cursor-pointer"
            >
              <div className="w-[52px] h-[52px] bg-[#fff4ec] rounded-[18px] flex items-center justify-center shrink-0">
                <span className="text-[20px] font-bold text-[#fa9a50] leading-[30px]">{m.initial}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-[4px]">
                  <h4 className="font-bold text-[#1c1c1e] text-[16px] truncate leading-[24px]">{m.name}</h4>
                  <span className={clsx("text-[10px] font-bold tracking-[1px] uppercase whitespace-nowrap leading-[15px]", m.recent ? "text-[#fa9a50]" : "text-[#8e8e93]")}>{m.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className={clsx("text-[13px] leading-[19.5px] truncate", m.unread > 0 ? "font-bold text-[#1c1c1e]" : "font-medium text-[#8e8e93]")}>{m.msg}</p>
                  {m.unread > 0 && <div className="w-[24px] h-[24px] bg-[#fa9a50] rounded-[8px] flex items-center justify-center shrink-0 shadow-[0_4px_10px_rgba(250,154,80,0.3)]"><span className="text-[11px] font-bold text-white leading-[16.5px]">{m.unread}</span></div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Meals() {
  const [plan, setPlan] = useState<DayPlan[]>([
    { day: "Mon", date: "15 Apr", option: "none" },
    { day: "Tue", date: "16 Apr", option: "none" },
    { day: "Wed", date: "17 Apr", option: "none" },
    { day: "Thu", date: "18 Apr", option: "none" },
    { day: "Fri", date: "19 Apr", option: "none" },
  ]);
  const [submitted, setSubmitted] = useState(false);

  const [selectedMealDetail, setSelectedMealDetail] = useState<{ day: string; type: string; menu: string[]; insights: string; nutrition: { label: string; value: string }[] } | null>(null);

  const mealMenus = {
    veg: {
      menu: ["Paneer Butter Masala", "Jeera Rice", "Whole Wheat Roti", "Fresh Cucumber Salad", "Moong Dal Halwa"],
      insights: "This meal is designed by Dr. Aditi Rao, Senior Pediatric Nutritionist. It focuses on high protein intake from Paneer and Moong Dal to support muscle growth in active primary students.",
      nutrition: [
        { label: "Protein", value: "18g" },
        { label: "Carbs", value: "45g" },
        { label: "Iron", value: "4.2mg" },
        { label: "Calcium", value: "210mg" }
      ]
    },
    "non-veg": {
      menu: ["Grilled Chicken Curry", "Steamed Basmati Rice", "Tawa Roti", "Mixed Sprouts Salad", "Yogurt Cup"],
      insights: "Approved by the School Health Board. Lean chicken provides essential amino acids, while sprouts ensure a high fiber content for better digestion throughout the school day.",
      nutrition: [
        { label: "Protein", value: "24g" },
        { label: "Carbs", value: "38g" },
        { label: "Vitamin B12", value: "1.8mcg" },
        { label: "Zinc", value: "3.5mg" }
      ]
    },
    jain: {
      menu: ["Paneer Bhurji (No Onion/Garlic)", "Steamed Rice", "Whole Wheat Roti", "Boiled Corn Salad", "Fruit Custard"],
      insights: "A specialized sattvic meal plan. Uses nutrient-dense vegetables like corn and paneer to ensure the child receives a balanced macro-profile without compromising on dietary restrictions.",
      nutrition: [
        { label: "Protein", value: "16g" },
        { label: "Carbs", value: "42g" },
        { label: "Vitamin C", value: "12mg" },
        { label: "Folate", value: "45mcg" }
      ]
    }
  };

  const handleOptionChange = (index: number, option: MealOption) => {
    const newPlan = [...plan];
    newPlan[index].option = option;
    setPlan(newPlan);
    
    if (option !== "none") {
      const details = mealMenus[option as keyof typeof mealMenus];
      setSelectedMealDetail({
        day: plan[index].day,
        type: option === "veg" ? "Vegetarian" : option === "non-veg" ? "Non-Vegetarian" : "Jain",
        ...details
      });
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-[24px] bg-[#f8f9fa] pb-[100px]">
        <div className="w-[100px] h-[100px] bg-[#effff8] rounded-full flex items-center justify-center mb-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#f9fafb]">
          <CircleCheck size={48} className="text-[#65d4b0]" strokeWidth={2.5} />
        </div>
        <h2 className="text-[24px] font-bold text-[#1c1c1e] mb-[8px] text-center tracking-[-0.5px]">Meals Booked!</h2>
        <p className="text-[14px] font-medium text-[#8e8e93] text-center mb-[32px] leading-[20px]">The weekly lunch plan has been confirmed. The charges will run automatically within your monthly fee.</p>
        <Link to="/" className="w-full bg-[#65d4b0] text-white py-[16px] rounded-[16px] font-bold text-[16px] text-center shadow-[0_4px_10px_rgba(101,212,176,0.3)] transition-all active:scale-95 no-underline">Back to Dashboard</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-full bg-[#f8f9fa] pb-[100px] no-scrollbar">
      <div className="flex items-center justify-between px-[24px] pt-[68px] pb-[20px]">
        <h1 className="text-[20px] font-bold text-[#1c1c1e] tracking-[-0.5px]">Lunch Booking</h1>
        <Link to="/" className="px-[21px] py-[8px] bg-white rounded-[42px] text-[14px] font-semibold text-[#1c1c1e] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#e5e5ea] active:scale-95 transition-transform no-underline">Home</Link>
      </div>
      <div className="px-[24px] space-y-[24px]">
        {/* Meal Detail Overlay */}
        {selectedMealDetail && (
          <div className="fixed inset-0 z-[100] flex justify-center bg-transparent pointer-events-none">
            <div className="w-full max-w-[390px] relative pointer-events-auto h-full">
              <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] transition-opacity animate-in fade-in duration-300" onClick={() => setSelectedMealDetail(null)} />
              <div className="absolute bottom-0 left-0 w-full bg-white shadow-2xl flex flex-col z-10 animate-in slide-in-from-bottom duration-300 rounded-t-[32px] overflow-hidden p-[24px] pb-[40px] max-h-[85%]">
                <div className="flex items-center justify-between mb-[24px]">
                  <div>
                    <h2 className="text-[20px] font-bold text-[#1c1c1e] tracking-[-0.5px]">{selectedMealDetail.day}'s {selectedMealDetail.type} Meal</h2>
                    <p className="text-[12px] font-medium text-[#8e8e93]">Nutritionist Approved Menu</p>
                  </div>
                  <button onClick={() => setSelectedMealDetail(null)} className="w-[32px] h-[32px] bg-[#f9fafb] rounded-[8px] flex items-center justify-center text-[#8e8e93]">
                    <X size={18} strokeWidth={2.5} />
                  </button>
                </div>

                <div className="overflow-y-auto no-scrollbar space-y-[24px]">
                  {/* Menu List */}
                  <div>
                    <h3 className="text-[10px] font-bold text-[#8e8e93] uppercase tracking-[1.2px] mb-[12px]">WHAT'S ON THE MENU</h3>
                    <div className="space-y-[8px]">
                      {selectedMealDetail.menu.map((item, i) => (
                        <div key={i} className="flex items-center gap-[12px] bg-[#f8f9fa] p-[12px] rounded-[12px] border border-[#f3f4f6]">
                          <div className="w-[6px] h-[6px] rounded-full bg-[#65d4b0]" />
                          <span className="text-[14px] font-medium text-[#1c1c1e]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Nutritionist Insight */}
                  <div className="bg-[#effff8] p-[16px] rounded-[20px] border border-[#ddfdf0]">
                    <div className="flex items-center gap-[8px] mb-[8px]">
                      <User size={14} className="text-[#65d4b0]" strokeWidth={2.5} />
                      <h3 className="text-[10px] font-bold text-[#65d4b0] uppercase tracking-[1px]">NUTRITIONIST'S INSIGHT</h3>
                    </div>
                    <p className="text-[13px] font-medium text-[#1c1c1e] leading-[20px]">
                      {selectedMealDetail.insights}
                    </p>
                  </div>

                  {/* Nutritional Facts */}
                  <div>
                    <h3 className="text-[10px] font-bold text-[#8e8e93] uppercase tracking-[1.2px] mb-[12px]">NUTRITIONAL FACTS</h3>
                    <div className="grid grid-cols-2 gap-[12px]">
                      {selectedMealDetail.nutrition.map((stat, i) => (
                        <div key={i} className="bg-white p-[12px] rounded-[16px] border border-[#f3f4f6] flex flex-col gap-[2px]">
                          <span className="text-[10px] font-bold text-[#8e8e93] uppercase tracking-[0.5px]">{stat.label}</span>
                          <span className="text-[16px] font-bold text-[#1c1c1e]">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedMealDetail(null)}
                  className="w-full bg-[#65d4b0] text-white py-[16px] rounded-[16px] font-bold text-[16px] shadow-[0_4px_10px_rgba(101,212,176,0.3)] mt-[24px] active:scale-95 transition-all"
                >
                  Confirm Choice
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white p-[20px] rounded-[24px] flex items-start gap-[16px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#f9fafb]">
          <div className="w-[56px] h-[56px] rounded-[16px] bg-[#effff8] flex items-center justify-center shrink-0"><Utensils size={24} className="text-[#65d4b0]" strokeWidth={2.5} /></div>
          <div><h2 className="text-[#1c1c1e] font-bold text-[16px] mb-[4px] leading-[20px]">Weekly Canteen Plan</h2><p className="text-[#8e8e93] text-[12px] font-medium leading-[18px]">Select healthy meals for your child. Charges are added directly to the monthly fee.</p></div>
        </div>
        <div className="flex justify-between items-center px-[8px]"><h3 className="text-[10px] font-bold text-[#8e8e93] uppercase tracking-[1px] flex items-center gap-[8px]"><CalendarDays size={14} /> 15-19 APR</h3></div>
        <div className="space-y-[16px]">
          {plan.map((day, idx) => (
            <div key={idx} className="bg-white p-[16px] rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#f9fafb] flex flex-col gap-[16px]">
              <div className="flex justify-between items-center border-b border-[#f3f4f6] pb-[12px]"><div className="flex items-baseline gap-[8px]"><span className="font-bold text-[16px] text-[#1c1c1e]">{day.day}</span><span className="text-[#8e8e93] text-[12px] font-medium">{day.date}</span></div></div>
              <div className="grid grid-cols-2 gap-[8px]">
                <button onClick={() => handleOptionChange(idx, "veg")} className={clsx("py-[12px] px-[8px] rounded-[12px] text-[13px] font-bold transition-all flex items-center justify-center gap-[6px]", day.option === "veg" ? "bg-[#effff8] text-[#65d4b0]" : "bg-[#f8f9fa] text-[#8e8e93] hover:bg-[#f3f4f6]")}><div className="w-[6px] h-[6px] rounded-full bg-[#65d4b0]"></div>Veg</button>
                <button onClick={() => handleOptionChange(idx, "non-veg")} className={clsx("py-[12px] px-[8px] rounded-[12px] text-[13px] font-bold transition-all flex items-center justify-center gap-[6px]", day.option === "non-veg" ? "bg-[#fff0f0] text-[#ff7a7a]" : "bg-[#f8f9fa] text-[#8e8e93] hover:bg-[#f3f4f6]")}><div className="w-[6px] h-[6px] rounded-full bg-[#ff7a7a]"></div>Non-Veg</button>
                <button onClick={() => handleOptionChange(idx, "jain")} className={clsx("py-[12px] px-[8px] rounded-[12px] text-[13px] font-bold transition-all flex items-center justify-center gap-[6px]", day.option === "jain" ? "bg-[#fff4ec] text-[#fa9a50]" : "bg-[#f8f9fa] text-[#8e8e93] hover:bg-[#f3f4f6]")}><div className="w-[6px] h-[6px] rounded-full bg-[#fa9a50]"></div>Jain</button>
                <button
                  onClick={() => handleOptionChange(idx, "none")}
                  className={clsx(
                    "py-[12px] px-[8px] rounded-[12px] text-[13px] font-bold transition-all flex items-center justify-center gap-[6px] border",
                    day.option === "none" 
                      ? "bg-[#fff5f5] text-[#ff8e8e] border-[#ffebeb] shadow-sm" 
                      : "bg-[#f8f9fa] text-[#8e8e93] border-transparent hover:bg-[#f3f4f6] active:bg-[#fff5f5] active:text-[#ff8e8e] active:scale-95"
                  )}
                >
                  <X size={14} strokeWidth={2.5} />
                  Skip
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-[16px]"><button onClick={() => setSubmitted(true)} className="w-full bg-[#65d4b0] text-white px-[24px] py-[16px] rounded-[16px] font-bold shadow-[0_4px_10px_rgba(101,212,176,0.3)] transition-transform active:scale-95">Confirm Plan</button></div>
      </div>
    </div>
  );
}

function Leaves() {
  const [tab, setTab] = useState<"pending" | "approved">("pending");
  const [leavesList, setLeavesList] = useState([
    { child: "Aarav Sharma", dates: "12 APR - 14 APR", reason: "Family Function", status: "pending" as const },
    { child: "Aarav Sharma", dates: "15 APR", reason: "Fever", status: "approved" as const },
  ]);
  const [isAddingLeave, setIsAddingLeave] = useState(false);
  const [newLeave, setNewLeave] = useState({ dates: "", reason: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeave.dates || !newLeave.reason) {
      toast.error("Please fill all fields");
      return;
    }
    const leave = {
      child: "Aarav Sharma",
      dates: newLeave.dates.toUpperCase(),
      reason: newLeave.reason,
      status: "pending" as const
    };
    setLeavesList([leave, ...leavesList]);
    setIsAddingLeave(false);
    setNewLeave({ dates: "", reason: "" });
    toast.success("Leave application submitted successfully!");
  };

  return (
    <div className="flex flex-col min-h-full bg-[#f8f9fa] overflow-x-hidden pb-[100px] no-scrollbar">
      {/* Leave Application Form Overlay */}
      {isAddingLeave && (
        <div className="fixed inset-0 z-[100] flex justify-center bg-transparent pointer-events-none">
          <div className="w-full max-w-[390px] relative pointer-events-auto h-full">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] transition-opacity animate-in fade-in duration-300" onClick={() => setIsAddingLeave(false)} />
            <div className="absolute bottom-0 left-0 w-full bg-white shadow-2xl flex flex-col z-10 animate-in slide-in-from-bottom duration-300 rounded-t-[32px] overflow-hidden p-[24px] pb-[40px]">
              <div className="flex items-center justify-between mb-[32px]">
                <h2 className="text-[20px] font-bold text-[#1c1c1e] tracking-[-0.5px]">Leave Application</h2>
                <button onClick={() => setIsAddingLeave(false)} className="w-[32px] h-[32px] bg-[#f9fafb] rounded-[8px] flex items-center justify-center text-[#8e8e93]">
                  <X size={18} strokeWidth={2.5} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-[24px]">
                <div className="space-y-[8px]">
                  <label className="text-[12px] font-bold text-[#8e8e93] uppercase tracking-[1.2px]">DATES (E.G. 20 APR - 22 APR)</label>
                  <div className="relative">
                    <Calendar size={18} className="absolute left-[16px] top-[17px] text-[#ff7a7a]" strokeWidth={2.5} />
                    <input 
                      type="text" 
                      placeholder="Enter leave dates..."
                      value={newLeave.dates}
                      onChange={(e) => setNewLeave({...newLeave, dates: e.target.value})}
                      className="w-full bg-[#f8f9fa] border border-[#f3f4f6] text-[#1c1c1e] rounded-[16px] pl-[48px] pr-[16px] py-[16px] focus:outline-none focus:ring-2 focus:ring-[#ff7a7a]/20 focus:border-[#ff7a7a] font-bold text-[14px] placeholder:text-[#c7c7cc] placeholder:font-medium transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-[8px]">
                  <label className="text-[12px] font-bold text-[#8e8e93] uppercase tracking-[1.2px]">REASON FOR LEAVE</label>
                  <textarea 
                    placeholder="Enter the reason for leave..."
                    value={newLeave.reason}
                    onChange={(e) => setNewLeave({...newLeave, reason: e.target.value})}
                    rows={4}
                    className="w-full bg-[#f8f9fa] border border-[#f3f4f6] text-[#1c1c1e] rounded-[16px] px-[16px] py-[16px] focus:outline-none focus:ring-2 focus:ring-[#ff7a7a]/20 focus:border-[#ff7a7a] font-medium text-[14px] placeholder:text-[#c7c7cc] transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#ff7a7a] text-white py-[16px] rounded-[16px] font-bold text-[16px] shadow-[0_4px_10px_rgba(255,122,122,0.3)] transition-all active:scale-95"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between px-[24px] pt-[68px] pb-[20px]">
        <h1 className="text-[20px] font-bold text-[#1c1c1e] tracking-[-0.5px]">Leave Applications</h1>
        <Link to="/" className="px-[21px] py-[8px] bg-white rounded-[42px] text-[14px] font-semibold text-[#1c1c1e] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#e5e5ea] active:scale-95 transition-transform no-underline">Home</Link>
      </div>
      <div className="px-[24px] space-y-[24px]">
        <div className="flex gap-[16px] bg-transparent">
          <button onClick={() => setTab("pending")} className={clsx("flex-1 py-[12px] rounded-[12px] font-bold text-[14px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all", tab === "pending" ? "bg-[#ff7a7a] text-white shadow-[0_4px_10px_rgba(255,122,122,0.3)] border border-[#ff7a7a]" : "bg-white text-[#8e8e93] border border-[#f3f4f6]")}>Pending ({leavesList.filter(l => l.status === "pending").length})</button>
          <button onClick={() => setTab("approved")} className={clsx("flex-1 py-[12px] rounded-[12px] font-bold text-[14px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all", tab === "approved" ? "bg-[#65d4b0] text-white shadow-[0_4px_10px_rgba(101,212,176,0.3)] border border-[#65d4b0]" : "bg-white text-[#8e8e93] border border-[#f3f4f6]")}>Approved ({leavesList.filter(l => l.status === "approved").length})</button>
        </div>
        <div className="space-y-[16px]">
          {leavesList.filter(l => l.status === tab).map((leave, idx) => (
            <div key={idx} className="bg-white p-[24px] rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#f9fafb]">
              <div className="flex justify-between items-start mb-[16px]">
                <div><h3 className="text-[16px] font-bold text-[#1c1c1e] mb-[4px]">{leave.child}</h3><p className="text-[10px] font-bold tracking-[1px] uppercase text-[#8e8e93]">{leave.dates}</p></div>
                <div className={clsx("px-[12px] py-[4px] rounded-[8px] text-[10px] font-bold tracking-[1px] uppercase", leave.status === "pending" ? "bg-[#fff4ec] text-[#fa9a50]" : "bg-[#effff8] text-[#65d4b0]")}>{leave.status}</div>
              </div>
              <div className="bg-[#f8f9fa] rounded-[16px] p-[16px] mb-[16px] border border-[#f3f4f6]"><p className="text-[10px] font-bold tracking-[1px] uppercase text-[#8e8e93] mb-[4px]">REASON:</p><p className="text-[14px] font-medium text-[#1c1c1e]">{leave.reason}</p></div>
              {leave.status === "pending" && <button onClick={() => setLeavesList(leavesList.filter((_, i) => i !== leavesList.indexOf(leave)))} className="w-full bg-[#fff0f0] text-[#ff7a7a] py-[12px] rounded-[12px] font-bold text-[14px] flex items-center justify-center gap-[8px] hover:bg-[#ffe5e5] transition-colors">Cancel Request</button>}
            </div>
          ))}
          {leavesList.filter(l => l.status === tab).length === 0 && (
            <div className="py-[40px] flex flex-col items-center justify-center text-center opacity-40">
              <FileText size={48} className="text-[#8e8e93] mb-[16px]" />
              <p className="text-[14px] font-bold text-[#1c1c1e]">No {tab} applications found.</p>
            </div>
          )}
        </div>
      </div>
      <button 
        onClick={() => setIsAddingLeave(true)}
        className="fixed bottom-[130px] right-[24px] w-[56px] h-[56px] bg-[#ff7a7a] text-white rounded-[20px] shadow-[0_4px_10px_rgba(255,122,122,0.3)] flex items-center justify-center active:scale-95 transition-transform z-20"
      >
        <Plus size={28} strokeWidth={2.5} />
      </button>
    </div>
  );
}

// --- Mock Router ---
const RouterContext = createContext<{ path: string; navigate: (p: string) => void }>({ path: '/login', navigate: () => {} });

export function useNavigate() {
  const { navigate } = useContext(RouterContext);
  return navigate;
}

export function useLocation() {
  const { path } = useContext(RouterContext);
  return { pathname: path };
}

export function Link({ to, children, className }: any) {
  const { navigate } = useContext(RouterContext);
  return <a href={to} onClick={(e) => { e.preventDefault(); navigate(to); }} className={className}>{children}</a>;
}

export function NavLink({ to, children, className }: any) {
  const { path, navigate } = useContext(RouterContext);
  const isActive = path === to;
  const resolvedClassName = typeof className === 'function' ? className({ isActive }) : className;
  const resolvedChildren = typeof children === 'function' ? children({ isActive }) : children;
  return <a href={to} onClick={(e) => { e.preventDefault(); navigate(to); }} className={resolvedClassName}>{resolvedChildren}</a>;
}

export function Outlet() {
  const { path } = useContext(RouterContext);
  if (path === '/') return <Dashboard />;
  if (path === '/meals') return <Meals />;
  if (path === '/ptm') return <PTM />;
  if (path === '/leaves') return <Leaves />;
  if (path === '/profile') return <Profile />;
  if (path === '/messages') return <Messages />;
  return null;
}

export function ParentApp() {
  const [path, setPath] = useState('/login');
  
  return (
    <RouterContext.Provider value={{ path, navigate: setPath }}>
      {path === '/login' ? <Login /> : <Layout />}
    </RouterContext.Provider>
  );
}
