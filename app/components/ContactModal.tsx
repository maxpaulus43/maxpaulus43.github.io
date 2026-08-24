'use client';

import { useEffect, useRef } from 'react';

interface ContactModalProps { onClose: () => void; }

export default function ContactModal({ onClose }: ContactModalProps) {
  const closeButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButton.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', onKeyDown); };
  }, [onClose]);

  return (
    <div className="contact-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="contact-sheet" role="dialog" aria-modal="true" aria-labelledby="contact-title">
        <div className="paper-label">Correspondence</div>
        <button ref={closeButton} className="modal-close" type="button" onClick={onClose} aria-label="Close contact dialog">×</button>
        <p className="eyebrow">A note from the desk of</p>
        <h2 id="contact-title">Max Paulus</h2>
        <p className="contact-intro">Have an interesting problem, project, or idea? Send a note. Email is the fastest way to reach me.</p>
        <div className="contact-options">
          <a href="mailto:maxpaulus43@gmail.com"><span>Email</span><strong>maxpaulus43@gmail.com</strong><b>→</b></a>
          <a href="https://linkedin.com/in/max-paulus-1b456aa8" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Professional profile</strong><b>↗</b></a>
          <a href="https://github.com/maxpaulus43" target="_blank" rel="noreferrer"><span>GitHub</span><strong>Code and projects</strong><b>↗</b></a>
        </div>
        <p className="signature">M. Paulus</p>
      </section>
    </div>
  );
}
