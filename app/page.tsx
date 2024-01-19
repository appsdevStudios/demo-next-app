import Link from "next/link"

export default function Home() {
  return (
    <main>
      <div className='w-full h-lvh flex items-center justify-center'>
        <div className='text-slate-600'>
          <Link href="/chat">Go to Chat Page</Link>
        </div>
      </div>
    </main>
  )
}
