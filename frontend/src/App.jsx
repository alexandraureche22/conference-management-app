<<<<<<< HEAD
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

=======
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Conferences from './pages/Conferences'
import ConferenceDetails from './pages/ConferenceDetails'
import SubmitPaper from './pages/SubmitPaper'
import ReviewerDashboard from './pages/ReviewerDashboard'
import OrganizerDashboard from './pages/OrganizerDashboard'

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', gap: 10 }}>
        <Link to="/">Conferences</Link>
        <Link to="/submit">Submit Paper</Link>
        <Link to="/reviewer">Reviewer</Link>
        <Link to="/organizer">Organizer</Link>
>>>>>>> f9d498c7ab122219e51236d9ebe1a69ca9ea3407
      </nav>

      <Routes>
        <Route path="/" element={<Conferences />} />
<<<<<<< HEAD
        <Route path="/submit" element={<SubmitPaper />} />
        <Route path="/organizer/create" element={<CreateConference />} />
        <Route path="/conference/:id" element={<ConferenceDetails />} />
        <Route path="/reviewer" element={<ReviewerDashboard />} />
        <Route path="/author" element={<AuthorDashboard />} />

      </Routes>
    </>
=======
        <Route path="/conference/:id" element={<ConferenceDetails />} />
        <Route path="/submit" element={<SubmitPaper />} />
        <Route path="/reviewer" element={<ReviewerDashboard />} />
        <Route path="/organizer" element={<OrganizerDashboard />} />
      </Routes>
    </BrowserRouter>
>>>>>>> f9d498c7ab122219e51236d9ebe1a69ca9ea3407
  )
}
