interface ArchiveSketchProps { index?: number; label?: string; }

export default function ArchiveSketch({ index = 0, label = 'system' }: ArchiveSketchProps) {
  const variant = index % 3;
  return (
    <div className={`archive-sketch archive-sketch--${variant}`} aria-hidden="true">
      <span className="sketch-label">{label.slice(0, 12)}</span>
      {variant === 0 && <svg viewBox="0 0 180 100"><rect x="8" y="33" width="43" height="28" /><rect x="69" y="20" width="48" height="54" /><rect x="137" y="33" width="35" height="28" /><path d="M51 47h18M117 47h20M93 20V8M93 74v17" /><circle cx="93" cy="47" r="7" /></svg>}
      {variant === 1 && <svg viewBox="0 0 180 100"><circle cx="24" cy="22" r="7" /><circle cx="154" cy="18" r="7" /><circle cx="37" cy="78" r="7" /><circle cx="142" cy="74" r="7" /><path d="M30 25l105 45M147 23L44 73M31 22h116M42 78h93" /><rect x="76" y="38" width="30" height="25" /></svg>}
      {variant === 2 && <svg viewBox="0 0 180 100"><rect x="10" y="12" width="160" height="77" /><path d="M64 12v77M17 27h38M17 41h38M17 55h38M17 69h38M75 28h32M75 42h78M75 55h58M75 69h71" /><circle cx="24" cy="27" r="3" /><circle cx="24" cy="41" r="3" /><circle cx="24" cy="55" r="3" /></svg>}
    </div>
  );
}
