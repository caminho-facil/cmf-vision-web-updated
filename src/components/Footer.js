import React from 'react'

import * as S from '../styles'

import Logo from './../img/Logo.svg'

const Footer = () => {

    return (
        <div className="footer">
            <div  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '128px',marginTop:'198px' }}>
                <div style={{marginTop:'-100px'}}>
                    <img src={Logo} />
                    <S.Description style={{ width: '260px' }}>Software focado em detecção de placas veiculares brasileiras, incluindo de motos e padrão mercosul.</S.Description>
                </div>
                <div style={{ marginLeft: '128px', display: 'flex', width: '900px', marginTop: '-128px' }}>
                    <div style={{ marginRight: '258px',marginTop:'32px' }}>
                        <S.Paragraph style={{ fontSize: '0.875em', color: '#1A6DB6', opacity: '80%' }}>Páginas</S.Paragraph>
                        <ul style={{marginTop:'32px',listStyle:'none'}}>
                            <li>Inicio</li>
                            <li>Planos</li>
                            <li>Download</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div style={{ marginRight: '258px',marginTop:'32px' }}>
                        <S.Paragraph style={{ fontSize: '0.875em', color: '#1A6DB6', opacity: '80%' }}>Legal</S.Paragraph>
                        <ul style={{marginTop:'32px'}}>
                            <li>Privacidade</li>
                            <li>Suporte</li>
                        </ul>
                    </div>
                    <div style={{ marginRight: '258px',marginTop:'32px' }}>
                        <S.Paragraph style={{ fontSize: '0.875em', color: '#1A6DB6', opacity: '80%' }}>© 2021 CMF VISION</S.Paragraph>
                        <ul style={{marginTop:'32px'}}>
                            <li>contato@cmf.vision</li>
                            <li>(11) 999999999</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer;