import "./style.css"

function IndexPopup() {
  return (
    <div className="container" style={{ width: 300, padding: 20 }}>
      <header className="header">
        <h1>Virtual Try-on</h1>
      </header>
      <div className="glass-card">
        <p style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>
          Virtual Try-On is now available in your <b>Side Panel</b>! 
        </p>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          Click the extension icon or use the side panel bar to start trying on clothes.
        </p>
      </div>
    </div>
  )
}

export default IndexPopup
