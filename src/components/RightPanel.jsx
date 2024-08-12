import heroImg from "../assets/hero-img.png";

export default function RightPanel() {
  return (
    <div className="bg-[#0e0d12] flex-1 overflow-auto h-dvh">
      <img
        className="rounded-full"
        src={heroImg}
        alt="ocean view from tunnel"
      />
    </div>
  );
}
