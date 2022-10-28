import React, { useState } from 'react'

const FooterForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const [errors, setErrors] = useState({})

  const [buttonText, setButtonText] = useState('Submit')

  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

  const handleValidation = () => {
    let tempErrors = {}
    let isValid = true

    if (name.length <= 0) {
      tempErrors['name'] = true
      isValid = false
    }

    if (email.length <= 0) {
      tempErrors['email'] = true
      isValid = false
    }

    if (subject.length <= 0) {
      tempErrors['subject'] = true
      isValid = false
    }

    if (message.length <= 0) {
      tempErrors['message'] = true
      isValid = false
    }

    setErrors({ ...tempErrors })

    return isValid
  }

  const handleSubmit = async e => {
    e.preventDefault()

    let isValidForm = handleValidation()

    if (isValidForm) {
      setButtonText('Submitting')

      const res = await fetch('/api/sendgrid', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          subject,
          message
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const { error } = await res.json()

      if (error) {
        setShowSuccessMessage(false)
        setShowFailureMessage(true)
        setButtonText('Submit')
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')

        return
      }

      setShowSuccessMessage(true)
      setShowFailureMessage(false)
      setButtonText('Submit')
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    }
  }

  return (
    <div className="form-container">
      <form
        className="flex flex-col"
        method="post"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
            setShowSuccessMessage(false)
            setShowFailureMessage(false)
          }}
        />
        {errors?.name && (
          <span className="error-message">Name is required.</span>
        )}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setShowSuccessMessage(false)
            setShowFailureMessage(false)
          }}
        />
        {errors?.email && (
          <span className="error-message">Email is required.</span>
        )}
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value)
            setShowSuccessMessage(false)
            setShowFailureMessage(false)
          }}
        />
        {errors?.subject && (
          <span className="error-message">Subject is required.</span>
        )}
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
            setShowSuccessMessage(false)
            setShowFailureMessage(false)
          }}
        />
        {errors?.message && (
          <span className="error-message">Message is required.</span>
        )}
        <button type="submit">{buttonText}</button>
        {showSuccessMessage && (
          <div className="ok-message mt-[30px]">Thank you for your message. It has been sent.</div>
        )}
        {showFailureMessage && (
          <div className="error-message mt-[30px]">There was an error trying to send your message. Please try again later.</div>
        )}
      </form>
    </div>
  )
}

export default FooterForm