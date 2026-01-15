//importam modelele sequelize din folderul models.
const { Conference, Paper, User, Review } = require('../models')


//creeam o conferinta noua
//ENDPOINT: POST /conferences
const createConference = async (req, res) => {
  try {
<<<<<<< HEAD
    const { reviewerIds, ...conferenceData } = req.body

    if (!reviewerIds || reviewerIds.length < 3) {
      return res.status(400).json({
        message: 'A conference must have at least 3 reviewers'
      })
    }

    const reviewers = await User.findAll({
      where: {
        id: reviewerIds,
        role: 'REVIEWER'
      }
    })

    if (reviewers.length !== reviewerIds.length) {
      return res.status(400).json({
        message: 'One or more users are not reviewers'
      })
    }

    const now = new Date()
    const end = new Date()
    end.setDate(now.getDate() + 7)

    const conference = await Conference.create({
      ...conferenceData,
      startDate: now,
      endDate: end
    })

    await conference.addUsers(reviewers)

    res.status(201).json(conference)
  } catch (err) {
=======
    // Creează o înregistrare nouă în tabela Conferences
    // req.body conține datele trimise din frontend (title, description, dates etc.)
    const conf = await Conference.create(req.body)
    // Returnează conferința creată + status HTTP 201 (Created)
    res.status(201).json(conf)
  } catch (err) {
    // Dacă apare o eroare (ex: date invalide, DB error)
    // trimitem status 500 + mesajul erorii
>>>>>>> f9d498c7ab122219e51236d9ebe1a69ca9ea3407
    res.status(500).json({ error: err.message })
  }
}


<<<<<<< HEAD


=======
>>>>>>> f9d498c7ab122219e51236d9ebe1a69ca9ea3407
// Returnează lista tuturor conferințelor
// Endpoint: GET /conferences
const getConferences = async (req, res) => {
  try {
    //Citeste toate inregistrarile din tabela Conferences
    const confs = await Conference.findAll()
    //Returneaza lista conferintelor ca raspuns sub forma de JSON
    res.json(confs)
  } catch (err) {
    //Pentru orice eroare de server
    res.status(500).json({ error: err.message })
  }
}


//Returneaza o conferinta dupa ID
//Endpoint: GET /conferences/:id
const getConferenceById = async (req, res) => {
  try {
    //Cauta conferinta dupa ID folosind findByPk (Primary Key)
    const conf = await Conference.findByPk(req.params.id)
    //Daca conferinta nu exista, returneaza 404
    if (!conf) return res.status(404).json({ message: 'Conference not found' })
    //Daca conferinta exista, returneaza datele acesteia
    res.json(conf)
  } catch (err) {
    //Eroare de server
    res.status(500).json({ error: err.message })
  }
}


// Actualizează o conferință existentă
// Endpoint: PUT /conferences/:id
const updateConference = async (req, res) => {
  try {
    //Cauta conferinta dupa ID
    const conf = await Conference.findByPk(req.params.id)
    //Daca conferinta nu exista, returneaza 404
    if (!conf) return res.status(404).json({ message: 'Conference not found' })
    
    //Actualizeaza conferinta cu datele din req.body
    await conf.update(req.body)
    //Returneaza conferinta actualizata
    res.json(conf)
  } catch (err) {
    //Eroare de server
    res.status(500).json({ error: err.message })
  }
}


// Returnează toate lucrările pentru o conferință specifică, inclusiv autorii și recenziile
// Endpoint: GET /conferences/:id/papers
const getConferencePapers = async (req, res) => {
  try {
<<<<<<< HEAD
    const { id } = req.params

=======
    // Extrage ID-ul conferinței din parametrii URL
    const { id } = req.params
    // Găsește conferința după ID și include lucrările, autorii și recenziile acestora
>>>>>>> f9d498c7ab122219e51236d9ebe1a69ca9ea3407
    const conference = await Conference.findByPk(id, {
      include: [
        {
          model: Paper,
<<<<<<< HEAD
          as: 'papers',
          include: [
            {
              model: User,
              attributes: ['id', 'name', 'email']
            },
            {
              model: Review
=======
          include: [
            {
              model: User,
              attributes: ['id', 'name', 'email'],
              foreignKey: 'authorId'
            },
            {
              model: Review,
              attributes: ['id', 'decision', 'feedback', 'reviewerId']
>>>>>>> f9d498c7ab122219e51236d9ebe1a69ca9ea3407
            }
          ]
        }
      ]
    })
<<<<<<< HEAD

    if (!conference) {
      return res.status(404).json({ message: 'Conference not found' })
    }

    res.json({
      conferenceId: conference.id,
      conferenceTitle: conference.title,
      papers: conference.papers
    })
  } catch (err) {
=======
    // Dacă conferința nu este găsită, returnează 404
    if (!conference) {
      return res.status(404).json({ message: 'Conference not found' })
    }
    // Returnează ID-ul conferinței, titlul și lucrările asociate
    res.json({
      conferenceId: conference.id,
      conferenceTitle: conference.title,
      papers: conference.Papers
    })
  } catch (err) {
    // Eroare de server
>>>>>>> f9d498c7ab122219e51236d9ebe1a69ca9ea3407
    res.status(500).json({ error: err.message })
  }
}

<<<<<<< HEAD


=======
>>>>>>> f9d498c7ab122219e51236d9ebe1a69ca9ea3407
//Exportă funcțiile pentru a fi folosite în rutele Express
module.exports = {
  createConference,
  getConferences,
  getConferenceById,
  updateConference,
  getConferencePapers
}
