import imgImage2 from "./680b5aadbdc90898d9d2b15f19498758aca4e15f.png";

export default function LockScreenUpcoming() {
  return (
    <div className="bg-[rgba(0,0,0,0.6)] relative size-full" data-name="Lock screen, upcoming">
      <div className="absolute bg-[rgba(75,75,75,0.55)] h-[91px] left-[44px] rounded-[44px] top-[669px] w-[314px]" />
      <div className="absolute left-[57px] size-[60px] top-[685px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <circle cx="30" cy="30" fill="var(--fill-0, #D9D9D9)" fillOpacity="0.14" id="Ellipse 1" r="30" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[175px] not-italic text-[12px] text-[rgba(255,255,255,0.49)] top-[700px] whitespace-nowrap">Upcoming EMI Auto payment</p>
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[115px] not-italic text-[13px] text-[rgba(255,255,255,0.49)] top-[574px] whitespace-nowrap">You’ve got an EMI coming up</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[115px] not-italic text-[13px] text-[rgba(255,255,255,0.49)] top-[598px] whitespace-nowrap">₹1,099 will be deducted on Mar 11</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[115px] not-italic text-[13px] text-[rgba(255,255,255,0.49)] top-[640px] whitespace-nowrap">{`Clear it before it’s due! `}</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[257px] not-italic text-[8px] text-[rgba(255,255,255,0.49)] top-[715px] whitespace-pre">{`due date : 10th March  `}</p>
      <div className="absolute left-[52px] opacity-47 size-[70px] top-[680px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}