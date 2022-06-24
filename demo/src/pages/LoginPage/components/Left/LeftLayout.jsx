import React from 'react'
import BoxLogin from '../boxLogin/BoxLogin'


const LeftLayout = () => {
    const ARRAYLINE1 = [
        {
            title: 'Panda',
            img: 'https://s3-alpha-sig.figma.com/img/44de/64f5/f049109c4aaea9e480a868753436e3ca?Expires=1653868800&Signature=bUg6NSTSUlZ5Hqc3he~EylR~Q6OB1FMFR45ZfznsfvNudxi~P2M1mruVOj8TB50fu5g2IhW-fkrjpUUrbXkHcM5Ex4XxqP5sZ7jTdI9ndz0hcYt6PDNF8i18ONBKeguUiypOCd7iAumNguz4hZAWX~ursCuua9myHvyONsGpyDBATcffTKi0Qw-QSmXOk4~imHc0tGPsxFlZ4ZjqSbY0ags1VZ4kPAXc9JnoG~3HX02cp5zMjjLBexgxD2nHOEbEEUFlK2ZtwihebOhskd~9QKcLPAxkmwMjmAJFaHVe8iEeFHssu8vSz3T3BUq5L62nJOOULFGu2TRvImREI91o6g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        },
        {
            title: 'giraffe',
            img: 'https://s3-alpha-sig.figma.com/img/adac/a98e/a97d55dc7e844eb59be17bb70478a7ab?Expires=1653868800&Signature=fjXKq3S6cg4x3koTqaeSu4KpNOOCupXEveBq3CcZa4zFEjVGXxN5Y2xKqgw-ivWkYKqxwL6YTRfyiWU6BpGpIFDT-w02hrMc00TmhYCOgeCqwwOB92h-zszpn64Cife4vbZPOerlst4LXUJDHh1CAUGD~aookR8ThZZ2jS2OZdTStMwEw10JgLFWKFtXyhOPUhBbOR3o-vyatAz8pEbrvLfEnpGLh6krE7cnynJ0Ml8CeUl4srxWi5FEdYmlDKOx2NiU-dcJNNi7m7ufjWn9xJAzKCiOfKkMcGpKR7dOc8LcoVp4lNK~WY1kbawKbrKOIJcMa5JH3A8PouHRZDMu9g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        },
        {
            title: 'dog',
            img: 'https://s3-alpha-sig.figma.com/img/54d7/1421/cc24cc01c1f89c199c6bf0ab5da35759?Expires=1653868800&Signature=DrSVHDyedVpKZCXc73DC08MGvE0CHUO-UUT0oGFwoyoYVxCKMswK8en-QJHrLCb522Tu903AvZR-e5Nmd5KaQnY~w25YqHiaTghUXX6dnkP6hRCAHlYwjwUH7n6RBy55EEMhBS8zyjZTPC2lo9olNDANJAftQZbnI~OP22LqIr1DrT-kJSvE7~uaoPcbn8HVxvY3CU5llPVSviIpD7u7Ti3HebfAl2Dx3704-6eieGjHvBCWOWVL4qFhEH7L2nA1Ohj9msJe31knaQPVdThUVGR6q6lVH2CaWu4J85rBGsMG4yR0jPpF-croxinUPqdAz~Krj8vqL~ljwOjfYTxejA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        },
        
    ]
    const ARRAYLINE2= [
        {
            title: 'parrot',
            img: 'https://s3-alpha-sig.figma.com/img/b697/469c/5d64074d54293283ba15ddd27472d7f8?Expires=1653868800&Signature=QpnrbZn6uc7xj3vmihLVeSEo2BBGbzky-A~2izStsGNU6VOORr--nhqmp2~NZZT~sFR9V0jqoLJ1FWR3Nk5ZLf8MzvcS9SqECOA4zHCdI51x8hjMrDfiisZoMmJ4Ym1c4CUpfqZwoBR-G5eK693mg1jNoFNLntKAq73Tp0Y6KopdIxDRDxVXubFW9XIHCG0FKNL5WSAZVtrPHcYVcORrBIHQdiOvc32LnjETchTB2K8QPmgtLBjbn3E6GE8mQkGR6bh4mfWpNzKMKSDFaQVo6KoNkX8XaOGPRv52uWeHjPwBD-uSBWdiMBvxcF0U2Q1NbnshYrD3LNBtltIf9EQZvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        },
        {
            title: 'nkchaudhary',
            img: 'https://s3-alpha-sig.figma.com/img/e7fb/3a0e/324816c6f6a13692766b7175935289cd?Expires=1653868800&Signature=hsSXjLODTgK8hiarkOZqznQ6xeRM2TX~f1xsDA4gGP-7qu1dRCENHKNuyv7mOjyITryTzjo2Q86wMJhv0oiVyzNCYrWwJMOMlSashv48sJLmFRh2JBG1k2~58-n07ILLIhFEFpkxV7r~JDKwKzT0BhwDo5Z0nZsEi6zcRRcktlifgGtgyQi3NlhVF48iwlLOZu3Y7S4fvDSlSCCPxMboBBQHO3acRPshj87ApPLdq3c8ccJo3e-2ZHl-r1Xk2Uz~DZpb1BYsh-5cSG3xjZznGnfj1heAveX1bPfL7wpUhRsRL-hRZVOV4nwJ8O6KRsf48QJzQb1LdSA7G~oq6qwRDg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        },
        

    ]

    return (
        <div className="left-login" >
            <div className="title">
                <h1 id="h1">Đăng nhập gần đây </h1>
                <h2 id="h2">nhấp vào ảnh của bạn hoặc thêm tài khoản </h2>
            </div>
            <div className="box">
                <div className="line1">
                    {ARRAYLINE1.map(e => (
                        <BoxLogin name={e.title} img={e.img} key={e.title} />
                    ))}
                </div>

                <div className="line2">
                    {ARRAYLINE2.map(e =>(
                        <BoxLogin name={e.title} img={e.img} key={e.title} />
                    ))}
                    
                    <div className="box11" id="idbox6">
                        <div className="title-box">
                            <p className="name">Add new acount</p>

                        </div>
                        <div className="box-add">
                            <img src="https://scontent.fhan4-3.fna.fbcdn.net/v/t1.15752-9/279936540_3128881534042647_679599628757842846_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=e4dEPLJOi0UAX-BzUxv&_nc_ht=scontent.fhan4-3.fna&oh=03_AVKgbTUgJiwv-ewzmsXcqS0I3vTGtCyatyt45qxzzD1zdg&oe=62D884B6" alt="" className='icon-plus'/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LeftLayout