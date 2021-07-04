import React from 'react'

import * as S from '../styles'

import Header from '../components/Header'

const Page = (props) => {

    console.log(props)

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