import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'
import { NormalWrapperStyle } from 'components/atoms/Wrapper/style'
import { FullPageSectionStyle } from 'components/atoms/Section/style'
import { PageMainTitle, ElementHeader, NormalText, NormalLi, NormalOl } from 'components/atoms/Text/style'
import { NormalContainer, SubContainer } from 'components/atoms/Container/style'

export default function Terms() {
    return (
        <Section>
            <Wrapper>
                <Title>利用規約</Title>
                <Text>
                    本利用規約（以下「本規約」と言います。）には、本サービスの提供条件及び当社と登録されたお客様（以下「お客様」と言います。）との間の権利義務関係が定められています。本サービスの利用に際しては、本規約の全文をお読みいただいたうえで、本規約に同意いただく必要があります。
                </Text>
                <FirstContainer>
                    <Header>第1条(適用)</Header>
                    <Ol>
                        <Li> 本規約は、本サービスの提供条件及び本サービスの利用に関する当社とお客様との間の権利義務関係を定めることを目的とし、お客様と当社との間の本サービスの利用に関わる一切の関係に適用されます。</Li>
                        <Li>当社が当社アプリ上で掲載する本サービス利用に関するルール（<a href="https://www.relyontrip.com/">https://relyontrip.com</a>）は、本規約の一部を構成するものとします。</Li>
                        <Li>本規約の内容と、前項のルールその他の本規約外における本サービスの説明等とが異なる場合は、本規約の規定が優先して適用されるものとします。</Li>
                    </Ol>
                </FirstContainer>
                <FirstContainer>
                    <Header>第2条(定義)</Header>
                    <Text>本規約において使用する以下の用語は、各々以下に定める意味を有するものとします。 ‍</Text>
                    <Ol>
                        <Li>「サービス利用契約」とは、本規約を契約条件として当社とお客様の間で締結される、本サービスの利用契約を意味します。</Li>
                        <Li>「知的財産権」とは、著作権、特許権、実用新案権、意匠権、商標権その他の知的財産権（それらの権利を取得し、またはそれらの権利につき登録等を出願する権利を含みます。）を意味します。</Li>
                        <Li>「投稿データ」とは、お客様が本サービスを利用して投稿その他送信するコンテンツ（文章、画像、動画その他のデータを含みますがこれらに限りません。）を意味します。</Li>
                        <Li>「当社」とは、株式会社RelyonTripを意味します。</Li>
                        <Li>「当社アプリ」とは、その名称が「Sassy」または「Caviia」である、当社が運営するアプリ（理由の如何を問わず、当社のアプリの名称または内容が変更された場合は、当該変更後のアプリを含みます。）を意味します。</Li>
                        <Li>「登録されたお客様」とは、第3条（登録）に基づいて本サービスの利用者としての登録がなされた個人または法人を意味します。</Li>
                        <Li>「本サービス」とは、当社が提供する「Sassy」および「Caviia」という名称のサービス（理由の如何を問わずサービスの名称または内容が変更された場合は、当該変更後のサービスを含みます。）を意味します。</Li>
                    </Ol>
                </FirstContainer>
                <FirstContainer>
                    <Header>第3条(登録)</Header>
                    <Ol>
                        <Li>本サービスの利用を希望する者（以下「登録希望者」といいます。）は、本規約を遵守することに同意し、かつ当社の定める一定の情報（以下「登録事項」といいます。）を当社の定める方法で当社に提供することにより、当社に対し、本サービスの利用の登録を申請することができます。</Li>
                        <Li>当社は、当社の基準に従って、第１項に基づいて登録申請を行った登録希望者（以下「登録申請者」といいます。）の登録の可否を判断し、当社が登録を認める場合にはその旨を登録申請者に通知します。登録申請者のお客様としての登録は、当社が本項の通知を行ったことをもって完了したものとします。</Li>
                        <Li>前項に定める登録の完了時に、サービス利用契約がお客様と当社の間に成立し、お客様は本サービスを本規約に従い利用することができるようになります。</Li>
                        <Li>当社は、登録申請者が、以下の各号のいずれかの事由に該当する場合は、登録及び再登録を拒否することがあり、またその理由について一切開示義務を負いません。</Li>
                    </Ol>
                    <SecondContainer>
                        <Li>当社に提供した登録事項の全部または一部につき虚偽、誤記または記載漏れがあった場合</Li>
                        <Li>未成年者、成年被後見人、被保佐人または被補助人のいずれかであり、法定代理人、後見人、保佐人または補助人の同意等を得ていなかった場合</Li>
                        <Li>反社会的勢力等（暴力団、暴力団員、右翼団体、反社会的勢力、その他これに準ずる者を意味します。以下同じ。）である、または資金提供その他を通じて反社会的勢力等の維持、運営もしくは経営に協力もしくは関与する等反社会的勢力等との何らかの交流もしくは関与を行っていると当社が判断した場合</Li>
                        <Li>過去当社との契約に違反した者またはその関係者であると当社が判断した場合</Li>
                        <Li>第10条に定める措置を受けたことがある場合</Li>
                        <Li>その他、登録を適当でないと当社が判断した場合</Li>
                    </SecondContainer>
                </FirstContainer>
                    <Header>第4条(登録事項の変更)</Header>
                    <Text>お客様は、登録事項に変更があった場合、当社の定める方法により当該変更事項を遅滞なく当社に通知するものとします。</Text>
                <FirstContainer>
                    <Header>第5条(パスワード及びIDの管理)</Header>
                    <Ol>
                        <Li>お客様は、自己の責任において、本サービスに関するパスワード及びIDを適切に管理及び保管するものとし、これを第三者に利用させ、または貸与、譲渡、名義変更、売買等をしてはならないものとします。</Li>
                        <Li>パスワードまたはIDの管理不十分、使用上の過誤、第三者の使用等によって生じた損害に関する責任はお客様が負うものとします。</Li>
                    </Ol>
                </FirstContainer>
                <FirstContainer>
                    <Header>第6条(料金及び支払方法)</Header>
                    <Ol>
                        <Li>お客様は、本サービス利用の対価として、今後別途当社が定めた場合は、当社アプリ上に表示する利用料金を、当社が指定する支払方法により当社に支払うものとします。</Li>
                        <Li>お客様が利用料金の支払を遅滞した場合、お客様は年14.6％の割合による遅延損害金を当社に支払うものとします。</Li>
                    </Ol>
                </FirstContainer>
                <FirstContainer>
                    <Header>第7条(禁止事項)</Header>
                    <Text>お客様は、本サービスの利用にあたり、以下の各号のいずれかに該当する行為または該当すると当社が判断する行為をしてはなりません。‍</Text>
                    <Ol>
                        <Li>法令に違反する行為または犯罪行為に関連する行為</Li>
                        <Li>当社、本サービスの他の利用者またはその他の第三者に対する詐欺または脅迫行為</Li>
                        <Li>公序良俗に反する行為</Li>
                        <Li>当社、本サービスの他の利用者またはその他の第三者の知的財産権、肖像権、プライバシーの権利、名誉、その他の権利または利益を侵害する行為</Li>
                        <Li>本サービスを通じ、以下に該当し、または該当すると当社が判断する情報を当社または本サービスの他の利用者に送信すること・過度に暴力的または残虐な表現を含む情報・コンピューター・ウィルスその他の有害なコンピューター・プログラムを含む情報・当社、本サービスの他の利用者またはその他の第三者の名誉または信用を毀損する表現を含む情報・過度にわいせつな表現を含む情報・差別を助長する表現を含む情報・自殺、自傷行為を助長する表現を含む情報・薬物の不適切な利用を助長する表現を含む情報・反社会的な表現を含む情報・チェーンメール等の第三者への情報の拡散を求める情報・他人に不快感を与える表現を含む情報</Li>
                        <Li>本サービスのネットワークまたはシステム等に過度な負荷をかける行為</Li>
                        <Li>当社が提供するソフトウェアその他のシステムに対するリバースエンジニアリングその他の解析行為</Li>
                        <Li>本サービスの運営を妨害するおそれのある行為</Li>
                        <Li>当社のネットワークまたはシステム等への不正アクセス</Li>
                        <Li>第三者に成りすます行為</Li>
                        <Li>本サービスの他の利用者のIDまたはパスワードを利用する行為</Li>
                        <Li>当社が事前に許諾しない本サービス上での宣伝、広告、勧誘、または営業行為</Li>
                        <Li>本サービスの他の利用者の情報の収集</Li>
                        <Li>当社、本サービスの他の利用者またはその他の第三者に不利益、損害、不快感を与える行為</Li>
                        <Li>当社アプリ上で掲載する本サービス利用に関するルール（<a href="https://www.relyontrip.com/">https://relyontrip.com</a>）に抵触する行為</Li>
                        <Li>反社会的勢力等への利益供与</Li>
                        <Li>面識のない異性との出会いを目的とした行為</Li>
                        <Li>前各号の行為を直接または間接に惹起し、または容易にする行為</Li>
                        <Li>前各号の行為を試みること</Li>
                        <Li>その他、当社が不適切と判断する行為</Li>
                    </Ol>
                </FirstContainer>
                <FirstContainer>
                    <Header>第8条(本サービスの停止等)</Header>
                    <Text>当社は、以下のいずれかに該当する場合には、お客様に事前に通知することなく、本サービスの全部または一部の提供を停止または中断することができるものとします。</Text>
                    <Ol>
                        <Li>本サービスに係るコンピューター・システムの点検または保守作業を緊急に行う場合</Li>
                        <Li>コンピューター、通信回線等の障害、誤操作、過度なアクセスの集中、不正アクセス、ハッキング等により本サービスの運営ができなくなった場合</Li>
                        <Li>地震、落雷、火災、風水害、停電、天災地変などの不可抗力により本サービスの運営ができなくなった場合</Li>
                        <Li>その他、当社が停止または中断を必要と判断した場合</Li>
                    </Ol>
                </FirstContainer>
                <FirstContainer>
                    <Header>第9条(権利帰属)</Header>
                    <Ol>
                        <Li>当社アプリ及び本サービスに関する知的財産権は全て当社または当社にライセンスを許諾している者に帰属しており、本規約に基づく本サービスの利用許諾は、当社アプリまたは本サービスに関する当社または当社にライセンスを許諾している者の知的財産権の使用許諾を意味するものではありません。</Li>
                        <Li>お客様は、投稿データについて、自らが投稿その他送信することについての適法な権利を有していること、及び投稿データが第三者の権利を侵害していないことについて、当社に対し表明し、保証するものとします。</Li>
                        <Li>お客様は、投稿データについて、当社に対し、世界的、非独占的、無償、サブライセンス可能かつ譲渡可能な使用、複製、配布、派生著作物の作成、表示及び実行に関するライセンスを付与します。また、他のお客様に対しても、本サービスを利用してお客様が投稿その他送信した投稿データの使用、複製、配布、派生著作物を作成、表示及び実行することについての非独占的なライセンスを付与します。</Li>
                        <Li>お客様は、当社及び当社から権利を承継しまたは許諾された者に対して著作者人格権を行使しないことに同意するものとします。</Li>
                    </Ol>
                </FirstContainer>
                <FirstContainer>
                    <Header>第10条(登録抹消等)</Header>
                    <Ol>
                        <Li>当社は、お客様が、以下の各号のいずれかの事由に該当する場合は、事前に通知または催告することなく、投稿データを削除もしくは非表示にし、当該お客様について本サービスの利用を一時的に停止し、またはお客様としての登録を抹消することができます。(1)  本規約のいずれかの条項に違反した場合(2)  登録事項に虚偽の事実があることが判明した場合(3)  支払停止もしくは支払不能となり、または破産手続開始、民事再生手続開始、会社更生手続開始、特別清算開始若しくはこれらに類する手続の開始の申立てがあった場合(4)
                            12ヶ月以上本サービスの利用がない場合
                            (5)  当社からの問い合わせその他の回答を求める連絡に対して30日間以上応答がない場合(6)  第3条第4項各号に該当する場合(7)  その他、当社が本サービスの利用またはお客様としての登録の継続を適当でないと判断した場合</Li>
                        <Li>前項各号のいずれかの事由に該当した場合、お客様は、当社に対して負っている債務の一切について当然に期限の利益を失い、直ちに当社に対して全ての債務の支払を行わなければなりません。</Li>
                    </Ol>
                </FirstContainer>
                <FirstContainer>
                    <Header>第11条(退会)</Header>
                    <Ol>
                        <Li>お客様は、当社所定の手続の完了により、本サービスから退会し、登録を抹消することができます。</Li>
                        <Li>退会にあたり、当社に対して負っている債務が有る場合は、お客様は、当社に対して負っている債務の一切について当然に期限の利益を失い、直ちに当社に対して全ての債務の支払を行わなければなりません。</Li>
                        <Li>退会後の利用者情報の取扱いについては、第15条の規定に従うものとします。</Li>
                    </Ol>
                </FirstContainer>
                <FirstContainer>
                    <Header>第12条(本サービスの内容の変更、終了)</Header>
                    <Ol>
                        <Li>当社は、当社の都合により、本サービスの内容を変更し、または提供を終了することができます。</Li>
                        <Li>当社が本サービスの提供を終了する場合、当社はお客様に事前に通知するものとします。</Li>
                    </Ol>
                </FirstContainer>
                <FirstContainer>
                    <Header>第13条(保証の否認及び免責)</Header>
                    <Ol>
                        <Li>当社は、本サービスがお客様の特定の目的に適合すること、期待する機能・商品的価値・正確性・有用性を有すること、お客様による本サービスの利用がお客様に適用のある法令または業界団体の内部規則等に適合すること、継続的に利用できること、及び不具合が生じないことについて、明示又は黙示を問わず何ら保証するものではありません。</Li>
                        <Li>当社は、本サービスに関してお客様が被った損害につき、過去12ヶ月間にお客様が当社に支払った対価の金額を超えて賠償する責任を負わないものとし、また、付随的損害、間接損害、特別損害、将来の損害及び逸失利益にかかる損害については、賠償する責任を負わないものとします。</Li>
                        <Li>本サービスまたは当社アプリに関連してお客様と他のお客様または第三者との間において生じた取引、連絡、紛争等については、お客様が自己の責任によって解決するものとします。</Li>
                    </Ol>
                </FirstContainer>
                <FirstContainer>
                    <Header>第14条(秘密保持)</Header>
                    <Text>お客様は、本サービスに関連して当社がお客様に対して秘密に取扱うことを求めて開示した非公知の情報について、当社の事前の書面による承諾がある場合を除き、秘密に取扱うものとします。‍</Text>
                </FirstContainer>
                <FirstContainer>
                    <Header>第15条(利用者情報の取扱い)</Header>
                    <Ol>
                        <Li>当社によるお客様の利用者情報の取扱いについては、別途本アプリ上における、当社プライバシーポリシーの定めによるものとし、お客様はこのプライバシーポリシーに従って当社がお客様の利用者情報を取扱うことについて同意するものとします。</Li>
                        <Li>当社は、お客様が当社に提供した情報、データ等を、個人を特定できない形での統計的な情報として、当社の裁量で、利用及び公開することができるものとし、お客様はこれに同意し反対しないものとします。</Li>
                    </Ol>
                </FirstContainer>
                <FirstContainer>
                    <Header>第16条(本規約等の変更)</Header>
                    <Text>当社は、当社が必要と認めた場合は、本規約を変更できるものとします。本規約を変更する場合、変更後の本規約の施行時期及び内容を当社ウェブサイト上での掲示その他の適切な方法により周知し、またはお客様に通知します。但し、法令上お客様の同意が必要となるような内容の変更の場合は、当社所定の方法でお客様の同意を得るものとします。‍</Text>
                </FirstContainer>
                <FirstContainer>
                    <Header>第17条(連絡／通知)</Header>
                    <Ol>
                        <Li>本サービスに関する問い合わせその他お客様から当社に対する連絡または通知、及び本規約の変更に関する通知その他当社からお客様に対する連絡または通知は、当社の定める方法で行うものとします。</Li>
                        <Li>当社が登録事項に含まれるメールアドレスその他の連絡先に連絡または通知を行った場合、お客様は当該連絡または通知を受領したものとみなします。</Li>
                    </Ol>
                </FirstContainer>
                <FirstContainer>
                    <Header>第18条(サービス利用契約上の地位の譲渡等)</Header>
                    <Ol>
                        <Li>お客様は、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務につき、第三者に対し、譲渡、移転、担保設定、その他の処分をすることはできません。</Li>
                        <Li>当社は本サービスにかかる事業を他社に譲渡した場合には、当該事業譲渡に伴い利用契約上の地位、本規約に基づく権利及び義務並びにお客様の登録事項その他の顧客情報を当該事業譲渡の譲受人に譲渡することができるものとし、お客様は、かかる譲渡につき本項において予め同意したものとします。なお、本項に定める事業譲渡には、通常の事業譲渡のみならず、会社分割その他事業が移転するあらゆる場合を含むものとします。 </Li>
                    </Ol>
                </FirstContainer>
                <FirstContainer>
                    <Header>第19条(分離可能性)</Header>
                    <Text>本規約のいずれかの条項またはその一部が、消費者契約法その他の法令等により無効または執行不能と判断された場合であっても、本規約の残りの規定及び一部が無効または執行不能と判断された規定の残りの部分は、継続して完全に効力を有するものとします。‍</Text>
                </FirstContainer>
                <FirstContainer>
                    <Header>第20条(準拠法及び管轄裁判所)</Header>
                    <Ol>
                        <Li>本規約及びサービス利用契約の準拠法は日本法とします。</Li>
                        <Li>本規約またはサービス利用契約に起因し、または関連する一切の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</Li>
                    </Ol>
                </FirstContainer>
                <FirstContainer>
                    <Text>2020年2月10日 制定</Text>
                </FirstContainer>
            </Wrapper>
        </Section>
        
    )
}

const Section = styled.section`
    ${FullPageSectionStyle};
`
const Wrapper = styled.div`
    ${NormalWrapperStyle};
`

const FirstContainer = styled.div`
    ${NormalContainer};
`

const SecondContainer = styled.div`
    ${SubContainer};
`

const Title = styled.div`
    ${PageMainTitle};
`

const Header = styled.div`
    ${ElementHeader};
`

const Text = styled.p`
    ${NormalText};
`

const Li = styled.li`
    ${NormalLi};
`
const Ol = styled.ol`
    ${NormalOl};
`