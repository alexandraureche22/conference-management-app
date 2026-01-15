import { Routes, Route, Link } from 'react-router-dom'
import Conferences from './pages/Conferences'
import SubmitPaper from './pages/SubmitPaper'
import CreateConference from './pages/CreateConference'
import ConferenceDetails from './pages/ConferenceDetails'
import ReviewerDashboard from './pages/ReviewerDashboard'
import AuthorDashboard from './pages/AuthorDashboard'


export default function App() {
  return (
    <>
      <nav style={{ padding: 20 }}>
        <Link to="/">Conferences</Link>{' | '}
        <Link to="/submit">Submit Paper</Link>{' | '}
        <Link to="/organizer/create">Create Conference</Link>{' | '}
        <Link to="/reviewer">Reviewer</Link>{' | '}
        <Link to="/author">Author</Link>

      </nav>

      <Routes>
        <Route path="/" element={<Conferences />} />
        <Route path="/submit" element={<SubmitPaper />} />
        <Route path="/organizer/create" element={<CreateConference />} />
        <Route path="/conference/:id" element={<ConferenceDetails />} />
        <Route path="/reviewer" element={<ReviewerDashboard />} />
        <Route path="/author" element={<AuthorDashboard />} />

      </Routes>
    </>
  )
}
