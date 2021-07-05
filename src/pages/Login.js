import React, { useState } from 'react'

import * as S from '../styles'

import Page from '../components/Page'

import Banner from '../img/banner4.png'

import Slide from 'react-reveal/Slide';

import Footer from '../components/Footer'

import SeparatorTitle from '../components/sources/SeparatorTitle'
import SeparatorTitleLeft from '../components/sources/SeparatorTitleLeft'

import { useHistory } from 'react-router-dom'

const Login = () => {

    const history = useHistory();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        alert('Olá ' + email)
        alert('Sua senha é ' + password)
    }

    return (
        <>
            <Page>
                <Slide left>
                    <S.Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '64px', marginLeft: '64px' }}>
                        <div style={{ marginRight: '32px' }}>
                            <S.Title style={{
                                marginTop: '-72px',
                                color: '#345A7B',
                                fontFamily: 'Roboto',
                                fontWeight: 'bold',
                                width: '472px'
                            }}>Login</S.Title>
                            <S.Description style={{
                                marginTop: '12px',
                                width: '354px'
                            }}>Entre com sua conta para utilizar o ALP
                                se ainda não tiver uma conta se cadastre é de graça.</S.Description>

                            <div style={{ marginTop: '32px' }}>

                                <SeparatorTitle title="Entre" />

                                <form style={{ marginTop: '32px' }} onSubmit={handleSubmit}>
                                    <div>
                                        <S.ParagraphBold style={{ color: '#345A7B', opacity: '0.8', marginBottom: '12px' }}>Endereço de e-mail*</S.ParagraphBold>
                                        <S.Input type="email" placeholder="example@example.com" onChange={(e) => { setEmail(e.target.value) }} />
                                    </div>
                                    <div style={{ marginTop: '32px' }}>
                                        <S.ParagraphBold style={{ color: '#345A7B', opacity: '0.8', marginBottom: '12px' }}>Senha*</S.ParagraphBold>
                                        <S.Input type="password" onChange={(e) => { setPassword(e.target.value) }} required />
                                    </div>
                                    <div>
                                        <S.ButtonLightBlueRounded style={{ width: '338px', marginLeft: '20px', marginTop: '32px' }}>Entrar</S.ButtonLightBlueRounded>
                                        <br /><br />
                                        <SeparatorTitleLeft title="Ainda não tenho uma conta" onClick={() => { history.push('/register') }}  required/>
                                    </div>
                                </form>

                            </div>

                        </div>
                        <img src={Banner} alt="banner" />
                    </S.Box>
                </Slide>
            </Page>
            <Footer />
        </>
    )
}

export default Login;