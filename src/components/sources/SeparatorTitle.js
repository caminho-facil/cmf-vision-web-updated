import React from 'react'

import * as S from '../../styles'


const SeparatorTitle = (props) => {
    const { title } = props;
    return (
        <div style={{ display: 'flex' }}>
            <S.Separator style={{ marginTop: '12px', opacity: '0.2',width:'146px' }} />
            <S.Description style={{ marginLeft: '12px', marginRight: '12px' }}>{title}</S.Description>
            <S.Separator style={{ marginTop: '12px', opacity: '0.2',width:'146px' }} />
        </div>
    )
}

export default SeparatorTitle;