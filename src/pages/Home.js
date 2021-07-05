import React from 'react'

import * as S from '../styles'

import Page from '../components/Page'
import Tutorial from '../components/sources/Tutorial'
import ListInfo from '../components/sources/ListInfo'

import WindowsIcon from '../img/icons/windows.svg'
import ExcelIcon from '../img/icons/excel.svg'
import TelegramIcon from '../img/icons/telegram.svg'
import DatabaseIcon from '../img/icons/database.svg'

import Tutorial1 from '../img/tutorial1.svg'
import Tutorial2 from '../img/tutorial2.svg'
import Tutorial3 from '../img/tutorial3.svg'

import Banner from '../img/banner1.svg'
import Banner1 from '../img/banner1.png'
import Banner2 from '../img/banner2.png'
import Banner3 from '../img/banner3.png'

import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';


import Footer from '../components/Footer'


const Home = () => {
    return (
        <>
            <Page>
                <Slide left>
                    <S.Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ marginRight: '128px' }}>
                            <S.Title style={{
                                marginTop: '-128px',
                                color: '#345A7B',
                                fontFamily: 'Roboto',
                                fontWeight: 'bold',
                                width: '472px'
                            }}>Detector de placas de
                                veículos brasileiros.</S.Title>
                            <S.Description style={{
                                marginTop: '12px',
                                width: '354px'
                            }}>Software focado em detecção de placas veiculares brasileiras, incluindo de motos e padrão mercosul.</S.Description>
                            <div style={{ display: 'flex' }}>
                                <div style={{ marginTop: '32px' }}>
                                    <S.ButtonBorderRectangle>
                                        <span style={{ marginLeft: '12px' }}>Download (x64)</span>
                                        <img src={WindowsIcon} className='icon' style={{ marginLeft: '12px' }} />
                                    </S.ButtonBorderRectangle>
                                    <S.ButtonBorder style={{
                                        marginTop: '-30px',
                                        position: 'relative',
                                        zIndex: '-1',
                                        marginTop: '-40px',
                                        width: '220px',
                                        height: '48px'
                                    }} />
                                </div>
                                <div style={{ marginTop: '32px', marginLeft: '32px' }}>
                                    <S.ButtonBorderRectangle style={{ backgroundColor: '#86A9C3', border: '1px solid #2293F5' }}>
                                        <span>Saiba mais</span>
                                    </S.ButtonBorderRectangle>
                                    <S.ButtonBorder style={{
                                        opacity: '0.8',
                                        marginTop: '-30px',
                                        position: 'relative',
                                        zIndex: '-1',
                                        marginTop: '-40px',
                                        width: '220px',
                                        height: '48px'
                                    }} />
                                </div>
                            </div>
                            <S.ParagraphBold style={{ marginTop: '32px' }}>ALPR Simplificado <span style={{ fontFamily: 'Noto Sans', fontStyle: 'italic', fontSize: '0.875em', fontWeight: 'normal' }}>v0.0.1</span> </S.ParagraphBold>
                        </div>
                        <img src={Banner} />
                    </S.Box>
                </Slide>
            </Page>
            <div>
                <Zoom top>
                    <S.BoxFullWidth style={{
                        height: '958px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#F5F5F5'
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '128px', marginLeft: '256px' }}>
                            <S.Title style={{
                                marginTop: '-384px',
                                color: '#2293F5',
                                fontSize: '2.28em',
                                fontFamily: 'Roboto',
                                fontWeight: 'bold',
                                width: '472px'
                            }}>Introdução</S.Title>
                            <S.ParagraphBold style={{ marginRight: '258px', marginTop: '12px', color: '#2A2A2A' }}>Capture placas de carros através de suas câmeras de maneira automatica!</S.ParagraphBold>
                        </div>
                        <div style={{ display: 'flex', marginTop: '-64px' }}>

                            <Tutorial
                                title="Configure a Câmera"
                                count={1}
                                description="Insira o endereço da câmera defina a qualidade e pronto."
                                image={Tutorial1}
                            />

                            <Tutorial
                                title="Inicie o programa"
                                count={2}
                                description="Depois de configurado inicie a câmera para começar as capturas."
                                image={Tutorial2}
                            />

                            <Tutorial
                                title="Gerencie as capturas"
                                count={3}
                                description="Pronto agora é so manuzear as capturas."
                                image={Tutorial3}
                            />

                        </div>
                        <S.Title style={{ marginTop: '128px', fontSize: '2.25em', color: '#1A6DB6' }}>É fácil, é automático.</S.Title>
                        <S.Separator style={{ marginTop: '32px', width: '128px', backgroundColor: '#E5E9ED' }} />
                    </S.BoxFullWidth>
                </Zoom>
                <Zoom top>
                    <S.BoxFullWidth style={{
                        height: '958px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white'
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '384px', marginLeft: '258px' }}>
                            <S.Title style={{
                                marginTop: '-384px',
                                color: '#2293F5',
                                fontSize: '2.28em',
                                fontFamily: 'Roboto',
                                fontWeight: 'bold',
                                width: '472px'
                            }}>Filtre por placas</S.Title>
                            <S.ParagraphBold style={{ marginRight: '198px', marginTop: '12px', color: '#2A2A2A' }}>Cadastre placas e suas informações para ser alertado.</S.ParagraphBold>
                        </div>
                        <div style={{ display: 'flex' }}>

                            <img src={Banner1} style={{ marginTop: '-98px', marginLeft: '64px' }} />

                        </div>
                    </S.BoxFullWidth>
                </Zoom>
                <Zoom top>
                    <S.BoxFullWidth style={{
                        marginTop: '198px',
                        height: '958px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#F5F5F5'
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '198px' }}>
                            <S.Title style={{
                                marginLeft: '32px',
                                marginTop: '-384px',
                                color: '#2293F5',
                                fontSize: '2.28em',
                                fontFamily: 'Roboto',
                                fontWeight: 'bold',
                                width: '605px'
                            }}>Cadastre quantas câmeras quiser!</S.Title>
                            <S.ParagraphBold style={{ marginTop: '12px', color: '#2A2A2A' }}>Configure sua câmera por IP</S.ParagraphBold>
                        </div>
                        <div style={{ display: 'flex' }}>

                            <img src={Banner2} style={{ marginTop: '-98px' }} />

                        </div>
                    </S.BoxFullWidth>
                </Zoom>
                <Zoom top>
                    <S.BoxFullWidth style={{

                        height: '958px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white'
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '198px', marginLeft: '258px' }}>
                            <S.Title style={{
                                marginTop: '-384px',
                                color: '#2293F5',
                                fontSize: '2.28em',
                                fontFamily: 'Roboto',
                                fontWeight: 'bold',
                                width: '605px'
                            }}>Salve todos os dados!</S.Title>
                            <S.ParagraphBold style={{ marginRight: '258px', marginTop: '12px', color: '#2A2A2A' }}>É super simples</S.ParagraphBold>
                        </div>
                        <div style={{ display: 'flex' }}>

                            <div style={{ marginLeft: '-64px' }}>
                                <img src={Banner3} style={{ marginTop: '-98px', width: '956px', height: '541px' }} />
                            </div>
                            <S.SeparatorTwo style={{ marginLeft: '32px', marginTop: '32px' }} />

                            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '-32px' }}>
                                <ListInfo title="Excel" description="Armazene os dados no seu excel de maneira fácil" icon={ExcelIcon} color="#20744A" />
                                <ListInfo title="Telegram" description="Armazene os dados no seu telegram de maneira fácil" icon={TelegramIcon} color="#40B3E0" />
                                <ListInfo title="Banco de Dados" description="Armazene os dados no seu banco de dados de maneira fácil" icon={DatabaseIcon} color="#1762A3" />
                            </div>

                        </div>
                    </S.BoxFullWidth>
                </Zoom>
                <Zoom top>
                    <S.BoxFullWidth style={{

                        height: '488px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#F5F5F5'
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '688px', marginLeft: '300px' }}>
                            <S.Title style={{
                                marginLeft: '32px',
                                marginTop: '-928px',
                                color: '#2293F5',
                                fontSize: '2.28em',
                                fontFamily: 'Roboto',
                                fontWeight: 'bold',
                                width: '605px'
                            }}>Está esperando o que?</S.Title>
                            <S.Paragraph style={{ marginRight: '198px', marginTop: '12px', color: '#2A2A2A' }}>Escolha seu plano e transforme sua câmera em uma SMART Câmera!</S.Paragraph>
                            <S.Separator style={{ marginRight: '198px', marginTop: '32px', backgroundColor: '#E5E9ED' }} />
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <S.Title style={{ width: '586px', fontSize: '2.25em', textAlign: 'center', marginTop: '-364px', marginRight: '-98px' }}>Os 7 primeiros dias é por nossa conta!</S.Title>
                                <S.ButtonLightBlueRounded style={{ marginLeft: '110px', marginTop: '64px', width: '364px', height: '64px' }}>Testar</S.ButtonLightBlueRounded>
                            </div>
                        </div>
                    </S.BoxFullWidth>
                </Zoom>

            </div>
            <Slide>
                <Footer />
            </Slide>
        </>
    )
}

export default Home;