import React from "react";
import * as S from "./Style/styleBody.js"
import OdsOne from "../Components/Images/SDG-1.svg"
import OdsTwo from "../Components/Images/SDG-2.svg"
import OdsTree from "../Components/Images/SDG-3.svg"
import OdsFour from "../Components/Images/SDG-4.svg"
import OdsFive from "../Components/Images/SDG-5.svg"
import OdsSix from "../Components/Images/SDG-6.svg"
import OdsSeven from "../Components/Images/SDG-7.svg"
import OdsEight from "../Components/Images/SDG-8.svg"
import OdsNine from "../Components/Images/SDG-9.svg"
import OdsTeen from "../Components/Images/SDG-10.svg"
import OdsEleven from "../Components/Images/SDG-11.svg"
import OdsTwelve from "../Components/Images/SDG-12.svg"
import OdsThirteen from "../Components/Images/SDG-13.svg"
import OdsFourteen from "../Components/Images/SDG-14.svg"
import OdsFifteen from "../Components/Images/SDG-15.svg"
import OdsSixteen from "../Components/Images/SDG-16.svg"
import OdsSeventeen from "../Components/Images/SDG-17.svg"


export default function Body() {
  return (
    <S.Body>
      <S.Header>
        <h1>Objetivos de Desenvolvimento Sustentável - ONU</h1>
        <S.Paragraph>Os Objetivos de Desenvolvimento Sustentável são um
          apelo global à ação para acabar com a pobreza, proteger
          o meio ambiente e o clima e garantir que as pessoas, em
          todos os lugares, possam desfrutar de paz e de prosperidade.
          Estes são os objetivos para os quais as Nações Unidas estão
          contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.
        </S.Paragraph>
      </S.Header>
      <main>
        <S.HTwo>São 17 os Objetivos de Desenvolvimento Sustentável</S.HTwo>
        <S.Section>
          <S.Figure>
            <S.Img src={OdsOne} />
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsTwo} />
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsTree} />
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsFour} />
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsFive} />
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsSix} />
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsSeven} />
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsEight} />
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsNine} />
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsTeen} />
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsEleven} />
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsTwelve} />
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsThirteen} />
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsFourteen} />
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsFifteen} />
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsSixteen} />
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsSeventeen} />
          </S.Figure>
        </S.Section>
        <S.HTwo>Na cidade de Mogi das Cruzes-SP, em junho de 2022 foi lançado o Projeto Mogi 500 Anos
          que planejará a cidade de forma sustentável e estratégica até o ano 2060.
        </S.HTwo>

        <S.SectionMogi>
          <S.Paragraph>O Projeto Mogi 500 Anos compreende uma visão de longo prazo, apoiada em projetos
            estruturadores, com uma visão compartilhada de futuro e a vigilância da sociedade
            pode sustentar este compromisso no longo prazo. A iniciativa inova ao retirar os
            processos de planejamento de dentro dos gabinetes, alterando a linguagem dos
            jargões técnicos para falar a língua do cidadão e dar às pessoas a oportunidade
            de participarem efetivamente da construção de sua própria cidade.
          </S.Paragraph>
          <S.Paragraph>Visando:</S.Paragraph>
          <S.Paragraph>Propor projetos a longo prazo;</S.Paragraph>
          <S.Paragraph>Reinventar a relação entre a iniciativa privada e o poder público;</S.Paragraph>
          <S.Paragraph>Fortalecer a economia do futuro;</S.Paragraph>
          <S.Paragraph>Virar referência nacional;</S.Paragraph>
          <S.Paragraph>Saiba mais sobre ODS <a href="https://brasil.un.org/pt-br/sdgs" target="_blanc">Aqui</a></S.Paragraph>
          <S.Paragraph>Veja mais sobre o Projeto Mogi 500 anos <a href="https://pravoce.mogidascruzes.sp.gov.br/mogi-500-anos/" target="_blanc">clicando</a></S.Paragraph>
        </S.SectionMogi>
      </main>
      <S.Footer>
        <div>
          <h5>Trabalho solicitado pela escola Vai na Web.</h5>
          <p>Fonte: https://brasil.un.org/pt-br/sdgs</p>
          <p>Fonte: https://www.mogidascruzes.sp.gov.br/noticia/projeto-mogi-500-anos-planejara-a-cidade-de-forma-sustentavel-e-estrategica-ate-o-ano-2060</p>
        </div>
        <S.Div>
          <p>Desenvolvido por Thais D'avilla</p>
          <p>Todos os direitos reservados</p>
        </S.Div>
      </S.Footer>
    </S.Body>
  )
}
