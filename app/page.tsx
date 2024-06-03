import './globals.css'
import { getSession } from './utils/getSession'
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getSession();
  if(!session) {
    redirect('/');
  }
  return (
    <main>
    <div><pre>{JSON.stringify(session)}</pre></div>
    </main>
  )
}