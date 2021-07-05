import React from 'react'

import * as S from '../../styles'


const ListInfo = (props) => {

    const { title, description, icon, color } = props;

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 64px',marginBottom:'32px' }}>
            <img style={{ marginTop: '32px', width: '64px', height: '64px', border: '4px solid #1A6DB6', borderRadius: '8px' }} src={icon} alt="icon" />
            <div style={{
                marginTop: '12px', marginLeft: '32px',
                width: '237px'
            }}>
                <S.ParagraphBold style={{ color, fontSize: '1.5em', textAlign: 'center' }}>{title}</S.ParagraphBold>
                <S.Description style={{ marginTop: '12px', width: '220px', textAlign: 'center' }}>{description}</S.Description>
            </div>
        </div>
    )
}

export default ListInfo;