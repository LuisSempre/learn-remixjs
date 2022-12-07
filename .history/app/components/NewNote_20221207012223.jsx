export default function NewNote() {

  return (
    <form
      method="post"
      action='/notes'
      className='flex flex-col space-y-4'
    >
      <p>
        <label htmlFor='title'>Title</label>
        <input type='text' required id='title' className="border" name="title"/>
      </p>
      <p className='flex flex-col'>
        <label htmlFor='content'>Content</label>
        <textarea name='content' id='content' rows='5' required className='border' />
      </p>
      <div>
        <button className='bg-black text-white py-2 px-2 rounded-full'>
          Add Note
        </button>
      </div>
    </form>
  );
}
