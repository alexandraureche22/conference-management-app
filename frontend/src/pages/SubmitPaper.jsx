import '../App.css'
import { useState } from 'react'
import { submitPaper } from '../api/paperApi'

export default function SubmitPaper() {
  const [form, setForm] = useState({
    title: '',
    abstract: '',
    fileUrl: '',
    conferenceId: '',
    authorId: ''
  })

  const submit = async () => {
    await submitPaper(form)
    alert('Paper submitted')
  }

  return (
    <div className="container card">
  <h2>Submit Paper</h2>

  {Object.keys(form).map(k => (
    <input
      key={k}
      placeholder={k}
      value={form[k]}
      style={{ display: 'block', marginBottom: 10, width: '100%' }}
      onChange={e => setForm({ ...form, [k]: e.target.value })}
    />
  ))}

  <button onClick={submit}>Submit</button>
</div>

  )
}
