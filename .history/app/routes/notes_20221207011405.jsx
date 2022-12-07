import { redirect } from '@remix-run/node';
import  NewNote  from '~/components/NewNote';
import { getStoredNotes, storeNotes } from '~/data/notes';

export default function NotesPage() {
  return (
    <main className='flex flex-col justify-center items-center h-full w-full max-w-4xl mx-auto'>
      <NewNote />
    </main>
  )
}

export async function action({request}) {
  const formData = await request.formData()
  const noteData = Object.fromEntries(formData)
  const existingNotes = getStoredNotes()
  noteData.id = new Date().toISOString()
  const updatedNotes = existingNotes.concat(noteData)
  await storeNotes(updatedNotes)
  return redirect('/notes')
}
