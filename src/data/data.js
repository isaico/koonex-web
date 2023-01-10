import cielo from '../assets/pictures/cielo.png'
import clear from '../assets/pictures/clear.png'
import pesca from '../assets/pictures/pesca.png'
import submarino from '../assets/pictures/submarino.png'
import buceo1 from '../assets/pictures/buceo-1.png'
import buceo2 from '../assets/pictures/buceo-2.png'
import buceo3 from '../assets/pictures/buceo-3.png'
import parasail from '../assets/pictures/parasail.png'
import boat from '../assets/pictures/boat.png'
import fistDive from '../assets/pictures/fist-dive.png'

export const dataArray = [
    {
        category: 'tours',
        title: 'Tour al Cielo',
        titleEN: 'Tour to El Cielo',
        subtitle: 'Visitaremos 2 arrecifes y las zonas de El Cielo',
        subtitleEN: 'We will visit 2 reefs and the El Cielo areas',
        text: 'El tour es una embarcacion variable, vamos a los arrecifes de Palacar y Colombia',
        textEN: 'The tour is a variable boat, we go to the reefs of Palacar and Colombia.',
        description:
            'El tour es una embarcación con capacidad variable. Vamos a los arrecifes de palancar y Colombia por espacio de una hora en cada lugar con parada a la playa de El Cielo (lugar donde se reproduce las estrellas de mar).',
        descriptionEN:
            'The tour is a boat with variable capacity. We go to the reefs of Palancar and Colombia for one hour in each place with a stop at the sky beach (place where the starfish reproduce).',
        duration: '4/5 horas',
        durationEN: '3.5 to 4 hours',
        included: [
            'Guia certificado',
            'Aguas naturales, run punch, refrescos o cervezas',
            'Frutas',
            'Mucha diversion',
            'EQUIPO SNORKEL!',
        ],
        includedEN: [
            'Certified guide',
            'Natural water, flavored water, soft drink ,or beer',
            'Tons of fun',
            'SNORKE equipment!',
        ],
        schedule: 'Horarios: 10am, 12pm,1pm',
        scheduleEN: 'Schedule: 10am, 12pm,1pm',
        image: cielo, //imagenes de 400px x 400px
        imageDetail: [
            {
                image: 'https://imgur.com/hmLxwBY', //imagenes de 600px x 600px
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
        ],
        id: 'b0444850-4e23-417d-befa-9e699e7e012f',
        featured: true,
    }, //1
    {
        category: 'tours',
        title: 'Buceo desde barco por arrecifes (Buzos certificados)',
        titleEN: '2-tank dive for certified divers ',
        subtitle: 'Buceo de 2 tankes',
        subtitleEN: '2-tank dive',
        text: 'Tenemos un recorrido en la lancha, la lancha nos recoge y vamos a una playa y hacemos intervalos de buceo ',
        textEN: 'We have a tour in the boat, the boat picks us up and we go to a beach and do snorkeling intervals',
        description:
            ' Tenemos un recorrido en la lancha de aprox. 20 /25 min para llegar hasta la zona de buceo. Durante el trayecto se habla acerca de los lugares que vamos a visitar, flora y fauna del lugar. Indicaremos procedimientos del buceo. Llegando al punto de buceo descendemos al arrecife a una profundidad Max de 24 mts y el tiempo de fondo es de una hora (o 700 psi) Luego de esa hora de buceo, la lancha nos recoge y vamos a una playa para hacer una hora de intervalo de superficie en la cual ofrecemos un pequeño refrigerio que consta de fruta, galletas o pan y chocolates. Agua tenemos todo el tiempo y a cualquier momento que se necesite. Luego del intervalo se realiza otro buceo en una parte diferente del arrecife. Luego regresamos ala tienda de donde partimos ',
        descriptionEN:
            'We have a boat ride of approx. 20 /25 min. to get to the diving area. During the trip we talk about the places we are going to visit, flora and fauna of the place. We will indicate diving procedures. Arriving at the diving point we descend to the reef to a depth of 24 meters and the bottom time is one hour (or 700 psi). After that hour of diving, the boat picks us up and we go to a beach for an hour of surface interval in which we offer a small snack consisting of fruit, cookies or bread and chocolates. Water is available all the time and at any time it is needed. After the interval we do another dive in a different part of the reef. Then we return to the tent from where we depart. ',
        duration: '4 horas',
        durationEN: '4 hours',
        included: [
            'Guia certificado',
            'Aguas naturales, run punch, refrescos o cervezas',
            'Frutas',
            'Mucha diversion',
            'EQUIPO SNORKEL!',
        ],
        includedEN: [
            'Certified guide',
            'Natural water, flavored water, soft drink ,or beer',
            'Tons of fun',
            'SNORKE equipment!',
        ],
        schedule: 'Horarios: a disponibilidad',
        scheduleEN: 'Schedule: to availability ',
        image: buceo1, //imagenes de 400px x 400px
        imageDetail: [
            {
                image: 'https://placeimg.com/600/600/arch', //imagenes de 600px x 600px
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
        ],
        id: 'c3e2d898-64b2-49ff-8118-3bd8d537cca9',
        featured: false,
    }, //2
    {
        category: 'tours',
        title: 'Descrubre el buceo (Principiantes)',
        titleEN: 'Discover Scuba diving (Playa 1 tank) ',
        subtitle: 'Para adentrarte en el mundo del buceo',
        subtitleEN: 'To enter the world of scuba diving',
        text: 'Sumergete y descubre la magia submarina que Cozumel tiene para ti.',
        textEN: 'Dive and discover the underwater magic that Cozumel has for you.',
        description:
            'Vive tu primera experiencia de buceo y conoce las maravillas submarinas de Cozumel. No se requiere experiencia previa y es para personas mayores de 10 años de edad.',
        descriptionEN:
            'Dive in and discover the underwater magic that cozumel has for you. You will enter a world full of colors since Cozumel is the favorite place to dive of its natural beauty',
        duration: '1 Hora y 30 minutos',
        durationEN: '1 hour and 30 minutes',
        included: ['Equipo completo de buceo', 'Instructor certificado'],
        includedEN: ['Full diving gear', 'Certified instructor'],
        image: buceo2, //imagenes de 400px x 400px
        imageDetail: [
            {
                image: 'https://placeimg.com/600/600/arch', //imagenes de 600px x 600px
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
        ],
        id: '382363c8-9dd2-4b8e-b01c-c3e4281e3207',
        featured: false,
    }, //3
    {
        category: 'tours',
        title: 'Primera experiencia desde barco',
        titleEN: 'First experience from boat',
        subtitle: 'Buceo desde un barco',
        subtitleEN: 'Boat diving',
        text: 'Explore los hermosos arrecifes de Cozumel.',
        textEN: 'Explore the beautiful reefs of Cozumel.',
        description:
            'Si quieren probar el buceo por primera vez, vivan una experiencia inolvidable descubriendo las profundidades del mar sin tener experiencia previa. Podemos llevarte a bucear en el barco para ver los hermosos arrecifes que Cozumel tiene para ofrecer.',
        descriptionEN:
            'If you want to try scuba diving for the first time, live an unforgettable experience discovering the depths of the sea without previous experience. We can take you diving on the boat to see the beautiful reefs that Cozumel has to offer.',
        duration: '5/6 horas',
        durationEN: '5/6 hours',
        included: [
            'Cafe',
            'Aguas naturales',
            'Frutas',
            'Galletas y chocolates',
            '2 tankes, cinturon y lastre!',
            '(Renta de equipo adicional)',
        ],
        includedEN: [
            'Coffe',
            'Natural water',
            'Cookies and chocolates',
            '2 tanks, belt and ballast',
            '(Rental of additional equipment)',
        ],
        schedule: 'Horarios: a disponibilidad',
        scheduleEN: 'Schedule: to availability ',
        image: boat, //imagenes de 400px x 400px
        imageDetail: [
            {
                image: 'https://placeimg.com/600/600/arch', //imagenes de 600px x 600px
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
        ],
        id: 'c3e2d898-64b2-49ff-8118-3123jdjd92a',
        featured: false,
    }, //4
    {
        category: 'tours',
        title: 'Tour en lancha transparente',
        titleEN: 'Clear boat tour ',
        subtitle:
            'Observa con claridad el océano gracias a nuestra lancha transparente',
        subtitleEN: 'Observe the ocean clearly thanks to our transparent boat',
        text: 'Ven a disfrutar en uno de nuestros mas originales paseos sobre nuestra lancha transparente',
        textEN: 'Come and enjoy one of our most original rides on our transparent boat',
        description:
            'Arrancamos nuestro tour y nos dirigimos hacia el lado norte de la isla Pasamos por el muelle de San miguel donde se encuentra la primer puerta que tuvo Cozumel seguidamente pasaremos por el monumento al buzo y posteriormente conocerán las maravillosas sorpresas que esta isla tiene bajo sus aguas .Barcos hundidos, inmensa variedad de corales y peces tropicales, las cuales podrás admirar y disfrutar desde nuestra embarcación totalmente transparente. Casi al final nos trasladamos hacia unos arrecifes artificiales "lego" en donde podrás hacer snorkel y disfrutar de la maravillosa vida marina',
        descriptionEN:
            'Marvel with our transparent boat! We start our tour and head towards the north side of the island. We pass by the pier of San Miguel where the first door that Cozumel had is located, then we will pass by the monument to the diver and later you will know the wonderful surprises that this island has under its waters. Sunken ships, immense variety of corals and tropical fish, which you will be able to admire and enjoy from our totally transparent boat. Almost at the end we move to some artificial reefs "lego" where you can snorkel and enjoy the wonderful marine life.',
        duration: '1 Hora y 30 minutos',
        durationEN: '1 hour and 30 minutes',
        included: [
            '1 agua embotellada p/persona',
            '1 refresco p/persona',
            '2 cervezas p/persona ',
            'EQUIPO SNORKE!',
        ],
        includedEN: [
            '1 bottled water each person',
            '1 soda per persona',
            '2 beers per person',
            'SNORKE equipment!',
        ],
        schedule: '10 am ,12 pm, 2 pm y 4 pm',
        scheduleEN: '10 am ,12 pm, 2 pm y 4 pm',
        image: clear, //imagenes de 400px x 400px
        imageDetail: [
            {
                image: 'https://placeimg.com/600/600/arch', //imagenes de 600px x 600px
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
        ],
        id: 'b6d416fc-e04e-443c-87a3-492f3e9549dc',
        featured: true,
    }, //5
    {
        category: 'tours',
        title: 'Submarino Atlantico',
        titleEN: 'Atlantis Submarine',
        subtitle: 'Da un paseo en el unico Sumarino turistico de Mexico ',
        subtitleEN: "Take a ride on Mexico's only tourist Sumarino.",
        text: 'Permítenos llevarte en el único submarino turístico de México, el Atlantis XII. Este increíble navío se deslizará suavemente hasta profundidades más allá de los 30 metros',
        textEN: "Let us take you on Mexico's only tourist submarine, the Atlantis XII. This incredible vessel will glide smoothly to depths beyond 100 feet (30 meters).",
        description:
            'Este increíble navío se deslizará suavemente hasta profundidades más allá de los 30 metros manteniéndote a ti  y tu familia en un ambiente presurizado y confortablemente climatizado. Con más de 26 claraboyas y una gran ventana frontal situada en la proa del submarino, todos disfrutarán de las más impresionantes vistas del arrecife de Chankanaab, el segundo más grande del mundo. Tendrás la oportunidad de visitar un misterioso barco hundido, el Felipe Xicoténcatl, a más de 20 metros de profundidad, mientras un miembro de nuestra tripulación le acompaña con una entretenida narración. ',
        descriptionEN:
            'This incredible vessel will gently glide to depths beyond 100 feet keeping you and your family in a pressurized and comfortably air-conditioned environment. With over 26 skylights and a large front window located at the bow of the submarine, everyone will enjoy the most breathtaking views of the Chankanaab reef, the second largest in the world. You will have the opportunity to visit a mysterious sunken ship, the Felipe Xicoténcatl, at more than 20 meters deep, while a member of our crew accompanies you with an entertaining narration.',
        duration: '2 horas',
        durationEN: '2 hours',
        included: [
            'Agua natural, agua de sabor o refresco, cerveza, y fruta de temporada',
            'Pase para subir',
            'EQUIPO SNORKE!',
        ],
        includedEN: [
            'Natural water, flavored water or soft drink, beer and seasonal fruit',
            'Ticket to ride',
            'SNORKE equipment!',
        ],
        image: submarino, //imagenes de 400px x 400px
        imageDetail: [
            {
                image: 'https://placeimg.com/600/600/arch', //imagenes de 600px x 600px
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
        ],
        id: '5d63e72f-c3e5-4a07-8893-4662188d1131',
        featured: false,
    }, //6

    {
        category: 'tours',
        title: 'Pesca Deportiva',
        titleEN: 'sport fishing',
        subtitle: '',
        subtitleEN: '',
        text: 'Si te gusta la pesca llévala a un nivel superior conociendo las maravillosas especies de animales acuáticos ',
        textEN: 'If you like fishing, take it to a higher level by getting to know the marvelous species of aquatic animals. ',
        description:
            'La pesca deportiva es la actividad deportiva relacionada con el ámbito de la pesca. Esta se realiza a nivel personal o en equipo de personas, por ocio o competición. Hay diversas técnicas para realizarla y también existen competencias. En Cozumel se puede pescar todo el año. El precio depende de las hrs que el cliente contrate Solo pueden ir de 1 a 4 pax en la embarcacion persona adicional tiene cargo extra',
        descriptionEN:
            'Sport fishing is the sporting activity related to fishing. It is done by individuals or teams of people, for leisure or competition. There are different techniques to do it and there are also competitions. In Cozumel you can fish all year round.The price depends on the number of hours that the client hires. Only 1 to 4 pax can go on the boat, additional person has extra charge.',
        duration: '4 hrs, 6hrs o 8hrs',
        durationEN: '4 hrs, 6hrs o 8hrs',
        included: [
            'Carnadas, señuelos y permisos',
            'Agua, Cerveza y botanas',
            '6 hrs en adelante light lunch',
        ],
        includedEN: [
            'Bait, lures and permits',
            'Water, beer and snacks',
            '6 hrs onwards light lunch',
        ],
        image: pesca, //imagenes de 400px x 400px
        imageDetail: [
            {
                image: 'https://placeimg.com/600/600/arch', //imagenes de 600px x 600px
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
        ],
        id: 'af6751a0-9e1f-4075-b687-86a6a7b916d6',
        featured: false,
    }, //7

    {
        category: 'tours',
        title: 'Paravelismo',
        titleEN: 'Parasailing',
        subtitle: '',
        subtitleEN: '',
        text: 'Los participantes de la actividad disfrutarán de un vuelo lleno de emoción y adrenalina. Durante el vuelo, los participantes podrán gozar de unas vistas panorámicas privilegiadas en todo momento. ¡La sensación de libertad es inigualable cuando ves que tienes el mar a tus pies!',
        textEN: 'The participants of the activity will enjoy a flight full of excitement and adrenaline. During the flight, participants will be able to enjoy privileged panoramic views at all times. The feeling of freedom is unmatched when you see the sea at your feet!',
        description:
            'Salimos del muelle de el bar carlota Horarios (dependiendo la disponibilidad de la embarcacion).',
        descriptionEN:
            'We leave from the dock of the carlota bar. Schedules (depending on the availability of the boat).',
        duration: '30 minutos',
        durationEN: '30 minutes',
        included: ['Vuelo en paracaidas'],
        includedEN: ['Skydive'],
        image: parasail, //imagenes de 400px x 400px
        imageDetail: [
            {
                image: 'https://placeimg.com/600/600/arch', //imagenes de 600px x 600px
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
        ],
        id: 'af6751a0-9b23-4075-b687-86a6a7b285s0',
        featured: false,
    }, //8

    {
        category: 'tours',
        title: 'Primera inmersión opt-1',
        titleEN: 'First Dive opt-1',
        subtitle: 'Primera inmersión opcion 1',
        subtitleEN: 'First Dive option 1',
        text: 'Esta guía es para la gente que nunca ha buceado en su vida y quiere experimentar algo nuevo! ',
        textEN: 'This guide is for people who have never dived in their life and want to experience something new!',
        description:
            'Esta guía consta de la clase básica y enseñanza acerca del mundo del buceo, luego vamos al mar donde las el agua nos da hasta la cintura para hacer 3 ejercicios básicos,  limpiar el visor,  recuperación del regulador y flotabilidad neutra (ejercicios no obligatorios) y luego continuamos con nuestro buceo por espacio de una hora.',
        descriptionEN:
            'This guide consists of the basic class and teaching about the world of diving, then we go to the sea where the water is up to our waists to do 3 basic exercises, clean the visor, regulator recovery and neutral buoyancy (not mandatory exercises) and then we continue with our dive for an hour.',
        duration: '2 horas aproximadas',
        durationEN: 'Approximately 2 hours',
        included: [
            'Viaje en lancha',
            'Agua mineral',
            'Refrigerio (chocolate, fruta, galleta)',
            'Equipo Snorke!',
        ],
        includedEN: [
            'Boat trip',
            'Mineral Water',
            'Snacks (Chocolate, fresh fruit, cookie)',
            'Snorkel Equipment!',
        ],
        image: fistDive, //imagenes de 400px x 400px
        imageDetail: [
            {
                image: 'https://placeimg.com/600/600/arch', //imagenes de 600px x 600px
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
        ],
        id: 'af6751a0-9e1f-4075-b687-861asd91a1',
        featured: false,
    },
    {
        category: 'tours',
        title: 'Primera inmersión opt-2',
        titleEN: 'First Dive opt-2',
        subtitle: 'Primera inmersión opcion 2',
        subtitleEN: 'First Dive option 2',
        text: 'Esta guía es para la gente que nunca ha buceado en su vida y quiere experimentar algo nuevo! ',
        textEN: 'This guide is for people who have never dived in their life and want to experience something new!',
        description:
            'Esta guía consta de la clase básica y enseñanza acerca del mundo del buceo, luego vamos al mar donde las el agua nos da hasta la cintura para hacer 3 ejercicios básicos,  limpiar el visor,  recuperación del regulador y flotabilidad neutra (ejercicios no obligatorios) y luego continuamos con nuestro buceo por espacio de una hora.',
        descriptionEN:
            'This guide consists of the basic class and teaching about the world of diving, then we go to the sea where the water is up to our waists to do 3 basic exercises, clean the visor, regulator recovery and neutral buoyancy (not mandatory exercises) and then we continue with our dive for an hour.',
        duration: '2 horas aproximadas',
        durationEN: 'Approximately 2 hours',
        included: [
            'Viaje en lancha',
            'Agua mineral',
            'Refrigerio (chocolate, fruta, galleta)',
            'Equipo Snorke!',
        ],
        includedEN: [
            'Boat trip',
            'Mineral Water',
            'Snacks (Chocolate, fresh fruit, cookie)',
            'Snorkel Equipment!',
        ],
        image: fistDive, //imagenes de 400px x 400px
        imageDetail: [
            {
                image: 'https://placeimg.com/600/600/arch', //imagenes de 600px x 600px
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
        ],
        id: '31789978-ad86-41d4-bbbc-dfd84149635a',
        featured: false,
    },

    /* -------------------------------------------------------------------------- */
    /*                                  SERVICES                                  */
    /* -------------------------------------------------------------------------- */

    {
        category: 'services',
        title: 'Renta una Moto',
        titleEN: 'Rent a Motorcycle',
        subtitle: 'Viaja por todo Cozumel libremente',
        subtitleEN: 'Travel around Cozumel freely',
        text: 'Viaja por todo Cozumel libremente',
        textEN: 'Travel around Cozumel freely',
        description:
            'Disfruta de la comodidad de explorar la isla de Cozumel por ti mismo en una Moto!. NO INCLUYE: pago de multas o infracciones y gasolina.*El tanque de combustible deberá ser entregado con la misma cantidad que fue recibido',
        descriptionEN:
            'Enjoy the comfort of exploring the island of Cozumel by yourself on a motorcycle!. NOT INCLUDED: payment of fines or infractions and gasoline *The fuel tank must be delivered with the same amount that was received.',
        duration: 'mínimo 24 horas',
        durationEN: 'at least 24 hours',
        included: [
            'Kilometraje libre',
            'Seguro de responsabilidad civil',
            'Seguro de daños a terceros del 100%',
        ],
        includedEN: [
            'Free miles',
            'Civil liability insurance',
            '100% third party damage insurance',
        ],
        image: 'https://placeimg.com/400/400/arch', //imagenes de 400px x 400px
        imageDetail: [
            {
                image: 'https://placeimg.com/600/600/arch', //imagenes de 600px x 600px
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
        ],
        id: '0add8823-f51e-4934-99e5-8c78b7112201',
        featured: false,
    },
    {
        category: 'services',
        title: 'Renta un Auto',
        titleEN: 'Rent a Car',
        subtitle: 'Viaja por todo Cozumel libremente',
        subtitleEN: 'Travel around Cozumel freely',
        text: 'Viaja por todo Cozumel libremente',
        textEN: 'Travel around Cozumel freely',
        description:
            'Disfruta de la comodidad de explorar la isla de Cozumel por ti mismo en un auto compacto  4 puertas. NO INCLUYE: pago de multas o infracciones y gasolina.*El tanque de combustible deberá ser entregado con la misma cantidad que fue recibido',
        descriptionEN:
            'Enjoy the comfort of exploring the island of Cozumel by yourself in a compact 4-door car. NOT INCLUDED: payment of fines or infractions and gasoline *The fuel tank must be delivered with the same amount as it was received.',
        duration: 'mínimo 24 horas',
        durationEN: 'at least 24 hours',
        included: [
            'Kilometraje libre',
            'Seguro de responsabilidad civil',
            'Seguro de daños a terceros del 100%',
        ],
        includedEN: [
            'Free miles',
            'Civil liability insurance',
            '100% third party damage insurance',
        ],
        image: 'https://placeimg.com/400/400/arch', //imagenes de 400px x 400px
        imageDetail: [
            {
                image: 'https://placeimg.com/600/600/arch', //imagenes de 600px x 600px
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
        ],
        id: '592c4b7e-1bd2-4c79-859a-9d72a3508e26',
        featured: false,
    },
    /* -------------------------------------------------------------------------- */
    /*                                   COURSES                                  */
    /* -------------------------------------------------------------------------- */
    {
        category: 'courses',
        title: 'Aventura avanzada',
        titleEN: 'Advanced Adventure',
        subtitle:
            'Orientado a buzos certificados que quieren avanzar aumentar sus conocimientos y experiencias',
        subtitleEN:
            'Oriented to certified divers who want to advance and increase their knowledge and experience.',
        text: 'Practicarás la navegación, mejorarás tu flotabilidad y obtendrás una certificación que te permitirá bucear a una profundidad máxima de 100 pies/30 m.',
        textEN: 'You will practice navigation, improve your buoyancy and get a certification that allows you to dive to a max. depth of 100 ft/30 m',
        description:
            'Mejore sus habilidades de buceo y amplíe sus conocimientos. Practicará la navegación, mejorará su flotabilidad y obtendrá una certificación que le permitirá bucear a una profundidad máxima de 100 pies/30 m. No hay examen, porque este curso es para divertirse y adquirir experiencia. ¡A 100 pies de profundidad es donde comienza la verdadera aventura!. El curso Padi Advanced Open Water consiste en 5 buceos de entrenamiento y un auto estudio que puede ser completado antes de tu llegada a Cozumel. La teoria sera revisada con tu instructor durante sesiones informativas extendidas. Tu entrenamiento en aguas abiertas incluirá un buceo de navegación obligatorio y un buceo profundo. Las 3 inmersiones de aventura restantes las elegiremos juntos basándonos en tu interés y nivel actual de habilidad/comodidad. Hay mucho donde elegir, pero nuestra recomendación habitual es: inmersión de flotabilidad de máximo rendimiento, inmersión a la deriva y una inmersión nocturna.',
        descriptionEN:
            'Advance your diving skills and expand your knowledge. You will practice navigation, improve your buoyancy and get a certification that allows you to dive to a max. depth of 100 ft/30 m. There is no exam, because this course is all about fun and gaining experience. 100 ft under is where the real adventure begins!. Padi Advanced Open Water course consists of 5 training dives and a self study that can be completed before your arrival to Cozumel. The theory will be reviewed with your instructor during extended briefings. Your open water training will include a mandatory navigation dive and a deep dive. The remaining 3 adventure dives we will choose together based on your interest and current skill/comfort level. There is a lot to choose from, but our usual recommendation is: peak performance buoyancy dive, drift dive and a night dive.',
        duration: '2/3 dias son necesarios',
        durationEN: '2/3 days are needed',
        included: [
            'E-learning del course Aventuras avanzadas',
            'sesión de repaso teórico',
            '3 inmersiones en aguas abiertas desde costa',
            '2 inmersiones en aguas abiertas desde barco y tarifa de certificación',
            'El precio no incluye el alquiler del equipo.',
        ],
        includedEN: [
            'E-learning Advanced adventure',
            'Theory review session',
            '3 open water shore dives',
            '2 open water boat dives and PADI certification fee',
            'Price does not include gear rental.',
        ],
        image: 'https://placeimg.com/400/400/arch', //imagenes de 400px x 400px
        imageDetail: [
            {
                image: 'https://placeimg.com/600/600/arch', //imagenes de 600px x 600px
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
        ],
        id: 'de079720-946c-4610-b26a-e043cfd66c32',
        featured: false,
    },
    {
        category: 'courses',
        title: 'Aguas abiertas',
        titleEN: 'Open water',
        subtitle: 'Curso para obtener certificacion mundial de buceo',
        subtitleEN: 'World diving certification course',
        text: 'Aprende a bucear bajo la supervisión de un instructor PADI altamente cualificado',
        textEN: 'Learn how to dive under the supervision of a highly-trained PADI instructor.',
        description:
            'Padi Open Water Diver es el primer nivel de certificación de buceo y es una licencia reconocida mundialmente para toda la vida. Aprende a bucear bajo la supervisión de un instructor PADI altamente cualificado. Te apoyaremos en cada paso del camino creando un ambiente de aprendizaje seguro y relajado. Obtén la certificación para bucear hasta 60 pies- ¡aquí es donde comienza la aventura!. El curso consta de 3 secciones: teoría del buceo, sesiones de habilidades en aguas confinadas e inmersiones en aguas abiertas. Durante las 5 sesiones en aguas confinadas aprenderás habilidades básicas de buceo que te mantendrán seguro y cómodo en aguas abiertas.',
        descriptionEN:
            'Padi Open Water Diver is the first scuba certification level and is a lifetime worldwide recognized license. Learn how to dive under the supervision of a highly-trained PADI instructor. We will support you every step of the way by creating a safe and relaxed learning environment. Get certified to dive to 60 ft- this is where the adventure begins!. The course consists of 3 sections: dive theory, confined water skill sessions and open water dives. During your 5 confined water sessions you will learn basic diving skills that will keep you safe and comfortable in the open water. ',
        duration: '3 dias se necesitan para completar el curso',
        durationEN: '3 days are needed to complete the course',
        included: [
            'E-learning del curso PADI de Aguas Abiertas',
            'Sesión de repaso teórico',
            '5 sesiones en aguas confinadas',
            '2 inmersiones en aguas abiertas desde costa',
            '2 inmersiones en aguas abiertas desde barco y tarifa de certificación PADI.',
            'El precio no incluye el alquiler del equipo.',
        ],
        includedEN: [
            'PADI Open Water Diver e-learning',
            'Theory review session',
            '5 confined water sessions',
            '2 open water shore dives',
            '2 open water boat dives and PADI certification fee',
            'Price does not include gear rental.',
        ],
        image: 'https://placeimg.com/400/400/arch', //imagenes de 400px x 400px
        imageDetail: [
            {
                image: 'https://placeimg.com/600/600/arch', //imagenes de 600px x 600px
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
        ],
        id: '54de02c5-2560-42dd-9899-0660a8751c43',
        featured: true,
    },

    {
        category: 'courses',
        title: 'Maestro de buceo',
        titleEN: 'Dive master',
        subtitle: 'subtitulo',
        subtitleEN: 'subtitulo',
        text: 'El curso PADI Divemaster te enseña a ser un líder y a hacerte cargo de las actividades de buceo.',
        textEN: 'The PADI Divemaster course teaches you to be a leader and take charge of dive activities.',
        description:
            'Comparte tu pasión por el buceo convirtiéndote en PADI Divemaster. Como divemaster supervisarás actividades de buceo y ayudarás en las clases de buceo. PADI Divemaster es el primer paso en tu carrera profesional de buceo. El curso PADI Divemaster te enseña a ser un líder y a hacerte cargo de las actividades de buceo. A través de sesiones de desarrollo de conocimientos, ejercicios de habilidades acuáticas y talleres, y la evaluación práctica, desarrollarás las habilidades para organizar y dirigir una variedad de actividades de buceo.',
        descriptionEN:
            'Share your passion for scuba diving by becoming a PADI Divemaster. As a divemaster you’ll supervise scuba diving activities and assist with scuba classes. PADI Divemaster is the first step in your professional diving career. The PADI Divemaster course teaches you to be a leader and take charge of dive activities. Through knowledge development sessions, waterskills exercises and workshops, and hands-on practical assessment, you develop the skills to organize and direct a variety of scuba diving activities.',
        duration: 'mínimo 24 horas',
        durationEN: 'at least 24 hours',
        included: [
            'Kilometraje libre',
            'Seguro de responsabilidad civil',
            'Seguro de daños a terceros del 100%',
        ],
        includedEN: [
            'Free miles',
            'Civil liability insurance',
            '100% third party damage insurance',
        ],
        image: 'https://placeimg.com/400/400/arch', //imagenes de 400px x 400px
        imageDetail: [
            {
                image: 'https://placeimg.com/600/600/arch', //imagenes de 600px x 600px
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
        ],
        id: '792f3c72-dcad-439f-aa45-a841af9caf61',
        featured: false,
    },
    {
        category: 'courses',
        title: 'Buceo de rescate',
        titleEN: 'Rescue diver',
        subtitle: '',
        subtitleEN: ' ',
        text: 'Aprenda a pensar como un buceador de rescate para identificar y solucionar problemas menores antes de que se conviertan en problemas graves.',
        textEN: 'Learn how to think like a rescue diver to identify and fix minor issues before they become big problems.',
        description:
            'Cambia tu forma de vivir el buceo durante tu Curso de Rescate Padi. Gana confianza mejorando tus habilidades de autorrescate y aprende a ayudar a otros buceadores. Desafíate a ti mismo para hacer el buceo más seguro para ti, tus compañeros de buceo, familiares y amigos. Aprende a pensar como un buceador de rescate para identificar y solucionar problemas menores antes de que se conviertan en grandes problemas. El estudio en casa será revisado con su instructor para asegurarse de que entiende la teoría antes de tomar su examen final. Las nuevas habilidades se practicarán en aguas abiertas confinadas y luego se aplicarán durante sus inmersiones en el océano para darle plena confianza en la solución de todas las posibles emergencias de buceo - desde pequeños a graves problemas.',
        descriptionEN:
            'Change the way you experience diving during your Padi Rescue Course. Gain confidence by improving your self-rescue skills and learn how to help other divers. Challenge yourself to make diving safer for you, your dive buddies, family members and friends. Learn how to think like a rescue diver to identify and fix minor issues before they become big problems. Home study will be reviewed with your instructor to make sure you understand the theory before you take your final exam. New skills will be practiced in confined open water and then applied during your ocean dives to give you full confidence in solving all possible diving emergencies- from small to serious issues.',
        duration: '3/5 dias necesarios',
        durationEN: '3/5 days are needed',
        included: [
            'E-learning de este curso',
            'Sesión de repaso de la teoría',
            'Sesiones de entrenamiento que cubren 10 ejercicios de rescate (desde la orilla)',
            '2 inmersiones desde barco en aguas abiertas y tarifa de certificación',
            'El precio no incluye el alquiler del equipo.',
        ],
        includedEN: [
            'E-learning of this course',
            'Theory review session',
            'Training sessions covering 10 rescue exercises (from the shore)',
            '2 open water boat dives and PADI certification fee',
            'Price does not include gear rental.',
        ],
        image: 'https://placeimg.com/400/400/arch', //imagenes de 400px x 400px
        imageDetail: [
            {
                image: 'https://placeimg.com/600/600/arch', //imagenes de 600px x 600px
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
        ],
        id: 'e3dcd3a6-3003-476e-8541-e453b06d8657',
        featured: false,
    },
    {
        category: 'courses',
        title: 'Nitrox',
        titleEN: 'Nitrox',
        subtitle: 'subtitulo',
        subtitleEN: 'subtitulo',
        text: 'texto breve',
        textEN: 'texto breve',
        description:
            'texto desriptivo mas largo You can spot strong contrasting elements and sometimes even the whole sections on many websites and apps, including the biggest players in the industry.',
        descriptionEN:
            'texto desriptivo mas largo You can spot strong contrasting elements and sometimes even the whole sections on many websites and apps, including the biggest players in the industry.',
        duration: 'mínimo 24 horas',
        durationEN: 'at least 24 hours',
        included: [
            'Kilometraje libre',
            'Seguro de responsabilidad civil',
            'Seguro de daños a terceros del 100%',
        ],
        includedEN: [
            'Free miles',
            'Civil liability insurance',
            '100% third party damage insurance',
        ],
        image: 'https://placeimg.com/400/400/arch', //imagenes de 400px x 400px
        imageDetail: [
            {
                image: 'https://placeimg.com/600/600/arch', //imagenes de 600px x 600px
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
            {
                image: 'https://placeimg.com/600/600/arch',
                alt: 'some alt desc',
            },
        ],
        id: '7683d327-d10d-43b5-b5a5-2f7de946e901',
        featured: false,
    },
];
