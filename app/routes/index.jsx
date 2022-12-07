import { Link } from "@remix-run/react";


export default function Index() {
  return (
    <>
    <main className='flex flex-col justify-center items-center h-full w-full max-w-4xl mx-auto'>
        <h1>A better way of keeping track of your notes</h1>
        <p>Try again!</p>
        <button className='rounded-full bg-black text-white px-4 py-2'>
          <Link to='/notes'>Try now!</Link>
        </button>
      </main>
    </>
  );
}
