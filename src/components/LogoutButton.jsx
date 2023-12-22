//import React from 'react'

export default function LogoutButton({ onLogout }) {
  return (
    <form onSubmit={onLogout}>
        <button type="submit">Logout</button>
    </form>
  )
}
