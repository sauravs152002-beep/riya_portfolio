import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Delete, 
  Check,
  Building2,
  ChevronDown,
  ShieldCheck,
  Flashlight,
  Camera,
  Loader2,
  ChevronLeft,
  CalendarClock,
  AlertTriangle,
  XCircle,
  Activity,
  CreditCard,
  X,
  Search,
  Info,
  ShieldAlert,
  History,
  Landmark,
  ScanFace,
  CheckCircle2,
  HelpCircle,
  MoreVertical,
  Signal,
  Wifi,
  BatteryFull,
  ArrowLeft
} from 'lucide-react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ImageWithFallback } from '../../app/components/figma/ImageWithFallback';
import { Link } from 'react-router';
import { LiquidGlassCursor } from '../../app/components/LiquidGlassCursor';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const imgLockScreenWallpaper = "https://images.unsplash.com/photo-1687392946857-96c2b7f94b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkaWVudCUyMHdhbGxwYXBlciUyMG1lc2glMjBwdXJwbGUlMjBibHVlfGVufDF8fHx8MTc3NzMxNjMzN3ww&ixlib=rb-4.1.0&q=80&w=1080";

// GPay SVG Paths and Constants
const GPAY_SVG = {
  chevronRight: "M7.49863 14.9973L12.4977 9.99817L7.49863 4.99908",
  dashboardPay: "M12 14L16 10M3.34 19C2.46222 17.4798 2.00007 15.7554 2 13.9999C1.99993 12.2445 2.46195 10.52 3.33962 8.99978C4.21729 7.47953 5.47967 6.21709 6.99989 5.33937C8.52011 4.46165 10.2446 3.99956 12 3.99956C13.7554 3.99956 15.4799 4.46165 17.0001 5.33937C18.5203 6.21709 19.7827 7.47953 20.6604 8.99978C21.538 10.52 22.0001 12.2445 22 13.9999C21.9999 15.7554 21.5378 17.4798 20.66 19",
  history: "M3 12C3 13.78 3.52784 15.5201 4.51677 17.0001C5.50571 18.4802 6.91131 19.6337 8.55585 20.3149C10.2004 20.9961 12.01 21.1743 13.7558 20.8271C15.5016 20.4798 17.1053 19.6226 18.364 18.364C19.6226 17.1053 20.4798 15.5016 20.8271 13.7558C21.1743 12.01 20.9961 10.2004 20.3149 8.55585C19.6337 6.91131 18.4802 5.50571 17.0001 4.51677C15.5201 3.52784 13.78 3 12 3C9.48395 3.00947 7.06897 3.99122 5.26 5.74L3 8",
  bank: "M2.99995 21.9996H20.9999M6 18V11M10 18V11M14 18V11M17.9997 17.9998V10.9998M12 2L20 7H4L12 2Z",
  close: "M13 0.999983L0.999983 13M0.999983 0.999983L13 13",
  search: "M8.24301 14.2379C11.5539 14.2379 14.2379 11.5539 14.2379 8.24301C14.2379 4.93211 11.5539 2.24809 8.24301 2.24809C4.93211 2.24809 2.24809 4.93211 2.24809 8.24301C2.24809 11.5539 4.93211 14.2379 8.24301 14.2379ZM15.7367 15.7367L12.5144 12.5144",
  grid: "M3.99827 29.3207H27.9879M7.99654 23.9896V14.6603M13.3276 23.9896V14.6603M18.6586 23.9896V14.6603M23.9896 23.9896V14.6603M15.9931 2.66551L26.6551 9.3293H5.33103L15.9931 2.66551Z",
  gauge: "M20.0063 99.9817C20.0063 78.7682 28.4333 58.4237 43.4335 43.4235C58.4336 28.4233 78.7782 19.9963 99.9916 19.9963C121.205 19.9963 141.55 28.4233 156.55 43.4235C171.55 58.4237 179.977 78.7682 179.977 99.9817",
  shield: "M18.3233 11.9102C18.3233 16.491 15.1168 18.7814 11.3055 20.1099C11.1059 20.1775 10.8891 20.1743 10.6917 20.1007C6.87125 18.7814 3.66467 16.491 3.66467 11.9102V5.497C3.66467 5.25402 3.76119 5.02099 3.93301 4.84917C4.10482 4.67736 4.33785 4.58083 4.58083 4.58083C6.41317 4.58083 8.70358 3.48143 10.2977 2.08886C10.4918 1.92303 10.7387 1.83192 10.994 1.83192C11.2493 1.83192 11.4962 1.92303 11.6903 2.08886C13.2936 3.4906 15.5748 4.58083 17.4072 4.58083C17.6502 4.58083 17.8832 4.67736 18.055 4.84917C18.2268 5.02099 18.3233 5.25402 18.3233 5.497V11.9102ZM8.2455 10.994L10.0778 12.8263L13.7425 9.16167",
  alert: "M10.994 20.1557C16.0539 20.1557 20.1557 16.0539 20.1557 10.994C20.1557 5.93415 16.0539 1.83233 10.994 1.83233C5.93415 1.83233 1.83233 5.93415 1.83233 10.994C1.83233 16.0539 5.93415 20.1557 10.994 20.1557ZM10.994 7.32933V10.994M10.994 14.6587H11.004",
  info: "M10.994 20.1557C16.0539 20.1557 20.1557 16.0539 20.1557 10.994C20.1557 5.93415 16.0539 1.83233 10.994 1.83233C5.93415 1.83233 1.83233 5.93415 1.83233 10.994C1.83233 16.0539 5.93415 20.1557 10.994 20.1557ZM8.32796 8.2455C8.54335 7.6332 8.9685 7.11688 9.52809 6.788C10.0877 6.45912 10.7456 6.3389 11.3854 6.44863C12.0251 6.55837 12.6054 6.89097 13.0234 7.38754C13.4414 7.8841 13.6702 8.51258 13.6692 9.16167C13.6692 10.994 10.9207 11.9102 10.9207 11.9102ZM10.994 15.5748H11.004",
};

// Assets from Figma Imports
import imgProfile from "figma:asset/f55e25e624b50f200c0e2f6eff33938f2ab776e9.png";
import imgImageWallpaper from "figma:asset/2f855795d59b0fd199a5b22dad77bf0ddea4f4d8.png";
import imgImageSnapMint from "figma:asset/65533b753732ee6270afe2b4da81605c51ccdf7e.png";
import imgGPaySmallIcon from "figma:asset/a13add28a78c38eaa8e3165f46e841785474d76d.png";

type BankAccount = {
  id: string;
  name: string;
  number: string;
  balance: number;
  hasLowBalance: boolean;
};

const banks: BankAccount[] = [
  { id: 'hdfc', name: 'HDFC Bank', number: '1234', balance: 450, hasLowBalance: true },
  { id: 'sbi', name: 'SBI Bank', number: '8892', balance: 45230.50, hasLowBalance: false },
  { id: 'icici', name: 'ICICI Bank', number: '4456', balance: 12500, hasLowBalance: false },
];

type ViewState = 'lockscreen' | 'face-id' | 'pin-entry' | 'app-main' | 'processing' | 'success';

type Scenario = {
  id: number;
  tag: string;
  title: string;
  description: string;
  tone: string;
  primaryCta: string;
  secondaryCta: string;
  colorSignal: string;
  biometrics: string;
  mobileTitle: string;
  mobileBody: string;
  mobileBtn1: string;
  mobileBtn2: string;
  color: string;
  icon: React.ReactNode;
};

