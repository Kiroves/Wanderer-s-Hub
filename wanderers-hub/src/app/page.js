"use client";
import { useRouter } from 'next/navigation'
export default function Home() {
  const router = useRouter()
  return (
    <body className = "bg-gray">
      <button type = 'button' onClick={() => router.push('/login')} className="bg-green-500 text-white px-4 py-2 rounded-full">I have an account</button>
    </body>
  );
}
