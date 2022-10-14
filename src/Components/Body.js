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
import Onu from "../Components/Images/onu.png";
import Mogi from "../Components/Images/mogi-brasao.png";


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
            <S.Img src={OdsOne} alt="Figura sobre erradicação da pobreza."/>
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsTwo} alt="Figura sobre fome zero e agricultura sustentável."/>
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsTree} alt="Figura sobre saúde e bem estar."/>
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsFour} alt="Figura sobre educação de qualidade."/>
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsFive} alt="Figura sobre igualdade de gênero."/>
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsSix} alt="Figura sobre água potável e saneamento."/>
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsSeven} alt="Figura sobre energia limpa e acessível."/>
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsEight} alt="Figura sobre trabalho decente e crescimento econômico."/>
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsNine} alt="Figura sobre indústria, inovação e infraestrutura."/>
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsTeen} alt="Figura sobre redução das desigualdades."/>
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsEleven} alt="Figura sobre cidades e comunidades sustentáveis."/>
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsTwelve} alt="Figura sobre consumo e produção responsáveis."/>
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsThirteen} alt="Figura sobre ação contra a mudança global do clima."/>
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsFourteen} alt="Figura sobre vida na água."/>
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsFifteen} alt="Figura sobre vida terrestre."/>
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsSixteen} alt="Figura sobre paz, justiça e instituições eficazes."/>
          </S.Figure>
          <S.Figure>
            <S.Img src={OdsSeventeen} alt="Figura sobre parcerias e meios de implementação."/>
          </S.Figure>
        </S.Section>
        <S.HTwo>Na cidade de Mogi das Cruzes - SP, em junho de 2022 foi lançado o Projeto Mogi 500 Anos
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
          <S.Paragraph> - Propor projetos a longo prazo;</S.Paragraph>
          <S.Paragraph> - Reinventar a relação entre a iniciativa privada e o poder público;</S.Paragraph>
          <S.Paragraph> - Fortalecer a economia do futuro;</S.Paragraph>
          <S.Paragraph> - Virar referência nacional;</S.Paragraph>
          <S.DivBrasao>
            <div>
              <S.AncoraBrasao href="https://brasil.un.org/pt-br/sdgs" target="_blanc">Saiba mais sobre ODS    <S.Brasao src={Onu} alt="Brasão da ONU." />  </S.AncoraBrasao>
            </div>
            <div>
              <S.AncoraBrasao href="https://pravoce.mogidascruzes.sp.gov.br/mogi-500-anos/" target="_blanc">Projeto Mogi 500 anos<S.Brasao src={Mogi} alt="Brasão da cidade de Mogi das Cruzes." /> </S.AncoraBrasao>
            </div>
          </S.DivBrasao>
        </S.SectionMogi>
      </main>
      <S.Footer>
        <S.SectionOne>
          <S.Ancora href="https://brasil.un.org/pt-br/sdgs" target="_blanc">Fonte: Nações Unidas Brasil</S.Ancora>
          <S.Ancora href="https://www.mogidascruzes.sp.gov.br/noticia/projeto-mogi-500-anos-planejara-a-cidade-de-forma-sustentavel-e-estrategica-ate-o-ano-2060" target="_blanc">Fonte: Mogi das Cruzes</S.Ancora>
        </S.SectionOne>
        <S.SectionTwo>
          <S.Ancora href="https://portifolio-sigma-dun.vercel.app/" target="_blanc" >Desenvolvido por Thais D'avilla</S.Ancora>
          <p>Todos os direitos reservados</p>
        </S.SectionTwo>
      </S.Footer>
    </S.Body>
  )
}
