
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Form from './Component/Form'

// Créer une instance axios avec la configuration de base
const api = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json'
  }
});

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = { name, email, password }
      console.log('Données envoyées:', user)

      // Utiliser l'instance api au lieu d'axios directement
      const response = await api.post('/registers', user)
      console.log('Réponse du serveur:', response.data)

      if (response.status === 201) {
        alert('Inscription réussie!')
        setName('')
        setEmail('')
        setPassword('')
      }
    } catch (error) {
      console.error('Erreur:', error)
      alert(error.response?.data || 'Une erreur est survenue')
    }
  }

  return (
    <Form
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  )
}

export default App
