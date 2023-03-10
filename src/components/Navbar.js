import React from 'react'

export default function Navbar(props) {
    // 6. reversing the text color
    let textColor = props.mode==='light'? 'dark' : 'light';
  return (
    <>
    {/* 5. the theme state variable was also passed so we use it to modify bootstrap light and dark classes with template literals. */}
        <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
            <div className="container-fluid">
                <a className={`navbar-brand nav-link text-${textColor}`} href="/">TextUtils</a>
                {/* 7. hamburger */}
                {/* we are just setting it to light mode in any conditions */}
                <button className={`navbar-toggler bg-${props.mode==='dark' ? textColor: props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className={`navbar-toggler-icon bg-${props.mode==='dark' ? textColor: props.mode}`}></span>
                </button>
                {/* hamburger */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className={`nav-link active text-${textColor}`} aria-current="page" href="https://www.google.com">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className={`nav-link text-${textColor}`} href="/">Link</a>
                    </li>
                </ul>
                 {/* theme toggle */}
                    <div className="form-check form-switch">
                        {/* 4. when the checkbox is clicked we call the toggleTheme function from App.js, which changes the colors and the theme state variable.*/}
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" 
                        onClick={props.toggleTheme}/>
                        <label className={`form-check-label text-${textColor}`} htmlFor="flexSwitchCheckDefault">Toggle Theme</label>
                    </div>
                {/* theme toggle */}
                </div>
            </div>
        </nav>
    </>
  )
}
