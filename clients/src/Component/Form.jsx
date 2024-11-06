/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

function Form({ name, setName, email, setEmail, password, setPassword, handleSubmit }) {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100 vw-100 m-0 p-0' style={{ minHeight: '100vh' }}>
      <div className='bg-white p-4 rounded-3 shadow-sm' style={{ maxWidth: '400px' }}>
        <h2 className='text-center mb-4 fw-bold text-info'>Inscription</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 fw-bold">
            <label htmlFor='name' className="form-label ">Nom</label>
            <input
              type='text'
              id='name'
              placeholder='Entrez votre nom'
              className='form-control'
              name="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3 fw-bold">
            <label htmlFor='email' className="form-label">Email</label>
            <input
              type='email'
              id='email'
              placeholder='Entrez votre email'
              className='form-control'
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 fw-bold">
            <label htmlFor='password' className="form-label">Mot de passe</label>
            <input
              type='password'
              id='password'
              placeholder='Entrez votre mot de passe'
              className='form-control'
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type='submit'
            className='btn btn-primary w-100 mb-3 fw-bold'
          >
            Enregistrer
          </button>
          <div className="text-center">
            <p className="mb-2">Déjà inscrit ?</p>
            <button
              type="button"
              className='btn btn-outline-secondary w-100 fw-bold'
            >
              Connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
