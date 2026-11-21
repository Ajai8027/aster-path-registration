import { useRef, useState } from 'react';
import './RegistrationForm.css';

const initialValues = {
  fullName: '',
  email: '',
  program: '',
  session: 'no-preference',
  consent: false,
};

const programs = ['Career Foundations', 'Digital Skills', 'Communication Essentials'];

const sessionOptions = [
  { value: 'no-preference', label: 'No preference' },
  { value: 'weekday-evening', label: 'Weekday evening' },
  { value: 'weekend', label: 'Weekend' },
];

function validate(values) {
  const errors = {};

  if (values.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.program) {
    errors.program = 'Please select a program.';
  }

  if (!values.consent) {
    errors.consent = 'Please confirm you agree to be contacted about Aster Path learning programs.';
  }

  return errors;
}

function FieldError({ id, message }) {
  if (!message) return null;
  return <p className="registration__field-error" id={id}>{message}</p>;
}

export default function RegistrationForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isConfirmed, setIsConfirmed] = useState(false);
  const formRef = useRef(null);

  function handleChange(event) {
    const { name, type, checked, value } = event.target;
    const nextValue = type === 'checkbox' ? checked : value;

    setValues((current) => ({ ...current, [name]: nextValue }));

    if (errors[name]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[name];
        return next;
      });
    }

    if (isConfirmed) setIsConfirmed(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setIsConfirmed(false);
      const firstInvalidName = Object.keys(nextErrors)[0];
      formRef.current?.elements.namedItem(firstInvalidName)?.focus();
      return;
    }

    setIsConfirmed(true);
  }

  const errorEntries = Object.entries(errors);

  return (
    <section className="registration" id="registration" aria-labelledby="registration-heading">
      <div className="container">
        <div className="registration__header">
          <h2 className="section-heading registration__heading" id="registration-heading">
            Reserve your place
          </h2>
          <p className="registration__description">
            Tell us where to send your program information. We&apos;ll display an on-page confirmation when your details are ready.
          </p>
        </div>

        <div className="registration__card">
          <form className="registration__form" ref={formRef} onSubmit={handleSubmit} noValidate>
            {errorEntries.length > 0 && (
              <div className="registration__error-summary registration__field--full" role="alert">
                <p>Please fix the following before continuing:</p>
                <ul>
                  {errorEntries.map(([field, message]) => (
                    <li key={field}>
                      <a href={`#field-${field}`}>{message}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {isConfirmed && (
              <div className="registration__confirmation registration__field--full" role="status" aria-live="polite">
                <p>
                  <strong>Your request is ready.</strong> Our registration team can review it once an approved submission service is connected.
                </p>
              </div>
            )}

            <div className="registration__field">
              <label htmlFor="field-fullName">
                Full name <span aria-hidden="true">*</span>
              </label>
              <input
                id="field-fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                minLength={2}
                value={values.fullName}
                onChange={handleChange}
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? 'error-fullName' : undefined}
              />
              <FieldError id="error-fullName" message={errors.fullName} />
            </div>

            <div className="registration__field">
              <label htmlFor="field-email">
                Email address <span aria-hidden="true">*</span>
              </label>
              <input
                id="field-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={values.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'error-email' : undefined}
              />
              <FieldError id="error-email" message={errors.email} />
            </div>

            <div className="registration__field">
              <label htmlFor="field-program">
                Program interest <span aria-hidden="true">*</span>
              </label>
              <select
                id="field-program"
                name="program"
                required
                value={values.program}
                onChange={handleChange}
                aria-invalid={Boolean(errors.program)}
                aria-describedby={errors.program ? 'error-program' : undefined}
              >
                <option value="">Select a program</option>
                {programs.map((program) => (
                  <option key={program} value={program}>{program}</option>
                ))}
              </select>
              <FieldError id="error-program" message={errors.program} />
            </div>

            <fieldset className="registration__field registration__field--group">
              <legend>
                Preferred session <span className="registration__optional">(optional)</span>
              </legend>
              <div className="registration__radio-group">
                {sessionOptions.map((option) => (
                  <label key={option.value}>
                    <input
                      type="radio"
                      name="session"
                      value={option.value}
                      checked={values.session === option.value}
                      onChange={handleChange}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="registration__field registration__field--full">
              <div className="registration__checkbox-row">
                <input
                  id="field-consent"
                  name="consent"
                  type="checkbox"
                  required
                  checked={values.consent}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.consent)}
                  aria-describedby={errors.consent ? 'error-consent' : undefined}
                />
                <label htmlFor="field-consent">
                  I agree to be contacted about Aster Path learning programs. <span aria-hidden="true">*</span>
                </label>
              </div>
              <FieldError id="error-consent" message={errors.consent} />
            </div>

            <p className="registration__note registration__field--full">
              This form gives local confirmation only. No details are sent, stored or shared.
            </p>

            <button className="button registration__submit registration__field--full" type="submit">
              Request program details
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