const scenarios: Scenario[] = [
  { 
    id: 0, 
    tag: "UPCOMING", 
    title: "Gentle Awareness.", 
    description: "2 days before due date. The notification is calm and informative — no urgency, no pressure. Users can choose to pay early or simply check their balance. The design respects attention without demanding action.", 
    tone: "Informative & calm",
    primaryCta: "Pay Early",
    secondaryCta: "Check Balance",
    colorSignal: "Neutral white",
    biometrics: "Face ID → UPI PIN",
    mobileTitle: "You’ve got an EMI coming up",
    mobileBody: "₹1,099 will be deducted on Mar 11. Clear it before it’s due!",
    mobileBtn1: "Check Balance",
    mobileBtn2: "Pay Now",
    color: "#FFFFFF",
    icon: <CalendarClock size={14} />
  },
  { 
    id: 1, 
    tag: "DUE TODAY", 
    title: "Direct Reminder.", 
    description: "The day of the payment. A gentle nudge to ensure the user has sufficient funds. The yellow signal provides a subtle warning without being alarmist, prompting immediate verification.", 
    tone: "Helpful & Alert",
    primaryCta: "Pay Now",
    secondaryCta: "Check Balance",
    colorSignal: "Warning yellow",
    biometrics: "Face ID → UPI PIN",
    mobileTitle: "EMI Due Today",
    mobileBody: "₹1,099 is scheduled for auto-payment today. Ensure sufficient balance to avoid failure!",
    mobileBtn1: "Check Balance",
    mobileBtn2: "Pay Now",
    color: "#facc15",
    icon: <AlertTriangle size={14} />
  },
  { 
    id: 2, 
    tag: "MISSED", 
    title: "Critical Intervention.", 
    description: "Payment failed or missed. The orange signal indicates a higher level of urgency as the user enters a grace period. Clear instructions are provided for immediate manual payment.", 
    tone: "Urgent & Direct",
    primaryCta: "Pay Now",
    secondaryCta: "Check Status",
    colorSignal: "Orange alert",
    biometrics: "Face ID → UPI PIN",
    mobileTitle: "EMI Payment Missed",
    mobileBody: "Your payment of ₹1,099 was missed. Pay now to avoid fees and impact on your credit score.",
    mobileBtn1: "Check Status",
    mobileBtn2: "Pay Now",
    color: "#f97316",
    icon: <XCircle size={14} />
  },
  { 
    id: 3, 
    tag: "CRITICAL", 
    title: "Final Warning.", 
    description: "Final notice before credit score impact. High-contrast red signal demands immediate attention. The communication is firm but remains professional to encourage resolution.", 
    tone: "Serious & Authoritative",
    primaryCta: "Pay Now",
    secondaryCta: "Check CIBIL score",
    colorSignal: "Critical red",
    biometrics: "Face ID → UPI PIN",
    mobileTitle: "Credit Impact in 2 Days",
    mobileBody: "₹1,099 EMI remains unpaid. Complete payment now to avoid affecting your CIBIL score.",
    mobileBtn1: "Check CIBIL score",
    mobileBtn2: "Pay Now",
    color: "#ff3b30",
    icon: <Activity size={14} />
  },
];

const FaceIdIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M22 10H14C11.7909 10 10 11.7909 10 14V22" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    <path d="M78 10H86C88.2091 10 90 11.7909 90 14V22" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    <path d="M22 90H14C11.7909 90 10 88.2091 10 86V78" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    <path d="M78 90H86C88.2091 90 90 88.2091 90 86V78" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    <path d="M34 38C34 36.3431 35.3431 35 37 35C38.6569 35 40 36.3431 40 38V42C40 43.6569 38.6569 45 37 45C35.3431 45 34 43.6569 34 42V38Z" fill="currentColor"/>
    <path d="M60 38C60 36.3431 61.3431 35 63 35C64.6569 35 66 36.3431 66 38V42C66 43.6569 64.6569 45 63 45C61.3431 45 60 43.6569 60 42V38Z" fill="currentColor"/>
    <path d="M52 46V54H48" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M37 68C37 68 41 73 50 73C59 73 63 68 63 68" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

const DetailRow = ({ label, value, color }: { label: string; value: string; color?: string }) => (
  <div className="flex items-center justify-between py-6 border-b border-white/10">
    <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">{label}</span>
    <span className={`text-[14px] font-medium ${color ? '' : 'text-white'}`} style={color ? { color } : {}}>{value}</span>
  </div>
);

