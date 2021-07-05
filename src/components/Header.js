import React from 'react'

import * as S from '../styles'
import Pulse from 'react-reveal/Pulse';
import Logo from '../img/Logo.svg'

import CartIcon from '../img/icons/cart.svg'

import { useHistory } from 'react-router-dom'

const Header = () => {
    let history = useHistory();
    return (
        <div className="header">
            <img src={Logo} alt="logo" className="logo" style={{ marginTop: '-42px' }} onClick={() => {
                history.push("/");
            }} />

            <ul className="list-header">
                <li>Suporte</li>
                <li>Soluções</li>
                <li>
                    <S.ButtonLightBlue>
                        <span style={{ marginLeft: '12px' }}>PLANOS</span> <img src={CartIcon} className='icon' style={{ marginLeft: '12px' }} alt="cart-icon" />
                    </S.ButtonLightBlue>
                </li>
                <li><S.Separator style={{ marginTop: '-5px' }} /></li>
                <li id="login-paragraph" onClick={() => {
                    history.push("/login");
                }}>Entrar na minha conta</li>
                <li style={{ marginLeft: '64px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Pulse>
                            <S.ButtonLightBlueRounded onClick={() => {
                                history.push("/register");
                            }}>
                                <span>TESTE GRÁTIS</span>
                            </S.ButtonLightBlueRounded>
                        </Pulse>
                        <span style={{ marginTop: '32px', fontFamily: 'Roboto', color: '#2293F5', fontWeight: 'bold', fontSize: '1.00000em', opacity: '0.8' }}>São 7 dias por nossa conta!</span>
                    </div>
                </li>
            </ul>


        </div>
    )

}

export default Header;