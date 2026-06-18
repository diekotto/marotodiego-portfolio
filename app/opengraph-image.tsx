import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt = 'Diego Maroto — Cloud & DevOps Architect';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// On-brand "terminal" OG card, rendered to a static PNG at build time.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#0d1117',
          color: '#c6cdd6',
          fontFamily: 'monospace',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', fontSize: 30, color: '#8b939e' }}>
          <span style={{ color: '#3fbb56' }}>diek@portfolio</span>
          <span>:~$ whoami</span>
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 12 }}>Diego Maroto</div>
        <div style={{ display: 'flex', fontSize: 30, color: '#8b939e', marginTop: 40 }}>
          <span style={{ color: '#3fbb56' }}>diek@portfolio</span>
          <span>:~$ cat role.txt</span>
        </div>
        <div style={{ fontSize: 48, fontWeight: 700, color: '#3fbb56', marginTop: 12 }}>
          Cloud &amp; DevOps Architect
        </div>
      </div>
    ),
    { ...size },
  );
}
