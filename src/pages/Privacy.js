import React from 'react'

import * as S from '../styles'
import Page from '../components/Page'
import Footer from '../components/Footer'

import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';

const Privacy = () => {
    return (
        <>
            <Page>
                <div style={{ marginTop: '32px' }}>
                    <Slide top>
                        <S.Title style={{ color: '#345A7B' }}>Política Privacidade</S.Title>
                    </Slide>
                    <Zoom left>
                        <div style={{ marginTop: '32px', width: '800px' }}>
                            <S.Paragraph style={{ opacity: '0.8' }}>
                                A sua privacidade é importante para nós. É política do CMF Vision respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site CMF Vision, e outros sites que possuímos e operamos.
                            </S.Paragraph>
                            <S.Paragraph style={{ marginTop: '12px', opacity: '0.8' }}>
                                Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                            </S.Paragraph>
                            <S.Paragraph style={{ marginTop: '12px', opacity: '0.8' }}>
                                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                            </S.Paragraph>
                            <S.Paragraph style={{ marginTop: '12px', opacity: '0.8' }}>
                                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                            </S.Paragraph>
                            <S.Paragraph style={{ marginTop: '12px', opacity: '0.8' }}>
                                O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
                            </S.Paragraph>
                            <S.Paragraph style={{ marginTop: '12px', opacity: '0.8' }}>
                                Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
                            </S.Paragraph>
                            <S.Paragraph style={{ marginTop: '12px', opacity: '0.8' }}>
                                O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.
                            </S.Paragraph>

                            <S.Separator style={{ marginLeft: '360px', marginTop: '32px' }}></S.Separator>

                            <S.ParagraphBold style={{ marginTop: '32px', marginBottom: '32px', color: '#345A7B', opacity: '0.8' }}>Política de Cookies CMF Vision</S.ParagraphBold>

                            <S.Description style={{ marginBottom: '12px' }}>O que são cookies?</S.Description>
                            <S.Paragraph style={{ opacity: '0.8' }}>
                                Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou 'quebrar' certos elementos da funcionalidade do site.
                            </S.Paragraph>

                            <S.Description style={{ marginBottom: '12px', marginTop: '32px' }}>Como usamos os cookies?</S.Description>

                            <S.Paragraph style={{ opacity: '0.8' }}>
                                Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados ​​para fornecer um serviço que você usa.
                            </S.Paragraph>
                            <S.Description style={{ marginBottom: '12px', marginTop: '32px' }}>Desativar cookies</S.Description>

                            <S.Paragraph style={{ opacity: '0.8' }}>
                                Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies.
                            </S.Paragraph>

                            <S.Description style={{ marginBottom: '12px', marginTop: '32px' }}>Onde utilizamos cookies?</S.Description>

                            <S.Paragraph style={{ opacity: '0.8' }}>
                                Utilizamos cookies quando você está logado, para que possamos lembrar dessa ação. Isso evita que você precise fazer login sempre que visitar uma nova página. Esses cookies são normalmente removidos ou limpos quando você efetua logout para garantir que você possa acessar apenas a recursos e áreas restritas ao efetuar login.
                            </S.Paragraph>
                            <S.Separator style={{ marginTop: '32px' }} />
                            <S.Description style={{ marginTop: '32px' }}> Esta política é efetiva a partir de Julho de 2021.</S.Description>
                        </div>
                    </Zoom>
                </div>
            </Page>
            <Footer />
        </>
    )
}

export default Privacy;
