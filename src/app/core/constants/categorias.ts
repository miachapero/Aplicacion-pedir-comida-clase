import { Categoria } from "../interfaces/categoria";

export const CATEGORIAS: Categoria[] = [
    {
        nombre: 'Hambuguesas',
        id: 1,
        fotoUrl: "https://img.freepik.com/foto-gratis/hamburguesa-queso-perfecta-verduras-sobre-mesa-madera-fondo-negro-ai-generativo_123827-23432.jpg",
        productos: [{
          nombre:"Classic",
          precio: 4000,
          descripcion: "chedar, lechuga y tomate",
          imagen: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXXaUUP/200/200/original?country=ar"
        },
        {
          nombre:"Bacon",
          precio: 4500,
          descripcion: "chedar, huevo, lechuga, cebolla caramelizada",
          imagen: "https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/BK_WEB_BBQ-BACON-DOBLE_1200X800_020822.png"
        },
        {
          nombre:"Tasty",
          precio: 4300,
          descripcion: "cebolla, salsa de la casa, tomate, lechuga, bacon",
          imagen: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$ksX5rs2H/200/200/original?country=ar"
        },
        {
          nombre:"American",
          precio: 5500,
          descripcion: "new in",
          imagen: "https://www.clarin.com/img/2022/05/27/0HXb0UR0v_2000x1500__1.jpg"
        },
       ]
    },
    {
        nombre: 'Pizzas',
        id: 2,
        fotoUrl: "https://thepracticalkitchen.com/wp-content/uploads/2022/10/diy-supreme-pizza-1x1-7333.jpg",
        productos: [
          {
            nombre: 'Pizza con hongos',
            precio: 4000,
            descripcion: "muzarella y hongos",
            imagen:
              'https://images.ecestaticos.com/WJT0BFvdZ4poZa5PiFHuCXX2sTo=/0x0:2121x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F96f%2F563%2Fc84%2F96f563c8404ac8cd97c158887aa56ae1.jpg',
          },
          {
            nombre: 'Pizza 4 quesos',
            precio: 4200,
            descripcion: "quesos italianos",
            imagen:
              'https://unareceta.com/wp-content/uploads/2014/05/pizza-4-quesos.jpg',
          },
          {
            nombre: 'Pizza extra queso',
            precio: 4300,
            descripcion: "doble queso",
            imagen:
              'https://www.gourmet.cl/wp-content/uploads/2017/04/pizza-570x458.jpg',
          },
        ]
    },
    {
        nombre: 'Postres',
        id: 3,
        fotoUrl: "https://okdiario.com/img/2021/03/05/recetas-chocolate-655x368.jpg",
        productos: [
          {
            nombre: 'Marquise',
            precio: 5800,
            descripcion: "Cchocolate y dulce de leche con crema",
            imagen: 'https://truffle-assets.tastemadecontent.net/79143177-marquise-1920x1080-thumbnail.jpg',
          },
          {
            nombre: 'Chocotorta',
            precio: 3800,
            descripcion: "chocolinas y dulce de leche",
            imagen:
              'https://media.ambito.com/p/8518f5de4c37f23623e56d97c877eb71/adjuntos/239/imagenes/040/407/0040407826/chocotortajpg.jpg',
          },
          {
            nombre: 'Pavlova',
            precio: 3800,
            descripcion: "merengue y frutos rojos con crema",
            imagen:
              'https://www.coques.com.ar/wp-content/uploads/2023/05/Torta-Pavlova2.jpg',
          },
          {
            nombre: 'Turrón de Quaker',
            precio: 800,
            descripcion: "Turrón con avena, chocolate y manteca",
            imagen:
              'https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_ipk5fgqbdh_eg-pf-platos-turron-de-avena-hi-03.jpg',
          },
        ]
    },
    {
        nombre: 'Bebidas',
        id: 4,
        fotoUrl: "https://www.michedraui.com.mx/public/uploads/2016/11/5_tragos_fancy.jpg",
        productos: [{
          nombre: 'Fernet con coca',
          precio: 5100,
          descripcion: "",
          imagen:
            'https://lacoloniawinestore.com.ar/wp-content/uploads/2021/08/PROMO-FERNET-COCA-1.5.png',
        },
        {
          nombre: 'Vodka con speed',
          precio: 5100,
          descripcion: "",
          imagen:
            'https://acdn.mitiendanube.com/stores/001/664/228/products/combo-absolut-regular-4-speed-rayuela-bebidas11-1b5ac400433b601fa416261221897333-640-0.jpg',
        },
        {
          nombre: 'Gaseosas',
          precio: 3100,
          descripcion: "",
          imagen:
            'https://pizzapop.com.gt/wp-content/uploads/2023/02/GASEOSAS.png',
        },]
    }
]
