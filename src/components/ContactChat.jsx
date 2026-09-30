import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile.js'
import './ContactChat.css'

const STEPS = [
  {
    key: 'name',
    label: 'Your name',
    question: 'Hey, what should I call you?',
    placeholder: 'Type your name…',
  },
  {
    key: 'email',
    label: 'Your email',
    question: (a) => `Nice to meet you, ${a.name}! Where can I reach you?`,
    placeholder: 'you@company.com',
    type: 'email',
    validate: (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'That email doesn’t look right.',
  },
  {
    key: 'topic',
    label: 'What do you need',
    question: 'What are you looking to build?',
    options: [
      'Product / SaaS design',
      'Mobile app',
      'Website',
      'Design review',
      'Just saying hi',
    ],
  },
  {
    key: 'message',
    label: 'Your message',
    question: 'Great. Tell me a little about it — goals, timeline, anything.',
    placeholder: 'Write your message…',
    multiline: true,
  },
]

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT

function ask(step, answers) {
  return typeof step.question === 'function'
    ? step.question(answers)
    : step.question
}

function ContactChat() {
  const [answers, setAnswers] = useState({})
  const [step, setStep] = useState(0)
  const [messages, setMessages] = useState([
    { from: 'bot', text: ask(STEPS[0], {}) },
  ])
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [typing, setTyping] = useState(false)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const listRef = useRef(null)
  const inputRef = useRef(null)

  const done = step >= STEPS.length
  const current = STEPS[step]

  useEffect(() => {
    const el = listRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  useEffect(() => {
    if (!typing && !done && !current?.options) inputRef.current?.focus({
      preventScroll: true,
    })
  }, [typing, step, done, current])

  function submit(raw) {
    const text = raw.trim()
    if (!text || typing) return
    const bad = current.validate?.(text)
    if (bad && bad !== true) {
      setError(bad)
      return
    }
    setError('')

    const next = { ...answers, [current.key]: text }
    setAnswers(next)
    setMessages((m) => [...m, { from: 'me', text }])
    setValue('')
    setTyping(true)

    const nextStep = step + 1
    setTimeout(() => {
      setTyping(false)
      setStep(nextStep)
      setMessages((m) => [
        ...m,
        {
          from: 'bot',
          text:
            nextStep < STEPS.length
              ? ask(STEPS[nextStep], next)
              : 'Perfect — that’s all I need. Hit send and it lands straight in my inbox.',
        },
      ])
    }, 650)
  }

  async function send() {
    const subject = `Portfolio enquiry from ${answers.name} — ${answers.topic}`
    const body = `Name: ${answers.name}\nEmail: ${answers.email}\nInterested in: ${answers.topic}\n\n${answers.message}`

    if (!ENDPOINT) {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setStatus('sent')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...answers, _subject: subject }),
      })
      if (!res.ok) throw new Error('bad response')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  function restart() {
    setAnswers({})
    setStep(0)
    setValue('')
    setError('')
    setStatus('idle')
    setMessages([{ from: 'bot', text: ask(STEPS[0], {}) }])
  }

  return (
    <div className="chat" aria-label="Contact conversation">
      <div className="chat__progress" aria-hidden="true">
        {STEPS.map((s, i) => (
          <span
            key={s.key}
            className={`chat__dash${i < Math.min(step, STEPS.length) ? ' is-done' : ''}${i === step ? ' is-current' : ''}`}
          />
        ))}
        <span className="chat__count">
          {String(Math.min(step + 1, STEPS.length)).padStart(2, '0')} /{' '}
          {String(STEPS.length).padStart(2, '0')}
        </span>
      </div>

      <div ref={listRef} className="chat__list" aria-live="polite">
        {messages.map((m, i) => (
          <div key={i} className={`chat__row chat__row--${m.from}`}>
            {m.from === 'bot' && (
              <img
                className="chat__avatar"
                src="/portrait-sketch.png"
                alt=""
              />
            )}
            <div className="chat__bubble">{m.text}</div>
          </div>
        ))}
        {typing && (
          <div className="chat__row chat__row--bot">
            <img className="chat__avatar" src="/portrait-sketch.png" alt="" />
            <div className="chat__bubble chat__typing" aria-label="Typing">
              <span />
              <span />
              <span />
            </div>
          </div>
        )}
      </div>

      <div className="chat__composer">
        {status === 'sent' ? (
          <div className="chat__final">
            <p>
              Thanks, {answers.name}! {ENDPOINT
                ? 'Your message is on its way — I’ll reply within a day or two.'
                : 'Your email app should have opened with the message ready to send.'}
            </p>
            <button type="button" className="chat__link" onClick={restart}>
              Start over
            </button>
          </div>
        ) : done ? (
          <div className="chat__final">
            <button
              type="button"
              className="chat__send"
              onClick={send}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            <button type="button" className="chat__link" onClick={restart}>
              Start over
            </button>
            {status === 'error' && (
              <p className="chat__error" role="alert">
                Couldn’t send. Please email me at {profile.email}.
              </p>
            )}
          </div>
        ) : current.options ? (
          <>
            <span className="chat__label">
              {String(step + 1).padStart(2, '0')} · {current.label}
            </span>
            <div className="chat__options">
              {current.options.map((o) => (
                <button
                  key={o}
                  type="button"
                  className="chat__chip"
                  disabled={typing}
                  onClick={() => submit(o)}
                >
                  {o}
                </button>
              ))}
            </div>
          </>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              submit(value)
            }}
          >
            <label className="chat__label" htmlFor="chat-input">
              {String(step + 1).padStart(2, '0')} · {current.label}
            </label>
            <div className="chat__field">
              {current.multiline ? (
                <textarea
                  id="chat-input"
                  ref={inputRef}
                  rows={3}
                  value={value}
                  placeholder={current.placeholder}
                  onChange={(e) => setValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      submit(value)
                    }
                  }}
                />
              ) : (
                <input
                  id="chat-input"
                  ref={inputRef}
                  type={current.type || 'text'}
                  value={value}
                  placeholder={current.placeholder}
                  onChange={(e) => setValue(e.target.value)}
                  autoComplete={current.key === 'email' ? 'email' : 'name'}
                />
              )}
              <button
                type="submit"
                className="chat__go"
                aria-label="Send answer"
                disabled={!value.trim() || typing}
              >
                ↑
              </button>
            </div>
            <span className={`chat__hint${error ? ' is-error' : ''}`}>
              {error || 'Press enter to send'}
            </span>
          </form>
        )}
      </div>
    </div>
  )
}

export default ContactChat
