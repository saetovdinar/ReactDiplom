'use client';

export default function Preloader({ style }: { style: object }) {
  return (
    <div style={style} className="preloader_container">
      <div className="preloader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
