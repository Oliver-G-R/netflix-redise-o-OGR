$(document).ready(() => {
    const img = [
        {
            urlImg: './img/card/913381.jpg',
            title: 'Capitulo'
        },
        {
            urlImg: './img/card/1050011.jpg',
            title: 'Capitulo'
        },
        {
            urlImg: './img/card/cropped-1366-768-1073623.jpg',
            title: 'Capitulo'
        },
        {
            urlImg: './img/card/cropped-1366-768-913380.jpg',
            title: 'Capitulo'
        },
        {
            urlImg: './img/card/1050011.jpg',
            title: 'Capitulo'
        },
        {
            urlImg: './img/card/cropped-1366-768-1073623.jpg',
            title: 'Capitulo'
        },
        {
            urlImg: './img/card/913381.jpg',
            title: 'Capitulo'
        },
        {
            urlImg: './img/card/1050011.jpg',
            title: 'Capitulo'
        },
        {
            urlImg: './img/card/cropped-1366-768-1073623.jpg',
            title: 'Capitulo'
        },
        {
            urlImg: './img/card/cropped-1366-768-913380.jpg',
            title: 'Capitulo'
        },
    ]

    const sectionCard = $('.section-card')

    $(window).on('load' , () => createCar(img , sectionCard))

    $(window).on('scroll' , () => scrollNav())
})

const scrollNav = () => {
    var scroll = $(window).scrollTop()
    console.log(scroll)

    scroll < 381 
        ? $('.header-section').removeClass('activ')
        : $('.header-section').addClass('activ')

    scroll < 50 
        ? $('.play-section').removeClass('activ')
        : $('.play-section').addClass('activ')
}

const createCar = (imgData , sectionCard) => {
    $.each(imgData , (key , value) => {
        sectionCard.append(
            `
                <div class="card-serie">
                    <img src=${value.urlImg} alt="">
                    <h2 class="card-serie__title">
                        ${value.title + key} 
                    </h2>
                </div>
            `
        )
    })

    const title = $('.card-serie__title')

    

    $('.card-serie').each((key , value) => {
        $(value).hover(() => {
            $(value).addClass('activ')
        }, () => {
            $(value).removeClass('activ')
        })
    })

    
}
