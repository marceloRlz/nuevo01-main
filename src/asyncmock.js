/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const stockProductos = [
    {id:'1' , nombre:'Pokemon Amarillo ', Precio:400, stock:2,descripcion:'Pokémon Yellow: Special Pikachu Edition, conocido en Japón como: Pocket Monsters Pikachu, es la tercera edición de los primeros videojuegos de Pokémon del género RPG para Game Boy. Es muy similar a Pokémon Red y Blue', img: "../img/juegos/poke-amarillo.jpg",idCat:'2' },
    {id:'2' , nombre:'Pokemon  Pokémon Edición Rubí y Pokémon Edición Zafiro, conocidos en Japón como Pocket Monsters Ruby & Sapphire, son 2 videojuegos del género RPG pertenecientes a la tercera generación de la saga Pokémon, y los primeros en su tipo lanzados para la consola portátil Game Boy AdvaRuby ', Precio:400, stock:7,descripcion:'nce de Nintendo' ,img: "./img/juegos/poke-ruby.jpg",idCat:'2' },
    {id:'3' , nombre:'Pokemon Plata ', Precio:400, stock:3,descripcion:'Pokémon Edición Oro y Edición Plata, conocidos en Japón como Pocket Monsters Kin & Gin, son la segunda entrega de la serie de videojuegos de Pokémon, de género RPG' ,img: "./img/juegos/poke-plata.jpg",idCat: '2'},
    {id:'4' , nombre:'Super Mario ', Precio:400, stock:12,descripcion:'Sūpā Mario Burazāzu?, lit. Superhermanos Mario) es un videojuego de plataformas, diseñado por Shigeru Miyamoto, lanzado el 13 de septiembre de 1985' ,img: "./img/juegos/mario-64.jpg",idCat:'2'},
    {id:'5' , nombre:'Star Fox ', Precio:400, stock:1,descripcion:'Star Fox es una popular franquicia de videojuegos del género Videojuego de disparos al más puro estilo matamarcianos, producida y distribuida por Nintendo' ,img:"./img/juegos/star-fox.jpg",idCat:'2' },
    {id:'6' , nombre:'Metal Gear Solid  ', Precio:400, stock:3,descripcion:'Metal Gear Solid es un videojuego de acción-aventura y sigilo de 1998 desarrollado por Konami Computer Entertainment Japan y publicado por Konami para la consola PlayStation.​​ Fue lanzado el 3 de septiembre de 1998 en Japón, ​ el 21 de octubre de 1998 en Norteamérica y el 24 de junio de 1999 en Europa' ,img:"./img/juegos/metal-gear.jpg",idCat:'2'},
    {id:'7' , nombre:'Final Fantasy VII ', Precio:400, stock:6,descripcion:'Final Fantasy VII es un videojuego de rol desarrollado y publicado por la empresa Square para la plataforma PlayStation' ,img:"./img/juegos/final-fantasy.jpg",idCat:'2'},
    {id:'8' , nombre:'Power stone ', Precio:400, stock:11,descripcion:'Power Stone es un videojuego de lucha publicado por Capcom en el año 1999. Power Stone fue inicialmente publicado en el hardware de Sega NAOMI y, posteriormente, exportado a la Dreamcast' ,img:"./img/juegos/power-stone.jpg",idCat:'2'},
    {id:'9' , nombre:'Marvel vs. Capcom  ', Precio:400, stock:9,descripcion:'Marvel vs Capcom es una serie de juegos de lucha creada por Capcom en el que los personajes creados por Marvel Comics y los personajes propios de Capcom aparecen juntos' ,img:"./img/juegos/marvel-v-capcom.jpg",idCat:'2'},
    {id:'10' , nombre:' Mortal Kombat 3 ', Precio:400, stock:5,descripcion:'Ultimate Mortal Kombat 3 es el cuarto juego de la saga, aunque solo es la actualización de la tercera entrega, el cual fue lanzado para Arcade por Midway Games en 1995' ,img:"./img/juegos/mortal-kombat.jpg",idCat:'2'},
    {id:'11' , nombre:'Super Mario World ', Precio:400, stock:2,descripcion:'Super Mario World, conocido como Super Mario World: Super Mario Bros. 4 —o en Japón como: スーパーマリオワールド: スーパーマリオブラザーズ4 — es un videojuego de plataformas para Super Nintendo Entertainment System desarrollado y publicado por Nintendo. Fue lanzado en Japón en 1990, América del Norte ' ,img:"./img/juegos/super-marioWorld.webp",idCat:'2'},
    {id:'12' , nombre:'Super Nintendo', Precio:1200, stock:7,descripcion:'La Super Nintendo Entertainment System, conocida popularmente como la Super Nintendo, también llamada la Super Famicom (japonés: スーパーファミコン, Hepburn: Sūpā Famikon) en Japón7​ (abreviada SFC) y la Hyundai Super Comboy (hangul: 현대 슈퍼 컴보이, romanización revisada: Hyeondae Syupeo Keomboi) en Corea del Sur,8​ también nombrada oficialmente de forma abreviada como la Super NES o SNES en América9​ y como la Super Nintendo en Europa,10​ es la segunda videoconsola descontinuada de sobremesa de Nintendo y la sucesora de Nintendo Entertainment System (NES) en América y Europa' ,img: "../img/consolas/super-nintendo.webp",idCat:'3' },
     {id:'13' , nombre:'Sega Saturn ', Precio:1100, stock:6,descripcion:'Sega Saturn (セガサターン Sega Satān?) es la cuarta videoconsola de sobremesa producida por Sega. Perteneciente a la quinta generación de videoconsolas, es la sucesora directa de Mega Drive y compitió con la PlayStation de Sony y la Nintendo 64 de Nintendo. Salió al mercado el 22 de noviembre de 1994 en Japón, el 11 de mayo de 1995 en Norteamérica, y el 8 de julio de 1995 en Europa.' ,img: "../img/consolas/sega-saturn.jpg",idCat:'3' },
     {id:'14' , nombre:'Nintendo 64 ', Precio:2200, stock:8,descripcion:'Nintendo 64 es la cuarta videoconsola de sobremesa descontinuada producida por Nintendo, desarrollada para suceder a la Super Nintendo. Fue la primera consola concebida para dar el salto del 2D al 3D. Compitió en el mercado de la quinta generación con Saturn de Sega y PlayStation (consola) de Sony, esta última creada a partir de diseños descartados previamente por Nintendo.' ,img: "../img/consolas/n64.webp" ,idCat:'3'},
     {id:'15' , nombre:'GameBoy Color', Precio:1000, stock:5,descripcion:'El Game Boy Color (en Japón ゲームボーイカラー; Gēmu Bōi Karā), abreviada GBC, es una videoconsola portátil de la quinta generación de la familia de sistemas de videojuegos de Nintendo Game Boy, esta portátil es la competidora principal de la PocketStation de Sony y la Neo Geo Pocket Color de SNK.' ,img: "../img/consolas/gameboy.webp" ,idCat:'3'},
     {id:'16' , nombre:'Nintendo Nes', Precio:900, stock:4,descripcion:'Nintendo Entertainment System (también conocida como Nintendo NES o simplemente NES)6​, llamada en Japón como Family Computer (también llamada en Japón como Famicom), es una videoconsola descontinuada de 8 bits perteneciente a la tercera generación en la industria de los videojuegos, la primera consola de sobremesa de Nintendo en emplear cartuchos. Fue lanzada por Nintendo en Norteamérica, Europa y Australia entre 1985 y 1987' ,img: "../img/consolas/nes.jpg",idCat:'3' },
     {id:'17' , nombre:'Playstation', Precio:800, stock:12,descripcion:'PlayStation (プレイステーション Pureisutēshon?, comúnmente abreviado como PS) es el nombre de una serie de consolas de videojuegos creadas y desarrolladas por Sony Interactive Entertainment.', img: "../img/consolas/playstation.jpg",idCat:'3' },
     {id:'18' , nombre:'Game Gear ', Precio:2500, stock:2,descripcion:'La Game Gear es una videoconsola portátil creada por Sega en respuesta a la Game Boy de Nintendo. Es la tercera consola portátil con pantalla en color de la historia, después de la Atari Lynx y la Turbo Express.' ,img: "../img/consolas/gamegear.jpg",idCat:'3' },
     {id:'19' , nombre:'Atari ', Precio:5000, stock:1,descripcion:'Atari es una marca que ha sido propiedad de múltiples empresas desde su creación en 1972. Actualmente es propiedad de Atari Interactive, una filial del holding francés Atari SA.1​2​3​' ,img: "../img/consolas/atari.webp",idCat:'3' },
     {id:'20' , nombre:'Sega Dreamcast', Precio:1500, stock:4,descripcion :'Dreamcast es la quinta y última videoconsola de sobremesa producida por Sega. Perteneciente a la sexta generación de videoconsolas, es la sucesora directa de Sega Saturn y compitió con la PlayStation 2 de Sony. Salió al mercado el 27 de noviembre de 1998 en Japón', img: "../img/consolas/dreamcast.jpg",idCat:'3' },
]



export  const getProductos= ()=> {
    return new Promise ( resolve =>{
        setTimeout(()=>{
            resolve(stockProductos);
        },2000)
        
    })
};

export const getUnProducto= (id)=>{
    return new Promise( resolve => {
        setTimeout(() => {
            const producto = stockProductos.find(prod => prod.id === id)
            resolve(producto)
            
        }, 2000);
    })
};
  


export  const getProductosPorCategorias= (idCategoria)=> {
    return new Promise (resolve => {
        setTimeout(()=>{
            const productosCategoria = stockProductos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 2000)
        
    })
};