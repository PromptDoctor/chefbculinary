import { useState } from 'react';

interface Props {
  accessKey: string;
}

type Step   = 1 | 2 | 3;
type Status = 'idle' | 'submitting' | 'success' | 'error';

interface Fields {
  name:          string;
  email:         string;
  phone:         string;
  source:        string;
  date:          string;
  guests:        string;
  eventType:     string;
  serviceStyle:  string;
  menuChoices:   string[];
  notes:         string;
}

const EVENT_TYPES    = ['Wedding', 'Corporate', 'Birthday', 'Backyard / Cookout', 'Holiday', 'Funeral / Repast', 'Other'];
const SERVICE_STYLES = ['Drop-off', 'Buffet', 'Plated', 'Live action station'];
const MENU_OPTIONS   = ['Whole-Pig Roast', 'Loaded Mac Bar', 'Burger Bar', 'Nacho Bar', 'Hot Dog Bar', 'Famous Fried Chicken', 'Wings & Nuggs', 'Caprese Skewers', 'Vegan / Vegetarian focus'];

export default function ContactForm({ accessKey }: Props) {
  const [step,   setStep]   = useState<Step>(1);
  const [status, setStatus] = useState<Status>('idle');
  const [fields, setFields] = useState<Fields>({
    name: '', email: '', phone: '', source: 'Google',
    date: '', guests: '', eventType: '', serviceStyle: '',
    menuChoices: [], notes: '',
  });

  function setField<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields(f => ({ ...f, [key]: value }));
  }

  function toggleSingle(key: 'eventType' | 'serviceStyle', value: string) {
    setFields(f => ({ ...f, [key]: f[key] === value ? '' : value }));
  }

  function toggleMulti(value: string) {
    setFields(f => {
      const next = f.menuChoices.includes(value)
        ? f.menuChoices.filter(v => v !== value)
        : [...f.menuChoices, value];
      return { ...f, menuChoices: next };
    });
  }

  async function handleSubmit() {
    setStatus('submitting');
    try {
      const body = new FormData();
      body.append('access_key', accessKey);
      body.append('subject',    'New catering inquiry — Chef B Culinary');
      body.append('botcheck',   '');
      body.append('name',         fields.name);
      body.append('email',        fields.email);
      body.append('phone',        fields.phone);
      body.append('source',       fields.source);
      body.append('event_date',   fields.date);
      body.append('guest_count',  fields.guests);
      body.append('event_type',   fields.eventType);
      body.append('service_style', fields.serviceStyle);
      body.append('menu_choices', fields.menuChoices.join(', '));
      body.append('notes',        fields.notes);

      const res  = await fetch('https://api.web3forms.com/submit', { method: 'POST', body });
      const json: { success: boolean } = await res.json();
      setStatus(json.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="lead-form">
        <div className="form-success">
          <div className="check">✓</div>
          <h3>Got it — message sent.</h3>
          <p>Chef B will follow up within one business day. Hungry already? Visit Doggie Macs at Soulcial Kitchen.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="lead-form">

      {/* Step indicators */}
      <div className="steps">
        <div className={`step${step === 1 ? ' active' : ''}`}>/ 01 You</div>
        <div className={`step${step === 2 ? ' active' : ''}`}>/ 02 Event</div>
        <div className={`step${step === 3 ? ' active' : ''}`}>/ 03 Menu</div>
      </div>

      {/* Honeypot — must stay hidden from users */}
      <input
        type="checkbox"
        name="botcheck"
        style={{ display: 'none' }}
        tabIndex={-1}
        aria-hidden="true"
        readOnly
      />

      <div className="form-body">

        {/* ── Step 1: You ─────────────────────────── */}
        {step === 1 && (
          <div className="form-step">
            <div className="field-row">
              <div className="field">
                <label htmlFor="cf-name">Your name</label>
                <input
                  id="cf-name"
                  type="text"
                  placeholder="Jordan Smith"
                  autoComplete="name"
                  value={fields.name}
                  onChange={e => setField('name', e.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="cf-email">Email</label>
                <input
                  id="cf-email"
                  type="email"
                  placeholder="you@email.com"
                  autoComplete="email"
                  value={fields.email}
                  onChange={e => setField('email', e.target.value)}
                />
              </div>
            </div>
            <div className="field-row">
              <div className="field">
                <label htmlFor="cf-phone">Phone</label>
                <input
                  id="cf-phone"
                  type="tel"
                  placeholder="(314) 555-0100"
                  autoComplete="tel"
                  value={fields.phone}
                  onChange={e => setField('phone', e.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="cf-source">How'd you hear about us?</label>
                <select
                  id="cf-source"
                  value={fields.source}
                  onChange={e => setField('source', e.target.value)}
                >
                  <option>Google</option>
                  <option>Instagram</option>
                  <option>Word of mouth</option>
                  <option>The food truck</option>
                  <option>Soulcial Kitchen</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* ── Step 2: Event ───────────────────────── */}
        {step === 2 && (
          <div className="form-step">
            <div className="field-row">
              <div className="field">
                <label htmlFor="cf-date">Event date</label>
                <input
                  id="cf-date"
                  type="date"
                  value={fields.date}
                  onChange={e => setField('date', e.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="cf-guests">Guest count</label>
                <input
                  id="cf-guests"
                  type="number"
                  placeholder="60"
                  min="1"
                  value={fields.guests}
                  onChange={e => setField('guests', e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label>Event type</label>
              <div className="chips">
                {EVENT_TYPES.map(t => (
                  <button
                    key={t}
                    type="button"
                    className={`chip${fields.eventType === t ? ' selected' : ''}`}
                    onClick={() => toggleSingle('eventType', t)}
                  >{t}</button>
                ))}
              </div>
            </div>
            <div className="field">
              <label>Service style</label>
              <div className="chips">
                {SERVICE_STYLES.map(s => (
                  <button
                    key={s}
                    type="button"
                    className={`chip${fields.serviceStyle === s ? ' selected' : ''}`}
                    onClick={() => toggleSingle('serviceStyle', s)}
                  >{s}</button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Step 3: Menu ────────────────────────── */}
        {step === 3 && (
          <div className="form-step">
            <div className="field">
              <label>What sounds good? <span style={{ textTransform: 'none', letterSpacing: 0, fontSize: '11px' }}>(pick all that apply)</span></label>
              <div className="chips">
                {MENU_OPTIONS.map(m => (
                  <button
                    key={m}
                    type="button"
                    className={`chip${fields.menuChoices.includes(m) ? ' selected' : ''}`}
                    onClick={() => toggleMulti(m)}
                  >{m}</button>
                ))}
              </div>
            </div>
            <div className="field">
              <label htmlFor="cf-notes">Anything else? Allergies, dream menu, venue notes…</label>
              <textarea
                id="cf-notes"
                rows={4}
                placeholder="Tell us about the day."
                value={fields.notes}
                onChange={e => setField('notes', e.target.value)}
              />
            </div>
          </div>
        )}

      </div>

      {status === 'error' && (
        <p role="alert" style={{ color: '#e87070', marginBottom: '16px', fontSize: '14px' }}>
          Something went wrong — please try again or call us at (314) 626-4221.
        </p>
      )}

      {/* Navigation */}
      <div className="form-actions">
        {step > 1
          ? <button type="button" className="btn-link" onClick={() => setStep(s => (s - 1) as Step)}>← Back</button>
          : <span />
        }
        <div style={{ display: 'flex', gap: '12px' }}>
          {step < 3 && (
            <button type="button" className="btn btn-dark" onClick={() => setStep(s => (s + 1) as Step)}>
              Continue <span aria-hidden="true">→</span>
            </button>
          )}
          {step === 3 && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending…' : <span>Send to Chef B <span aria-hidden="true">→</span></span>}
            </button>
          )}
        </div>
      </div>

    </div>
  );
}
