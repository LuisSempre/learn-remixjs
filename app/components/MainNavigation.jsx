import { NavLink } from '@remix-run/react'

export default function MainNavigation() {
  return (
    <nav className='flex h-full w-full max-w-4xl mx-auto'>
      <ul className='flex justify-between items-center w-full'>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/notes">My Notes</NavLink>
        </li>
      </ul>
    </nav>
  )
}