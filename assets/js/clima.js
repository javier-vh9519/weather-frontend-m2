const climaCiudades = [
  { ciudad: "Antofagasta", temperatura: 26, estado: "Soleado" },
  { ciudad: "Calama", temperatura: 24, estado: "Despejado" },
  { ciudad: "Tocopilla", temperatura: 22, estado: "Nublado" },
  { ciudad: "Mejillones", temperatura: 23, estado: "Viento" },
  { ciudad: "Taltal", temperatura: 21, estado: "Nublado" },
  { ciudad: "San Pedro de Atacama", temperatura: 28, estado: "Seco" },
  { ciudad: "María Elena", temperatura: 25, estado: "Soleado" },
  { ciudad: "Sierra Gorda", temperatura: 20, estado: "Viento" },
  { ciudad: "Ollagüe", temperatura: 15, estado: "Frío" },
  { ciudad: "Balneario Hornitos", temperatura: 19, estado: "Nublado" },
  { ciudad: "Juan López", temperatura: 27, estado: "Soleado" }
];


const contenidoPronostico = [
{
  ciudad: "Antofagasta",
  temperatura: 26,
  estado: "Soleado",
  semanal: [
    { dia: "Lun", temp: 25, estado: "☀️" },
    { dia: "Mar", temp: 24, estado: "☀️" },
    { dia: "Mié", temp: 22, estado: "⛅" },
    { dia: "Jue", temp: 21, estado: "⛅" },
    { dia: "Vie", temp: 23, estado: "☀️" }
  ]
},
{
  ciudad: "Calama",
  temperatura: 26,
  estado: "Soleado",
  semanal: [
    { dia: "Lun", temp: 25, estado: "☀️" },
    { dia: "Mar", temp: 24, estado: "☀️" },
    { dia: "Mié", temp: 22, estado: "⛅" },
    { dia: "Jue", temp: 21, estado: "⛅" },
    { dia: "Vie", temp: 23, estado: "☀️" }
  ]
},
{
  ciudad: "Tocopilla",
  temperatura: 22,
  estado: "Nublado",
  semanal: [
    { dia: "Lun", temp: 25, estado: "☀️" },
    { dia: "Mar", temp: 24, estado: "☀️" },
    { dia: "Mié", temp: 22, estado: "⛅" },
    { dia: "Jue", temp: 21, estado: "⛅" },
    { dia: "Vie", temp: 23, estado: "☀️" }
  ]
},
{
  ciudad: "Mejillones",
  temperatura: 23,
  estado: "Viento",
  semanal: [
    { dia: "Lun", temp: 25, estado: "☀️" },
    { dia: "Mar", temp: 24, estado: "☀️" },
    { dia: "Mié", temp: 22, estado: "⛅" },
    { dia: "Jue", temp: 21, estado: "⛅" },
    { dia: "Vie", temp: 23, estado: "☀️" }
  ]
},
{
  ciudad: "Taltal",
  temperatura: 26,
  estado: "Soleado",
  semanal: [
    { dia: "Lun", temp: 25, estado: "☀️" },
    { dia: "Mar", temp: 24, estado: "☀️" },
    { dia: "Mié", temp: 22, estado: "⛅" },
    { dia: "Jue", temp: 21, estado: "⛅" },
    { dia: "Vie", temp: 23, estado: "☀️" }
  ]
},
{
  ciudad: "San Pedro de Atacama",
  temperatura: 26,
  estado: "Soleado",
  semanal: [
    { dia: "Lun", temp: 25, estado: "☀️" },
    { dia: "Mar", temp: 24, estado: "☀️" },
    { dia: "Mié", temp: 22, estado: "⛅" },
    { dia: "Jue", temp: 21, estado: "⛅" },
    { dia: "Vie", temp: 23, estado: "☀️" }
  ]
},
{
  ciudad: "María Elena",
  temperatura: 26,
  estado: "Soleado",
  semanal: [
    { dia: "Lun", temp: 25, estado: "☀️" },
    { dia: "Mar", temp: 24, estado: "☀️" },
    { dia: "Mié", temp: 22, estado: "⛅" },
    { dia: "Jue", temp: 21, estado: "⛅" },
    { dia: "Vie", temp: 23, estado: "☀️" }
  ]
},
{
  ciudad: "Sierra Gorda",
  temperatura: 26,
  estado: "Soleado",
  semanal: [
    { dia: "Lun", temp: 25, estado: "☀️" },
    { dia: "Mar", temp: 24, estado: "☀️" },
    { dia: "Mié", temp: 22, estado: "⛅" },
    { dia: "Jue", temp: 21, estado: "⛅" },
    { dia: "Vie", temp: 23, estado: "☀️" }
  ]
},
{
  ciudad: "Ollagüe",
  temperatura: 26,
  estado: "Soleado",
  semanal: [
    { dia: "Lun", temp: 25, estado: "☀️" },
    { dia: "Mar", temp: 24, estado: "☀️" },
    { dia: "Mié", temp: 22, estado: "⛅" },
    { dia: "Jue", temp: 21, estado: "⛅" },
    { dia: "Vie", temp: 23, estado: "☀️" }
  ]
},
{
  ciudad: "Balneario Hornitos",
  temperatura: 19,
  estado: "Nublado",
  semanal: [
    { dia: "Lun", temp: 25, estado: "☀️" },
    { dia: "Mar", temp: 24, estado: "☀️" },
    { dia: "Mié", temp: 22, estado: "⛅" },
    { dia: "Jue", temp: 21, estado: "⛅" },
    { dia: "Vie", temp: 23, estado: "☀️" }
  ]
},
{
  ciudad: "Juan López",
  temperatura: 27,
  estado: "Soleado",
  semanal: [
    { dia: "Lun", temp: 25, estado: "☀️" },
    { dia: "Mar", temp: 24, estado: "☀️" },
    { dia: "Mié", temp: 22, estado: "⛅" },
    { dia: "Jue", temp: 21, estado: "⛅" },
    { dia: "Vie", temp: 23, estado: "☀️" }
  ]
},
];

