import React from 'react';
import { Cabecera } from 'components/styled/Titles.js';
import EventoContent from 'routes/Eventos/components/EventoContent';

const eArray = [
  {
    title: 'Concierto Multisensorial',
    description: `Una experiencia sensorial a ojos cerrados que integra los mas exóticos paisajes sonoros, instrumentos del mundo en vivo, aromaterapia y degustación de exquisitos manjares gourmet 100% naturales`,
  },
  {
    title: 'SON SAKRÉ - Ritual Tribal',
    description: `Un ritual tribal que integra elementos ancestrales y modernos, en el que el público participa activamente.
Buscamos trascender el sentido occidental de la manifestación artística, en el que el público asiste a "ver" o "escuchar" un espectáculo a modo de mero entretenimiento. Recuperamos así el verdadero sentido del arte, utilizando a consciencia el poder sagrado del sonido, el canto y la danza, con intención de armonización y expansión física, mental y espiritual.
Fusionando sonidos de instrumentos étnicos y música electrónica e integrando diferentes disciplinas como danza, clown y expresión corporal, músicos y performers guian a los asistentes en un viaje mágico de sentidos, una historia participativa en la que volveremos a sentir la unidad de la tribu, bailando y cantando en estado de trance, invocando y proyectando intención expansiva y armonizadora para la humanidad.`,
  }
];

class Talleres extends React.Component {

  render () {
    return (
      <div>
        <Cabecera>{'Nuestros Eventos'}</Cabecera>
        <EventoContent eventos={eArray}/>
      </div>
    );
  }
}

export default Talleres;