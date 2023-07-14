import meal from '../assets/homeImgs/meal.png';
import coldBrew from '../assets/homeImgs/coldBrew.png'
import plants from '../assets/homeImgs/plants.jpg'
import stories from '../assets/homeImgs/stories.jpg'

const homeContent = [
    {
        imgPlace: 'left',
        img: meal,
        alt: 'Produtos da linha Cinnamon Toffee',
        title: 'Sua pausa mais saborosa!',
        text: 'Você pode fazer seu pedido sem pegar filas, pedindo pelo aplicativo da Starbucks e retirando na sua loja preferida.',
        btnTxt: 'Peça pelo app e retire na loja'
    },
    {
        imgPlace: 'right',
        img: coldBrew,
        alt: 'Mocha Cookie Espresso e Frappuccino®',
        title: 'Uma surpresa refrescante para você',
        text: 'Conheça nossa linha de Cold Brew e Refreshers™',
        btnTxt: 'Saiba mais'
    },
    {
        imgPlace: 'left',
        img: plants,
        alt: 'Guatemala Huehuetenango',
        title: 'Coisas boas estão acontecendo',
        text: 'Acreditamos que podemos e devemos gerar um impacto positivo nas comunidades em que atuamos.',
        btnTxt: 'Saiba mais'
    },
    {
        imgPlace: 'right',
        img: stories,
        alt: 'Um lindo café',
        title: 'Histórias e Notícias Starbucks',
        text: 'Fique por dentro das novidades e conheça mais sobre nossas iniciativas.',
        btnTxt: 'Saiba mais'
    },
];

export default homeContent;