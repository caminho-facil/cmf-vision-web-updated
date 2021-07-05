import React from 'react'

import Header from '../components/Header'

const Page = (props) => {

    return (
        <div className="page">
            <Header />
            <div className="main">
                {props.children}
            </div>
        </div>
    )

}

export default Page;