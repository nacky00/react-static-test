import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'
import { Link } from 'components/Router'
import { newsData } from 'data';
import { NormalWrapperStyle } from 'components/atoms/Wrapper/style';
import { InnerSectionStyle } from 'components/atoms/Section/style';
import { NewsItem } from 'components/molecules/NewsItem';

const outputNews = newsData.filter((output) => {
    return output.target == "all" || "company"
})

export const NewsSection = props => {
    return (
        <Section>
            <Wrapper>
            <h1 style={{ color: "white" }}>News</h1>
            {outputNews.reverse().slice(0,4).map((body,key) => {
                return(
                    <NewsItem body={body} key={key}/>
                )
            })}
                <BottomWrapper>
                    <MoreButton>
                        <Link to="/news">
                            <p>View All</p><p>→</p>
                        </Link>
                    </MoreButton>
                </BottomWrapper>
            </Wrapper>
        </Section>
    )
}

const Section = styled.section`
    ${InnerSectionStyle};
    background-color: ${Theme.color.black};
`

const Wrapper = styled.div`
    ${NormalWrapperStyle}
`

const BottomWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-top: 2rem;
`

const MoreButton = styled.div`
a {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: solid 1px ${Theme.color.white};
    p {
        color: ${Theme.color.white};
    }
}`
