export const projects = [
  {
    title: 'In Out: control de entradas y salidas',
    period: 'Abril 2026 – Junio 2026',
    text: 'Hecho para la Hacienda San José, donde las entradas y salidas se anotaban en un cuaderno. Agiliza el trabajo del personal de seguridad.',
    points: [
      'Registro de trabajadores, proveedores y visitantes externos, antes anotado a mano.',
      'API con Node.js, Express y MySQL, organizada en servicios, controladores y repositorios.',
      'Autenticación, panel de administración y exportación de reportes a Excel.',
      'Disponible como aplicación web y de escritorio con Electron.',
    ],
    stack: ['Node.js', 'Express', 'MySQL', 'Bootstrap 5', 'Electron'],
    repo: 'https://github.com/mewi08/in_out',
  },
  {
    title: 'Shoply',
    status: 'En desarrollo',
    text: 'API para gestionar una tienda: productos, lotes, ventas y usuarios.',
    points: [
      'Base de datos con migraciones y datos de prueba usando Knex y MySQL.',
      'Autenticación con JWT, contraseñas cifradas y protección con Helmet y límite de peticiones.',
    ],
    stack: ['Node.js', 'Express 5', 'MySQL', 'Knex', 'JWT'],
    repo: 'https://github.com/mewi08/Shoply',
  },
  {
    title: 'Control automático de nivel de agua',
    text: 'Sistema que mide el nivel de un tanque y abre o cierra una válvula de forma automática.',
    points: [
      'Sensor ultrasónico HC-SR04, servomotor como válvula y pantalla LCD 16x2.',
      'Interruptor de emergencia que cierra la válvula y detiene el llenado.',
      'Simulado en Wokwi y desarrollado con PlatformIO.',
    ],
    stack: ['Arduino Uno', 'C++', 'PlatformIO', 'Wokwi'],
    repo: 'https://github.com/mewi08/iot',
  },
  {
    title: 'PlayGame',
    text: 'Aplicación móvil para consultar una lista de videojuegos mediante una API REST.',
    points: [
      'Aplicación Android desarrollada en Java utilizando Android Studio.',
      'Consumo de una API REST para obtener los videojuegos desde una base de datos MySQL.',
      'Backend desarrollado con Node.js y Express para gestionar los datos.',
      'Implementación de RecyclerView y adaptadores para mostrar los videojuegos.',
    ],
    stack: ['Java', 'Android Studio', 'Node.js', 'Express', 'MySQL'],
    repo: 'https://github.com/mewi08/playgame',
    backendRepo: 'https://github.com/mewi08/ws-playgame',
  },
];
