import React from 'react'

const Errorpage = () => {
    return (
        <div className='bg-light text-center ' style={{ height: "100vh" }}>
            <div className="container">
                <div className="row error-container">
                    <div className="col-md-12 text-center">
                        <h1 className="error-heading">404</h1>
                        <p className="error-text">Oops! The page you are looking for could not be found.</p>
                        <a className='btn btn-lg btn-back fs-2' href="/">Go Back</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Errorpage