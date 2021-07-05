import React from 'react'

import * as S from '../../styles'

const SeparatorTitleLeft = (props) => {
    const { title, style, onClick } = props;
    return (
        <div style={{ display: 'flex' }}>
            <S.Separator style={{ marginTop: '12px', opacity: '0.2', width: '146px' }} />
            <S.DescriptionLink style={{ ...style, marginLeft: '12px', marginRight: '12px' }} onClick={onClick}>{title}</S.DescriptionLink>
        </div>
    )
}

export default SeparatorTitleLeft;