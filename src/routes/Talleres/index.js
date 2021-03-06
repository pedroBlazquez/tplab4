import React from 'react';
import { Cabecera } from 'components/styled/Titles.js';
import TallerContent from 'routes/Talleres/components/TallerContent';

const tArray = [
  {
    title: 'Círculo de voces',
    description: `El canto es un método reconocidamente efectivo para alcanzar estados de meditación.
 Asimismo, la experiencia de canto grupal y más aún cuando los practicantes se disponen de manera circular, permite acceder a sensaciones incomparables de quietud mental, conexión y unidad.

Mientras que culturas orientales y ancestrales conocían con mayor profundidad la influencia positiva del canto y el sonido sobre los centros energéticos, el mundo occidental recién está comenzando a comprender y demostrar mediante estudios científicos, que la práctica de cantar tiene efectos benéficos para el sistema inmunológico, además de mejorar notablemente el estado de ánimo, la voluntad y los bloqueos emocionales de quienes se entregan a este maravilloso arte.

Las prácticas de canto meditativo Hala Ken Music se desarrollan sobre acompañamiento de Shruti box o Swarpety, instrumento originario de la india, que produce una nota o acorde pedal constante, éste, establece un punto de referencia tonal y vibratorio sobre el cual se realizan las vocalizaciones, produciendo, al manifestarse simultáneamente con la vibración de cada voz, un estímulo vibracional particular para cada intervalo armónico en el cuerpo de los asistentes

El resultado al concluir la práctica, una sensación de bienestar y reseteo mental digna de experimentar, un flujo de pensamientos muy leve, o casi nulo y un estado de plena conciencia y presencia que nos permite continuar con nuestra vida cotidiana como si fuéramos un instrumento recién afinado.`,
  },
  {
    title: 'Otro taller',
    description: `El canto es un método reconocidamente efectivo para alcanzar estados de meditación.
 Asimismo, la experiencia de canto grupal y más aún cuando los practicantes se disponen de manera circular, permite acceder a sensaciones incomparables de quietud mental, conexión y unidad.

Mientras que culturas orientales y ancestrales conocían con mayor profundidad la influencia positiva del canto y el sonido sobre los centros energéticos, el mundo occidental recién está comenzando a comprender y demostrar mediante estudios científicos, que la práctica de cantar tiene efectos benéficos para el sistema inmunológico, además de mejorar notablemente el estado de ánimo, la voluntad y los bloqueos emocionales de quienes se entregan a este maravilloso arte.

Las prácticas de canto meditativo Hala Ken Music se desarrollan sobre acompañamiento de Shruti box o Swarpety, instrumento originario de la india, que produce una nota o acorde pedal constante, éste, establece un punto de referencia tonal y vibratorio sobre el cual se realizan las vocalizaciones, produciendo, al manifestarse simultáneamente con la vibración de cada voz, un estímulo vibracional particular para cada intervalo armónico en el cuerpo de los asistentes

El resultado al concluir la práctica, una sensación de bienestar y reseteo mental digna de experimentar, un flujo de pensamientos muy leve, o casi nulo y un estado de plena conciencia y presencia que nos permite continuar con nuestra vida cotidiana como si fuéramos un instrumento recién afinado.`,
  }
];

class Talleres extends React.Component {

  render () {
    return (
      <div>
        <Cabecera>{'Nuestros talleres'}</Cabecera>
        <TallerContent talleres={tArray}/>
      </div>
    );
  }
}

export default Talleres;