const GPayBalanceCheckUI = ({ selectedBank, setShowBankSelector, reset, StatusHeader, handlePay }: any) => {
  const walletIconPaths = {
    main: "M26.6545 9.32898H5.3307C4.62367 9.32898 3.9456 9.60984 3.44566 10.1098C2.94572 10.6097 2.66485 11.2878 2.66485 11.9948V22.6572C2.66485 23.0073 2.7338 23.354 2.86778 23.6774C3.00175 24.0008 3.19811 24.2947 3.44566 24.5423C3.69321 24.7898 3.98709 24.9862 4.31052 25.1201C4.63396 25.2541 4.98062 25.3231 5.3307 25.3231H26.6545C27.0046 25.3231 27.3512 25.2541 27.6747 25.1201C27.9981 24.9862 28.292 24.7898 28.5395 24.5423C28.7871 24.2947 28.9835 24.0008 29.1174 23.6774C29.2514 23.354 29.3203 23.0073 29.3203 22.6572V11.9948C29.3203 11.6447 29.2514 11.2981 29.1174 10.9746C28.9835 10.6512 28.7871 10.3573 28.5395 10.1098C28.292 9.86224 27.9981 9.66587 27.6747 9.5319C27.3512 9.39793 27.0046 9.32898 26.6545 9.32898Z",
    flap: "M26.6545 9.32898V7.99655C26.6545 7.28952 26.3736 6.61145 25.8737 6.11151C25.3737 5.61157 24.6957 5.3307 23.9887 5.3307H7.99655C7.28952 5.3307 6.61145 5.61157 6.11151 6.11151C5.61157 6.61145 5.3307 7.28952 5.3307 7.99655V9.32898"
  };
  const bankIconPaths = {
    pdebf0f0: "M4.99907 18.3299V3.33272C4.99907 2.89077 5.17464 2.46693 5.48714 2.15442C5.79964 1.84192 6.22349 1.66636 6.66543 1.66636H13.3309C13.7728 1.66636 14.1967 1.84192 14.5092 2.15442C14.8217 2.46693 14.9972 2.89077 14.9972 3.33272V18.3299H4.99907Z",
    p3900b380: "M4.99907 9.99815H3.33272C2.89077 9.99815 2.46693 10.1737 2.15442 10.4862C1.84192 10.7987 1.66636 11.2226 1.66636 11.6645V16.6636C1.66636 17.1055 1.84192 17.5294 2.15442 17.8419C2.46693 18.1544 2.89077 18.3299 3.33272 18.3299H4.99907",
    p3bed7540: "M14.9972 7.49861H16.6636C17.1055 7.49861 17.5294 7.67417 17.8419 7.98668C18.1544 8.29918 18.3299 8.72303 18.3299 9.16497V16.6636C18.3299 17.1055 18.1544 17.5294 17.8419 17.8419C17.5294 18.1544 17.1055 18.3299 16.6636 18.3299H14.9972"
  };

  const isLowBalance = selectedBank.balance < 1099;

  return (
    <div className="flex-1 flex flex-col bg-[#f9fafb] h-full text-[#101828]">
      <StatusHeader dark />
      <div className="flex-1 flex flex-col items-center pt-[90px] relative overflow-hidden [&::-webkit-scrollbar]:hidden">
        <div className="w-[72px] h-[72px] bg-[#dbeafe] rounded-full flex items-center justify-center relative mb-6 shrink-0">
           <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
             <path d={walletIconPaths.main} stroke="#155DFC" strokeWidth="2.66" strokeLinecap="round" strokeLinejoin="round" />
             <path d={walletIconPaths.flap} stroke="#155DFC" strokeWidth="2.66" strokeLinecap="round" strokeLinejoin="round" />
           </svg>
           <div className="absolute inset-0 rounded-full border-[1.27px] border-[#bedbff]" />
        </div>

        <p className="text-[#6a7282] text-[16px] font-semibold tracking-[1.6px] uppercase mb-2 shrink-0">Amount to Pay</p>
        <h1 className="text-[#101828] text-[52px] font-bold tracking-[-1.3px] mb-6 leading-none shrink-0">₹1,099.00</h1>
        <div className="bg-white border border-[#e5e7eb] rounded-full px-5 py-2 shadow-[0_1px_3px_rgba(0,0,0,0.1)] text-[#4a5565] text-[15px] font-medium mb-8 shrink-0">
          SnapMint Services
        </div>

        <div className="w-[344px] bg-white rounded-[16px] border border-[#f3f4f6] shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-5 space-y-4 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                 <ImageWithFallback src={imgGPaySmallIcon} className="w-full h-full object-contain" />
              </div>
              <span className="text-[#1e2939] text-[16px] font-semibold">SnapMint Services</span>
            </div>
            <span className="text-[#101828] text-[18px] font-bold">₹1,099</span>
          </div>
          <div className={cn(
            "rounded-[14px] p-4 text-center transition-colors duration-300",
            isLowBalance ? "bg-[#fef2f2]" : "bg-[#ecfdf5]"
          )}>
            <p className={cn(
              "text-[13px] font-medium leading-[1.6]",
              isLowBalance ? "text-[#dc2626]" : "text-[#009966]"
            )}>
              {isLowBalance 
                ? "Selected account has insufficient balance for this EMI payment."
                : "Selected account has sufficient balance for this EMI payment."}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-[#f3f4f6] shadow-[0_-8px_30px_rgba(0,0,0,0.04)] px-6 pt-5 pb-10 space-y-3 shrink-0">
        <button
           onClick={() => setShowBankSelector(true)}
           data-interactive
           className="w-full bg-white border border-[#e5e7eb] rounded-[16px] h-[64px] px-5 flex items-center justify-between shadow-[0_1px_3px_rgba(0,0,0,0.1)] transition-all active:scale-[0.98]"
        >
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#f9fafb] border border-[#f3f4f6] rounded-[10px] flex items-center justify-center">
                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d={bankIconPaths.pdebf0f0} stroke="#155DFC" strokeWidth="1.66" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={bankIconPaths.p3900b380} stroke="#155DFC" strokeWidth="1.66" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={bankIconPaths.p3bed7540} stroke="#155DFC" strokeWidth="1.66" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.33 5H11.66" stroke="#155DFC" strokeWidth="1.66" strokeLinecap="round" />
                    <path d="M8.33 8.33H11.66" stroke="#155DFC" strokeWidth="1.66" strokeLinecap="round" />
                    <path d="M8.33 11.66H11.66" stroke="#155DFC" strokeWidth="1.66" strokeLinecap="round" />
                    <path d="M8.33 15H11.66" stroke="#155DFC" strokeWidth="1.66" strokeLinecap="round" />
                 </svg>
              </div>
              <div className="flex flex-col items-start">
                 <span className="text-[#101828] text-[14px] font-bold leading-none">{selectedBank.name} ••••</span>
                 <span className="text-[#101828] text-[14px] font-bold leading-none mt-1">{selectedBank.number}</span>
              </div>
           </div>
           <div className="flex items-center gap-3">
              {isLowBalance && (
                <div className="bg-[#fef2f2] border border-[#ffe2e2] rounded-[10px] px-3 py-1.5 text-[#dc2626] text-[11px] font-bold">Low Balance</div>
              )}
              <ChevronDown size={20} className="text-[#99A1AF]" />
           </div>
        </button>

        <button 
          onClick={handlePay}
          disabled={isLowBalance} 
          data-interactive
          className={cn(
            "w-full h-[60px] rounded-[16px] text-[17px] font-bold shadow-[0_1px_3px_rgba(0,0,0,0.1)] transition-all",
            isLowBalance 
              ? "bg-[#d1d5dc] text-[#6a7282] cursor-not-allowed" 
              : "bg-[#1a73e8] text-white active:scale-[0.98]"
          )}
        >
           Pay ₹1,099
        </button>
        <button onClick={reset} data-interactive className="w-full h-[54px] text-[#6a7282] text-[17px] font-bold flex items-center justify-center hover:opacity-70 transition-opacity">
           Cancel
        </button>
      </div>
    </div>
  );
};

export default function ExperienceFlow() {
  const [view, setView] = useState<ViewState>('lockscreen');
  const [activeScenario, setActiveScenario] = useState<Scenario>(scenarios[0]);
  const [pin, setPin] = useState('');
  const [selectedBank, setSelectedBank] = useState<BankAccount>(banks[0]);
  const [showBankSelector, setShowBankSelector] = useState(false);
  const [pinMode, setPinMode] = useState<'unlock' | 'payment'>('unlock');
  const [gpayView, setGpayView] = useState<'dashboard' | 'cibil' | 'payment'>('dashboard');
  const [isProcessing, setIsProcessing] = useState(false);
  const [flowTarget, setFlowTarget] = useState<'payment' | 'balance' | 'cibil' | 'none'>('none');

  const StatusHeader = ({ dark = false, white = false }: { dark?: boolean; white?: boolean }) => (
    <div className="flex justify-between items-center px-10 pt-6 pb-2 w-full absolute top-0 left-0 right-0 z-[100]">
      <span className={`${dark ? 'text-[#101828]' : (white ? 'text-white' : 'text-white')} text-[15px] font-['Inter',sans-serif] font-bold tracking-tight`}>9:41</span>
      <div className={`flex items-center gap-1.5 ${dark ? 'text-[#101828]' : (white ? 'text-white' : 'text-white')}`}>
        <div className="flex items-end gap-[2px] h-[12px] mb-[1px]">
          <div className="w-[3px] h-[4px] bg-current rounded-[0.5px]" />
          <div className="w-[3px] h-[6px] bg-current rounded-[0.5px]" />
          <div className="w-[3px] h-[8px] bg-current rounded-[0.5px]" />
          <div className="w-[3px] h-[10px] bg-current rounded-[0.5px]" />
          <div className="w-[3px] h-[12px] bg-current opacity-30 rounded-[0.5px]" />
        </div>
        <svg width="18" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <line x1="12" y1="20" x2="12.01" y2="20" />
        </svg>
        <div className={`w-[25px] h-[12px] rounded-[3px] border-[1.5px] border-current relative flex items-center p-[1px]`}>
          <div className="w-[80%] h-full bg-current rounded-[1px]" />
          <div className="absolute -right-[4px] w-[2px] h-[4px] bg-current rounded-r-[1px] opacity-50" />
        </div>
      </div>
    </div>
  );

  const handleNotificationClick = (target: 'payment' | 'balance' | 'cibil' | 'none' = 'payment') => {
    setView('face-id');
    setPinMode('unlock');
    setFlowTarget(target);
    setTimeout(() => {
      setView('pin-entry');
    }, 1200);
  };

  const handlePayNow = () => {
    setPin('');
    setView('face-id');
    setPinMode('unlock');
    setFlowTarget('payment');
    setTimeout(() => {
      setView('pin-entry');
    }, 1200);
  };

  const handlePinSubmit = () => {
    if (pin.length === 4) {
      if (pinMode === 'unlock') {
        if (activeScenario.id === 3) {
          setView('app-main');
          if (flowTarget === 'cibil') {
            setGpayView('cibil');
          } else if (flowTarget === 'payment') {
            setGpayView('payment');
          } else {
            setGpayView('dashboard');
          }
        } else {
          setView('app-main');
        }
      } else {
        setView('processing');
        setTimeout(() => {
          setView('success');
        }, 1500);
      }
      setPin('');
    }
  };

  const handlePay = () => {
    setPin('');
    setView('face-id');
    setPinMode('payment');
    setTimeout(() => {
      setView('pin-entry');
    }, 1200);
  };

  const reset = () => {
    setView('lockscreen');
    setSelectedBank(banks[0]);
    setPin('');
    setPinMode('unlock');
  };

  return (
    <div 
      className="min-h-screen bg-[#0a0a0a] flex flex-col select-none"
      style={{ position: 'relative' }}
    >
      <LiquidGlassCursor />
      
      {/* Back to Case Study Button */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[2000] group">
        <Link 
          to="/project/fintech" 
          data-interactive 
          className="flex items-center gap-3 bg-white/10 hover:bg-white text-white hover:text-black backdrop-blur-3xl px-8 py-4 rounded-full border border-white/20 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[14px] font-bold tracking-tight">Return to Case Study</span>
        </Link>
      </div>
      
      {/* Navbar - Simplified, no blur as requested */}
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-12 py-6 z-[1000] bg-black border-b border-white/5">
        <Link to="/" className="flex items-center gap-2 group" data-interactive>
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          </div>
          <span className="text-[12px] font-semibold text-[#c0c0c0] group-hover:text-white transition-colors uppercase tracking-[0.1em]">Back</span>
        </Link>
        <div className="flex items-center gap-4 text-[#888] text-[9px] font-medium tracking-[0.2em] uppercase">
          <span>UI/UX CASE STUDY — 2024</span>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col pt-20 pb-12 px-12 md:px-20 min-h-screen overflow-hidden">
        
        {/* Experience Flow Headers - Liquid Glass Interactive Action Icons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12 max-w-[1000px] mx-auto w-full">
          {scenarios.map((s) => (
            <button 
              key={s.id} 
              onClick={() => { setActiveScenario(s); setView('lockscreen'); }}
              className={`p-4 rounded-[20px] transition-all flex flex-col gap-3 text-left group relative overflow-hidden border backdrop-blur-2xl ${activeScenario.id === s.id ? 'bg-white/20 border-white/40 shadow-[0_10px_20px_rgba(255,255,255,0.05)]' : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.08] hover:border-white/20'}`}
              data-interactive
            >
              {/* Glossy highlight effect */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              
              <div className="flex justify-between items-start">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-500 ${activeScenario.id === s.id ? 'bg-white shadow-[0_0_12px_rgba(255,255,255,0.3)]' : 'bg-white/10'}`}>
                  <span className={activeScenario.id === s.id ? 'text-black' : 'text-white/60'}>
                    {React.cloneElement(s.icon as React.ReactElement, { size: 16 })}
                  </span>
                </div>
                <span className={`text-[8px] font-bold tracking-[0.2em] uppercase ${activeScenario.id === s.id ? 'text-white' : 'text-white/20'}`}>
                  0{s.id + 1}
                </span>
              </div>
              
              <div className="space-y-0.5">
                <p className={`text-[8px] font-bold tracking-[0.15em] uppercase transition-colors ${activeScenario.id === s.id ? 'opacity-100' : 'opacity-40'}`} style={{ color: s.color }}>
                  {s.tag}
                </p>
                <h3 className={`text-[13px] font-bold leading-tight transition-colors ${activeScenario.id === s.id ? 'text-white' : 'text-white/60'}`}>
                  {s.id === 0 ? 'Before Due Date' : s.id === 1 ? 'Due Date' : s.id === 2 ? 'Due Date Passed' : 'Last 2 Days'}
                </h3>
              </div>
              
              {/* Active Indicator Bar */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1"
                initial={{ backgroundColor: `${s.color}00` }}
                animate={{ 
                  backgroundColor: activeScenario.id === s.id ? s.color : `${s.color}00`,
                  opacity: activeScenario.id === s.id ? 1 : 0 
                }}
              />
            </button>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start justify-center max-w-[1000px] mx-auto w-full">
          
          {/* Left Content - Information */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center pt-8">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeScenario.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6"
              >
                <div>
                  <p className="text-white/40 text-[9px] font-bold tracking-[0.2em] uppercase mb-3">STATE 0{activeScenario.id + 1} — {activeScenario.tag}</p>
                  <h2 className="text-white text-[clamp(32px,3.5vw,48px)] font-bold leading-[1.05] tracking-[-0.04em] mb-4">{activeScenario.title}</h2>
                  <p className="text-white/60 text-[13px] leading-relaxed max-w-[420px]">
                    {activeScenario.description}
                  </p>
                </div>

                <div className="space-y-0 border-t border-white/10">
                  <DetailRow label="TONE" value={activeScenario.tone} />
                  <DetailRow label="PRIMARY CTA" value={activeScenario.primaryCta} />
                  <DetailRow label="SECONDARY CTA" value={activeScenario.secondaryCta} />
                  <DetailRow label="COLOUR SIGNAL" value={activeScenario.colorSignal} color={activeScenario.color} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="w-full lg:w-[65%] flex flex-col items-end justify-start pt-0 pr-0 lg:pr-12">
            <div className="relative group">
              <motion.div 
                layout
                className="relative w-[393px] h-[852px] bg-black rounded-[54px] border-[12px] border-[#1a1a1a] shadow-[0_30px_60px_rgba(0,0,0,0.6),0_0_80px_rgba(255,255,255,0.01)] overflow-hidden flex flex-col ring-1 ring-white/10 shrink-0 origin-top"
                style={{ 
                  transform: 'scale(0.6)', 
                  fontFamily: '"Inter", sans-serif',
                  marginBottom: '-340px' 
                }}
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  
                  {/* === LOCKSCREEN === */}
                  {view === 'lockscreen' && (
                    <motion.div 
                      key="lockscreen"
                      className="absolute inset-0 z-0 flex flex-col bg-black"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ImageWithFallback src={imgLockScreenWallpaper} className="absolute inset-0 size-full object-cover" />
                      <div className="absolute inset-0 bg-black/10" />
                      <StatusHeader />
                      <div className="relative z-10 flex flex-col items-center mt-16 text-white">
                        <p className="text-[20px] font-medium mb-[-5px]">Tuesday, September 12</p>
                        <h1 className="text-[96px] font-bold tracking-[-2.4px] leading-none">9:41</h1>
                      </div>

                      {/* Notification Card */}
                      <motion.div 
                        key={activeScenario.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-[140px] left-[16px] right-[16px] bg-[rgba(0,0,0,0.4)] backdrop-blur-3xl border border-[rgba(255,255,255,0.1)] rounded-[28px] p-[20px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-[8px]">
                            <div className="w-5 h-5 bg-white rounded-[5px] flex items-center justify-center p-0.5">
                              <ImageWithFallback src={imgImageSnapMint} className="w-full h-full object-contain" />
                            </div>
                            <span className="text-[rgba(255,255,255,0.9)] text-[14px] font-medium">Google Pay</span>
                          </div>
                          <span className="text-[rgba(255,255,255,0.5)] text-[12px]">now</span>
                        </div>
                        <h2 className="text-[14px] font-semibold leading-tight mb-1" style={{ color: activeScenario.color }}>{activeScenario.mobileTitle}</h2>
                        <p className="text-[rgba(255,255,255,0.5)] text-[13px] leading-[1.4] font-normal mb-6">
                          {activeScenario.mobileBody}
                        </p>
                        <div className="flex gap-[8px]">
                          <button data-interactive onClick={() => handleNotificationClick(activeScenario.id === 3 ? 'cibil' : 'balance')} className="flex-1 bg-[rgba(255,255,255,0.1)] text-white h-[48px] rounded-[16px] text-[15px] font-medium border-0 transition-colors">{activeScenario.mobileBtn1}</button>
                          <button data-interactive onClick={handlePayNow} className="flex-1 bg-white text-black h-[48px] rounded-[16px] text-[15px] font-semibold transition-colors">{activeScenario.mobileBtn2}</button>
                        </div>
                      </motion.div>

                      <div className="absolute bottom-12 left-0 right-0 px-12 flex justify-between z-10 shrink-0">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/10"><Flashlight size={20} className="text-white" /></div>
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/10"><Camera size={20} className="text-white" /></div>
                      </div>
                      <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 w-[128px] h-[4px] bg-[rgba(255,255,255,0.8)] rounded-full shrink-0" />
                    </motion.div>
                  )}

                  {/* === FACE ID SCANNER === */}
                  {view === 'face-id' && (
                    <motion.div key="face-id" className="absolute inset-0 z-[300] flex flex-col items-center justify-center bg-black/40 backdrop-blur-[8px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="w-[160px] h-[160px] bg-[#1c1c1e]/95 backdrop-blur-2xl rounded-[3rem] flex flex-col items-center justify-center shadow-2xl border border-white/10">
                        <motion.div animate={{ scale: [0.95, 1.05, 0.95] }} transition={{ duration: 1, repeat: Infinity }} className="relative"><FaceIdIcon className="w-[80px] h-[80px] text-white" /></motion.div>
                        <p className="mt-4 text-[15px] font-bold text-white tracking-tight uppercase">Face ID</p>
                      </div>
                    </motion.div>
                  )}

                  {/* === UPI PIN ENTRY === */}
                  {view === 'pin-entry' && (
                    <motion.div key="pin-entry" className="absolute inset-0 z-[400] bg-[#f2f2f7] flex flex-col" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <StatusHeader dark white={activeScenario.id === 0 || activeScenario.id === 1} />
                      <div className="bg-white px-[24px] pt-[72px] pb-[20px] border-b border-[#e5e7eb] flex justify-between items-center shadow-sm">
                        <div className="flex flex-col gap-1">
                          <h2 className="text-[16px] font-bold text-[#1c1c1e]">{flowTarget === 'payment' ? 'Paying SnapMint Services' : 'Check Balance'}</h2>
                          <p className="text-[13px] font-medium text-[#8e8e93]">{flowTarget === 'balance' ? `${selectedBank.name} **** ${selectedBank.number}` : '₹1,099.00'}</p>
                        </div>
                        {pinMode === 'payment' && <ShieldCheck className="w-[24px] h-[24px] text-[#007aff]" />}
                      </div>
                      <div className="flex-1 flex flex-col items-center pt-[64px]">
                        <p className="text-[12px] font-bold tracking-[2px] text-[#8e8e93] mb-10 uppercase">ENTER UPI PIN</p>
                        <div className="flex items-center gap-6">
                          {[0, 1, 2, 3].map((i) => (
                            <div key={i} className={`rounded-full transition-all duration-300 ${pin.length > i ? 'w-4 h-4 bg-black scale-110' : 'w-3 h-3 bg-white border border-[#c7c7cc]'}`} />
                          ))}
                        </div>
                      </div>
                      <div className="w-full bg-white rounded-t-[3rem] pt-8 px-8 pb-12 mt-auto shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
                        <div className="grid grid-cols-3 gap-4 max-w-[320px] mx-auto">
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                            <button key={n} data-interactive onClick={() => pin.length < 4 && setPin(p => p + n)} className="h-[64px] text-[28px] text-black font-medium active:bg-neutral-50 rounded-2xl transition-all">{n}</button>
                          ))}
                          <button data-interactive onClick={() => setPin(p => p.slice(0, -1))} className="h-[64px] flex items-center justify-center active:bg-neutral-50 rounded-2xl"><Delete size={28} className="text-[#8e8e93]" /></button>
                          <button data-interactive onClick={() => pin.length < 4 && setPin(p => p + '0')} className="h-[64px] text-[28px] text-black font-medium active:bg-neutral-50 rounded-2xl">0</button>
                          <button data-interactive onClick={handlePinSubmit} disabled={pin.length < 4} className={`h-[64px] flex items-center justify-center rounded-2xl transition-all ${pin.length === 4 ? 'bg-[#007aff] shadow-lg shadow-blue-500/20' : 'bg-[#f2f2f7]'}`}><Check size={32} className={pin.length === 4 ? 'text-white' : 'text-[#c7c7cc]'} /></button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* === APP MAIN VIEW === */}
                  {view === 'app-main' && (
                    <motion.div 
                      key="app-main" 
                      className={`absolute inset-0 z-10 flex flex-col overflow-hidden [&::-webkit-scrollbar]:hidden ${activeScenario.id === 3 ? 'bg-[#f8f9fa]' : 'bg-[#f2f2f7]'}`} 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      exit={{ opacity: 0 }}
                    >
                      { ( (activeScenario.id === 0 || activeScenario.id === 1) && flowTarget === 'balance' ) ? (
                        <GPayBalanceCheckUI 
                          selectedBank={selectedBank} 
                          setShowBankSelector={setShowBankSelector} 
                          reset={reset} 
                          StatusHeader={StatusHeader}
                          handlePay={handlePay}
                        />
                      ) : (activeScenario.id === 0 || activeScenario.id === 1) ? (
                        /* GPay Flow for Scenarios 0 & 1 */
                        <div className="flex-1 flex flex-col relative h-full bg-white text-black">
                            {/* Payment Intent Design from app-ui-1.tsx */}
                            <div className="flex-1 flex flex-col">
                      <StatusHeader dark white={activeScenario.id === 0 || activeScenario.id === 1} />
                      {/* Top Nav */}
                      <div className="flex justify-between items-center px-6 py-4 mt-[60px]">
                                <button
                                  onClick={() => setView('lockscreen')}
                                  data-interactive
                                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                                >
                                  <X size={24} className="text-gray-700" />
                                </button>
                                <div className="flex gap-2">
                                  <button data-interactive className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
                                    <HelpCircle size={22} className="text-gray-700" />
                                  </button>
                                  <button data-interactive className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
                                    <MoreVertical size={22} className="text-gray-700" />
                                  </button>
                                </div>
                              </div>

                              {/* Body Content */}
                              <div className="flex-1 flex flex-col items-center px-8 pt-8 relative">
                                <div className="w-[72px] h-[72px] bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600 text-2xl font-bold border border-blue-100">
                                  S
                                </div>
                                <h2 className="text-[20px] font-medium text-gray-900 mb-1 tracking-tight">
                                  Paying SnapMint Services
                                </h2>
                                <p className="text-gray-500 text-[14px] mb-8 font-medium">
                                  +91 98765 43210
                                </p>

                                <div className="text-[52px] font-semibold text-gray-900 leading-none tracking-tight mb-8">
                                  ₹1,099
                                </div>
                                <div className="px-5 py-2.5 bg-gray-100 text-gray-600 rounded-full text-[13px] font-bold flex items-center gap-2 uppercase tracking-wide">
                                  Automatic EMI Payment
                                </div>
                              </div>

                              {/* Bottom Sheet Action */}
                              <div className="bg-white rounded-t-[32px] shadow-[0_-8px_30px_rgba(0,0,0,0.08)] px-6 pt-8 pb-12 border-t border-gray-100 relative">
                                <button 
                                  onClick={() => setShowBankSelector(true)}
                                  data-interactive
                                  className="flex items-center gap-4 bg-white border border-gray-200 hover:border-gray-300 rounded-[20px] p-5 mb-5 transition-all active:scale-[0.98] w-full"
                                >
                                  <div className="bg-blue-50 p-2.5 rounded-[12px] border border-blue-100">
                                    <Landmark size={24} className="text-blue-600" />
                                  </div>
                                  <div className="flex-1 text-left">
                                    <div className="font-bold text-[16px] text-gray-900">
                                      {selectedBank.name} **** {selectedBank.number}
                                    </div>
                                    <div className="text-[13px] text-gray-500 mt-0.5 font-medium">
                                      Savings Account
                                    </div>
                                  </div>
                                  <ChevronDown size={20} className={cn("text-gray-400 transition-transform duration-300", showBankSelector && "rotate-180")} />
                                </button>

                                <button
                                  onClick={handlePay}
                                  data-interactive
                                  disabled={selectedBank.balance < 1099}
                                  className={cn(
                                    "w-full h-[64px] font-bold rounded-[20px] transition-all flex items-center justify-center gap-2 shadow-lg text-[18px]",
                                    selectedBank.balance >= 1099
                                      ? "bg-[#1a73e8] hover:bg-[#1557b0] active:scale-95 text-white shadow-blue-500/20"
                                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                  )}
                                >
                                  Pay ₹1,099
                                </button>
                                <div className="flex items-center justify-center gap-2 mt-5 text-gray-400 text-[12px] font-bold uppercase tracking-[0.1em]">
                                  <ShieldCheck size={14} />
                                  Powered by UPI
                                </div>
                              </div>
                            </div>
                          </div>
                      ) : activeScenario.id === 3 ? (
                        /* GPay Adapted Flow for Scenario 3 */
                        <div className="flex-1 flex flex-col relative h-full">
                          <StatusHeader dark white={activeScenario.id === 0 || activeScenario.id === 1} />
                          
                          {/* Navigation / Header */}
                          <div className="bg-white px-4 py-4 flex items-center justify-between border-b border-black/5 mt-[74px]">
                            <div className="flex items-center gap-3">
                              <button data-interactive onClick={() => setView('lockscreen')} className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors">
                                <svg width="24" height="24" viewBox="0 0 14 14" fill="none">
                                  <path d={GPAY_SVG.close} stroke="#1E2939" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                              </button>
                              <div className="w-9 h-9 rounded-full overflow-hidden border border-[#f3f4f6]">
                                <ImageWithFallback src={imgProfile} className="w-full h-full object-cover" />
                              </div>
                              <div className="bg-[#f3f4f6] h-[42px] px-4 py-2 rounded-full flex items-center gap-2">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                  <path d={GPAY_SVG.search} stroke="#6A7282" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                                <span className="text-[#6a7282] text-[15px]">Pay anyone</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M16 4h4v4M8 20H4v-4M16 20h4v-4M8 4H4v4" stroke="#364153" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              <div className="flex flex-col gap-1">
                                <div className="w-1.5 h-1.5 bg-[#364153] rounded-full" />
                                <div className="w-1.5 h-1.5 bg-[#364153] rounded-full" />
                                <div className="w-1.5 h-1.5 bg-[#364153] rounded-full" />
                              </div>
                            </div>
                          </div>

                          <div className="flex-1 overflow-y-auto pt-8 px-6 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
                            <h2 className="text-[#101828] text-[20px] font-medium mb-6">Manage your money</h2>
                            
                            <div className="grid grid-cols-3 gap-4 mb-8">
                              {/* CIBIL Score Action */}
                              <button 
                                data-interactive
                                onClick={() => setGpayView('cibil')}
                                className="flex flex-col items-center gap-2 group"
                              >
                                <div className="w-14 h-14 rounded-2xl bg-white border border-[#f3f4f6] shadow-sm flex items-center justify-center group-active:scale-95 transition-all">
                                  <Activity size={24} className="text-[#1A73E8]" />
                                </div>
                                <span className="text-[#101828] text-[11px] font-medium text-center leading-tight">CIBIL<br/>score</span>
                              </button>

                              {/* Transaction History Icon */}
                              <div className="flex flex-col items-center gap-2 opacity-50">
                                <div className="w-14 h-14 rounded-2xl bg-white border border-[#f3f4f6] shadow-sm flex items-center justify-center">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d={GPAY_SVG.history} stroke="#1A73E8" strokeWidth="2" strokeLinecap="round" />
                                  </svg>
                                </div>
                                <span className="text-[#101828] text-[11px] font-medium text-center leading-tight">Show<br/>history</span>
                              </div>

                              {/* Bank Balance Icon */}
                              <div className="flex flex-col items-center gap-2 opacity-50">
                                <div className="w-14 h-14 rounded-2xl bg-white border border-[#f3f4f6] shadow-sm flex items-center justify-center">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d={GPAY_SVG.bank} stroke="#1A73E8" strokeWidth="2" strokeLinecap="round" />
                                  </svg>
                                </div>
                                <span className="text-[#101828] text-[11px] font-medium text-center leading-tight">Check<br/>balance</span>
                              </div>
                            </div>

                            {/* Standard Pay Now Button for GPay */}
                            <button 
                              data-interactive
                              onClick={() => {
                                setGpayView('payment');
                              }}
                              className="w-full bg-[#1A73E8] p-5 rounded-[24px] shadow-lg shadow-blue-500/20 flex items-center justify-center text-white font-bold active:scale-[0.98] transition-all"
                            >
                              Pay Now ₹1,099
                            </button>
                          </div>

                          {/* Overlay Views */}
                          <AnimatePresence>
                            {gpayView !== 'dashboard' && (
                              <motion.div 
                                initial={{ y: '100%' }}
                                animate={{ y: 0 }}
                                exit={{ y: '100%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="absolute inset-0 bg-white z-[200] flex flex-col overflow-hidden [&::-webkit-scrollbar]:hidden"
                              >
                                <StatusHeader dark white={activeScenario.id === 0 || activeScenario.id === 1} />
                                <div className="bg-white px-4 py-4 flex items-center justify-between border-b border-black/5 mt-[74px]">
                                  <button data-interactive onClick={() => setGpayView('dashboard')} className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                      <path d="M15 18l-6-6 6-6" stroke="#101828" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                  </button>
                                  <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-black rounded-full" />
                                    <div className="w-1.5 h-1.5 bg-black rounded-full" />
                                    <div className="w-1.5 h-1.5 bg-black rounded-full" />
                                  </div>
                                </div>
                                <div className="flex-1 overflow-y-auto bg-[#f2f2f7] [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
                                  {gpayView === 'payment' && (
                                    <div className="flex-1 flex flex-col bg-white h-full overflow-hidden">
                                      {/* Body Content - Standardized Payment UI */}
                                      <div className="flex-1 flex flex-col items-center px-8 pt-6 relative overflow-hidden">
                                        <div className="w-[72px] h-[72px] bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600 text-2xl font-bold border border-blue-100">
                                          S
                                        </div>
                                        <h2 className="text-[20px] font-medium text-gray-900 mb-1 tracking-tight">
                                          Paying SnapMint Services
                                        </h2>
                                        <p className="text-gray-500 text-[14px] mb-8 font-medium">
                                          +91 98765 43210
                                        </p>

                                        <div className="text-[52px] font-semibold text-gray-900 leading-none tracking-tight mb-8">
                                          ₹1,099
                                        </div>
                                        <div className="px-5 py-2.5 bg-gray-100 text-gray-600 rounded-full text-[13px] font-bold flex items-center gap-2 uppercase tracking-wide">
                                          Automatic EMI Payment
                                        </div>
                                      </div>

                                      {/* Bottom Sheet Action */}
                                      <div className="bg-white rounded-t-[32px] shadow-[0_-8px_30px_rgba(0,0,0,0.08)] px-6 pt-6 pb-10 border-t border-gray-100 relative">
                                        <button 
                                          onClick={() => setShowBankSelector(true)}
                                          data-interactive
                                          className="flex items-center gap-4 bg-white border border-gray-200 hover:border-gray-300 rounded-[20px] p-5 mb-5 transition-all active:scale-[0.98] w-full"
                                        >
                                          <div className="bg-blue-50 p-2.5 rounded-[12px] border border-blue-100">
                                            <Landmark size={24} className="text-blue-600" />
                                          </div>
                                          <div className="flex-1 text-left">
                                            <div className="font-bold text-[16px] text-gray-900">
                                              {selectedBank.name} **** {selectedBank.number}
                                            </div>
                                            <div className="text-[13px] text-gray-500 mt-0.5 font-medium">
                                              Savings Account
                                            </div>
                                          </div>
                                          <ChevronDown size={20} className={cn("text-gray-400 transition-transform duration-300", showBankSelector && "rotate-180")} />
                                        </button>

                                        <button
                                          onClick={handlePay}
                                          data-interactive
                                          disabled={selectedBank.balance < 1099}
                                          className={cn(
                                            "w-full h-[64px] font-bold rounded-[20px] transition-all flex items-center justify-center gap-2 shadow-lg text-[18px]",
                                            selectedBank.balance >= 1099
                                              ? "bg-[#1a73e8] hover:bg-[#1557b0] active:scale-95 text-white shadow-blue-500/20"
                                              : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                          )}
                                        >
                                          Pay ₹1,099
                                        </button>
                                        <div className="flex items-center justify-center gap-2 mt-5 text-gray-400 text-[12px] font-bold uppercase tracking-[0.1em]">
                                          <ShieldCheck size={14} />
                                          Powered by UPI
                                        </div>
                                      </div>
                                    </div>
                                  )}

                                  {gpayView === 'cibil' && (
                                    <div className="flex flex-col h-full">
                                      {/* CIBIL Report Header */}
                                      <div className="bg-white px-6 pt-6 pb-12 rounded-b-[32px] shadow-sm mb-5">
                                        <h1 className="text-[#101828] text-[28px] font-semibold tracking-tight">Hi, Rahul</h1>
                                        <p className="text-[#6a7282] text-[15px] font-medium mb-12">Here's your credit score</p>
                                        
                                        <div className="flex flex-col items-center relative py-4">
                                          <svg width="200" height="107" viewBox="0 0 200 107" fill="none">
                                            <path d={GPAY_SVG.gauge} stroke="#F1F3F4" strokeWidth="14" strokeLinecap="round" />
                                            <path d={GPAY_SVG.gauge} stroke="url(#gpay_gauge_gradient)" strokeWidth="14" strokeLinecap="round" strokeDasharray="180 300" />
                                            <defs>
                                              <linearGradient id="gpay_gauge_gradient" x1="20" y1="20" x2="180" y2="20" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#EA4335" />
                                                <stop offset="0.33" stopColor="#FBBC04" />
                                                <stop offset="0.66" stopColor="#34A853" />
                                                <stop offset="1" stopColor="#1EA362" />
                                              </linearGradient>
                                            </defs>
                                          </svg>
                                          <div className="absolute top-[65px] flex flex-col items-center">
                                            <span className="text-[#101828] text-[52px] font-semibold tracking-tighter leading-none">694</span>
                                          </div>
                                          <div className="mt-8 flex flex-col items-center">
                                            <p className="text-[#f9ab00] text-[18px] font-semibold mb-1">Fair</p>
                                            <p className="text-[#6a7282] text-[14px]">Updated on 12 Mar 2024</p>
                                          </div>
                                        </div>
                                      </div>

                                      {/* CIBIL Factors */}
                                      <div className="px-4 space-y-6">
                                        <div className="flex items-center justify-between px-2">
                                          <h3 className="text-[#101828] text-[17px] font-semibold">What's impacting your score</h3>
                                          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <path d={GPAY_SVG.info} stroke="#99A1AF" strokeWidth="1.8" strokeLinecap="round" />
                                          </svg>
                                        </div>

                                        <div className="space-y-3">
                                          {/* Factor 1 */}
                                          <div className="bg-white p-4 rounded-[24px] flex items-center gap-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                                            <div className="w-10 h-10 bg-[#fef7e0] rounded-full flex items-center justify-center">
                                              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                                <path d={GPAY_SVG.shield} stroke="#F9AB00" strokeWidth="1.8" strokeLinecap="round" />
                                              </svg>
                                            </div>
                                            <div className="flex-1">
                                              <p className="text-[#101828] text-[15px] font-semibold">On-time payments</p>
                                              <p className="text-[#6a7282] text-[13px]">82% payments made on time</p>
                                            </div>
                                            <span className="text-[#f9ab00] text-[14px] font-semibold">Fair</span>
                                          </div>

                                          {/* Factor 2 */}
                                          <div className="bg-white p-4 rounded-[24px] flex items-center gap-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                                            <div className="w-10 h-10 bg-[#fce8e6] rounded-full flex items-center justify-center">
                                              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                                <path d={GPAY_SVG.alert} stroke="#EA4335" strokeWidth="1.8" strokeLinecap="round" />
                                              </svg>
                                            </div>
                                            <div className="flex-1">
                                              <p className="text-[#101828] text-[15px] font-semibold">Credit utilization</p>
                                              <p className="text-[#6a7282] text-[13px]">You're using 78% of your limit</p>
                                            </div>
                                            <span className="text-[#ea4335] text-[14px] font-semibold">High</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        /* Standard Flow for other scenarios */
                        <div className="flex-1 relative flex flex-col h-full overflow-hidden">
                          <StatusHeader dark white={activeScenario.id === 0 || activeScenario.id === 1} />
                          <div className="flex-1 flex flex-col items-center pt-[70px] px-8 overflow-hidden">
                            <div className="bg-white w-[84px] h-[84px] rounded-[2rem] flex items-center justify-center mb-8 shadow-[0_10px_25px_rgba(0,0,0,0.05)] border border-white">
                              <div className="w-10 h-10 bg-[#007aff]/10 rounded-xl flex items-center justify-center text-[#007aff]"><Building2 size={24} /></div>
                            </div>
                            <p className="text-[#8e8e93] text-[13px] font-bold tracking-[1.5px] uppercase mb-3">Amount Due</p>
                            <h1 className="text-black text-[56px] font-bold tracking-tight leading-none mb-10">₹1,099.00</h1>
                            <div className="w-full bg-white rounded-[2rem] p-6 shadow-sm border border-black/5 space-y-6">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                  <ImageWithFallback src={imgImageSnapMint} className="w-10 h-10 object-contain" />
                                  <span className="text-black text-[16px] font-bold">SnapMint Services</span>
                                </div>
                                <span className="text-[#007aff] font-bold">EMI #4</span>
                              </div>
                              <div className={`rounded-2xl p-4 flex items-center justify-center text-center ${selectedBank.hasLowBalance ? 'bg-[#ff3b30]/10' : 'bg-[#34c759]/10'}`}>
                                <p className={`text-[13px] font-bold leading-relaxed ${selectedBank.hasLowBalance ? 'text-[#ff3b30]' : 'text-[#34c759]'}`}>
                                  {selectedBank.hasLowBalance ? 'Insufficient Balance. Switch accounts.' : 'Sufficient funds available for payment.'}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white rounded-t-[3.5rem] px-8 pt-6 pb-10 space-y-4 shadow-[0_-10px_40px_rgba(0,0,0,0.04)] border-t border-black/5 shrink-0">
                            <button data-interactive onClick={() => setShowBankSelector(true)} className="w-full h-[72px] bg-[#f2f2f7] rounded-2xl px-5 flex items-center justify-between transition-all">
                              <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-[#007aff]"><Building2 size={20} /></div>
                                <span className="text-black text-[15px] font-bold">{selectedBank.name} •••• {selectedBank.number}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                {selectedBank.hasLowBalance && <span className="text-[#ff3b30] text-[11px] font-bold uppercase tracking-wider">Low</span>}
                                <ChevronDown size={20} className="text-[#c7c7cc]" />
                              </div>
                            </button>
                            <button data-interactive onClick={handlePay} disabled={selectedBank.hasLowBalance} className={`w-full h-[64px] rounded-2xl font-bold text-[17px] transition-all ${selectedBank.hasLowBalance ? 'bg-black/5 text-black/20' : 'bg-[#007aff] text-white shadow-xl shadow-blue-500/20 active:scale-95'}`}>Pay ₹1,099</button>
                            <button data-interactive onClick={reset} className="w-full h-[54px] text-[#8e8e93] font-bold text-[16px]">Cancel</button>
                          </div>
                        </div>
                      )}
                      
                      <AnimatePresence>
                        {showBankSelector && (
                          <>
                            <motion.div 
                              initial={{ opacity: 0 }} 
                              animate={{ opacity: 1 }} 
                              exit={{ opacity: 0 }} 
                              onClick={() => setShowBankSelector(false)} 
                              className="absolute inset-0 bg-black/40 z-[1000] backdrop-blur-[4px]" 
                            />
                            <motion.div 
                              initial={{ y: '100%' }} 
                              animate={{ y: 0 }} 
                              exit={{ y: '100%' }} 
                              transition={{ type: 'spring', damping: 25, stiffness: 200 }} 
                              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] z-[1010] pb-10 pt-5 px-6 shadow-2xl border-t border-gray-100 overflow-hidden"
                            >
                              <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-6" />
                              <div className="flex justify-between items-center mb-8 px-2">
                                <h3 className="text-[20px] font-bold text-gray-900">Choose account to pay</h3>
                                <button onClick={() => setShowBankSelector(false)} data-interactive className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
                                  <X size={20} className="text-gray-600" />
                                </button>
                              </div>
                              <div className="flex flex-col gap-3">
                                {banks.map((bank) => (
                                  <button 
                                    key={bank.id} 
                                    data-interactive 
                                    onClick={() => { setSelectedBank(bank); setShowBankSelector(false); }} 
                                    className={cn(
                                      "w-full p-5 rounded-[24px] border-2 transition-all flex items-center justify-between text-left",
                                      selectedBank.id === bank.id 
                                        ? "border-[#1a73e8] bg-blue-50/50 shadow-sm" 
                                        : "border-gray-100 bg-white hover:border-gray-200"
                                    )}
                                  >
                                    <div className="flex items-center gap-4">
                                      <div className={cn(
                                        "w-12 h-12 rounded-xl flex items-center justify-center shadow-sm border",
                                        selectedBank.id === bank.id ? "bg-white border-blue-100 text-blue-600" : "bg-gray-50 border-gray-100 text-gray-400"
                                      )}>
                                        <Landmark size={24} />
                                      </div>
                                      <div className="flex-1">
                                        <p className="font-bold text-gray-900 text-[16px] leading-tight">{bank.name}</p>
                                        <p className="text-gray-500 text-[13px] font-medium mt-1">
                                          •••• {bank.number} • Balance: ₹{bank.balance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                                        </p>
                                        {bank.hasLowBalance && <p className="text-[#ea4335] text-[11px] font-bold mt-1 uppercase tracking-wide">Insufficient Balance</p>}
                                      </div>
                                    </div>
                                    <div className={cn(
                                      "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                                      selectedBank.id === bank.id ? "border-[#1a73e8] bg-[#1a73e8]" : "border-gray-300"
                                    )}>
                                      {selectedBank.id === bank.id && <Check size={14} className="text-white" strokeWidth={4} />}
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}

                  {/* === PROCESSING === */}
                  {view === 'processing' && (
                    <motion.div key="processing" className="absolute inset-0 z-[500] bg-white flex flex-col items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Loader2 size={64} className="text-[#007aff] animate-spin" strokeWidth={2} />
                      <p className="mt-8 text-[18px] font-bold text-black tracking-tight">Securing Transaction...</p>
                    </motion.div>
                  )}

                  {/* === SUCCESS === */}
                  {view === 'success' && (
                    <motion.div key="success" className="absolute inset-0 z-[500] bg-[#1a73e8] flex flex-col" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <StatusHeader />
                      <div className="flex-1 flex flex-col items-center pt-[100px] px-[24px]">
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', damping: 12, delay: 0.2 }} className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center mb-10 shadow-2xl">
                          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <path d="M41.66 12.5L18.75 35.42L8.33 25" stroke="#1A73E8" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </motion.div>
                        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[28px] font-bold text-white mb-1">Payment successful</motion.h1>
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-white/80 font-normal mb-8">Paid to SnapMint Services</motion.p>
                        
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full bg-white/10 border border-white/20 rounded-[24px] p-6 space-y-4">
                          <div className="justify-between items-center hidden"><span className="text-white/60 text-[14px]">Amount</span><span className="text-[20px] font-bold text-white">₹1,099.00</span></div>
                          <div className="flex justify-between items-center"><span className="text-white/60 text-[14px]">Amount</span><span className="text-[20px] font-bold text-white">₹1,099.00</span></div>
                          <div className="h-px bg-white/10" />
                          <div className="flex justify-between items-center"><span className="text-white/60 text-[14px]">From</span><span className="text-white text-[14px] font-medium">{selectedBank.name} •••• {selectedBank.number}</span></div>
                          <div className="flex justify-between items-center"><span className="text-white/60 text-[14px]">Transaction ID</span><span className="text-white text-[14px] font-medium">GPY921038471</span></div>
                        </motion.div>
                        
                        <div className="flex-1" />
                        <button data-interactive onClick={reset} className="w-full h-[54px] bg-white text-[#1a73e8] rounded-[27px] font-bold text-[16px] mb-6 active:scale-95 transition-all">Done</button>
                      </div>
                      <div className="absolute bottom-[24px] left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-white rounded-full" />
                    </motion.div>
                  )}

                </AnimatePresence>
              </motion.div>
              <p className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/20 text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Tap to interact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}