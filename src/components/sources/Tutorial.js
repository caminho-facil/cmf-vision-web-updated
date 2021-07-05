import React from 'react'

import * as S from '../../styles'


const Tutorial = (props) => {

    const { title, description, image, count } = props;

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 64px' }}>

            <S.Title style={{ color: '#1A6DB6' }}>{count}</S.Title>
            <div style={{
                marginTop: '12px', marginLeft: '32px',
                width: '237px'
            }}>
                <S.ParagraphBold style={{ color: '#2A2A2A', fontSize: '1.5em' }}>{title}</S.ParagraphBold>
                <S.Description style={{ marginTop: '12px',width:'285px' }}>{description}</S.Description>
                <img style={{ marginTop: '32px',width:'194px', height:'196px' }} src={image} alt="" />
            </div>
        </div>
    )
}

export default Tutorial;