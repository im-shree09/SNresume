import React from 'react'
import Typical from 'react-typical'
import '.././../../src/index.css'
import './Profile.css'

function Profile() {
    return (
        <div>

            <div className='profile-container'>
                <div className='profile-parent'>
                    <div className='profile-details'>
                        <div className='colz'>
                        <div className='colz-icon'>
                            <a href='#'>
                                <i className='fa fa-instagram'></i>
                            </a>
                        </div>
                        </div>

                        <div className='profile-details-name'>
                            <span className='primary-text'>
                                {" "}
                                Hello, I'm <span className='highlighted-text'>Shreeshail</span>

                            </span>
                        </div>
                        <div className='profile-details-role'>
                            <span className='primary-text'>
                                {" "}
                                <h1>
                                    {" "}
                                    <Typical
                                        loop={Infinity}
                                        steps={[
                                            "Enthusiastic",
                                            1000,
                                            "React Developer",
                                            1000,
                                            "Coder",
                                            1000,
                                            "Cyclist",
                                            1000,
                                            "chala hava yevu dya",
                                            1000,
                                        ]}
                                    />
                                </h1>
                                <span className='profile-role-tagline'>
                                    M E M B E R O F W C E A C M , G D S C ,
                                    C O D E C H E F W C E C H A P T E R .

                                </span>
                            </span>
                        </div>
                        <div className='profile-options'>
                            <button className='btn primary-btn'>
                                {" "}
                                Hire Me{" "}
                            </button>
                            <a href='#' download={""}>
                                <button className='btn highlighted-btn' >
                                    Get resume
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='profile-picture'>
                        <div className='profile-picture-background'>


                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile