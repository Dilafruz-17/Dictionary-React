import "./setting.css"

function Setting({ theme, setTheme,  fontSize, setFontSize }){
    return(
        <div>
            <h1 className="header">Setting</h1>
            <div className="function-container">
                <div className="setting-function">
                    <h3>Theme</h3>
                    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </div>
                <div className="setting-function">
                    <h3>Default direction</h3>
                    <select>
                        <option value="english-ezbek">English-Uzbek</option>
                        <option value="uzbek-english">Uzbek-English</option>
                    </select>
                </div>
                <div className="setting-function">
                    <h3>Font size</h3>
                    <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </div>
            </div>
            <div className="card">
                <i className="bi bi-cup-hot-fill"></i>
                <h1>Support the Dev</h1>
                <p>Help me keep this dictionary free and updated for everyone</p>
                <h3>1234 2345 3456 4567</h3>
                <button>Buy me a coffee</button>
            </div>
        </div>
    )
}

export default Setting