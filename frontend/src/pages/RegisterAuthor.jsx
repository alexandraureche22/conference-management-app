import { useState } from 'react'
import { createAuthor } from '../api/userApi'

export default function RegisterAuthor() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const submit = async (e) => {
    e.preventDefault()

    await createAuthor({ name, email })

    alert('Author registered')
    setName('')
    setEmail('')
  }

  return (
    <div style={{ maxWidth: 400, margin: '40px auto' }}>
      <h1>Register Author</h1>

      <form onSubmit={submit}>
        <label>Name</label>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  )
}
