import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A] fade-out">
      <div className="text-center">
        <div className="relative w-64 h-64 mx-auto">
          <Image
            src="/programmer-animate.svg"
            alt="Loading animation"
            fill
            priority
            style={{ objectFit: 'contain' }}
          />
        </div>
        <p className="mt-4 text-white text-lg">Loading...</p>
      </div>
    </div>
  );
}
