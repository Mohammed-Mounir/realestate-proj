import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[url('/images/loading-bg.webp')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md flex flex-col items-center justify-center">
        <Image src="/images/logo.webp" alt="Logo" height={150} width={150} />
        <div className="animate-spin rounded-full mt-6 h-8 w-8 border-b-2 border-white" />
      </div>
    </div>
  );
}
