import React from 'react';
import SplitHalf from 'components/SplitHalf';
import Separator from 'components/styled/Separator.js';
import ProductDescription from 'components/ProductDescription';

class TallerContent extends React.Component {

  render () {
    return (
      <div>
        <SplitHalf
          right={
            <ProductDescription 
              title={'Círculo de voces'}
              description={`El canto es un método reconocidamente efectivo para alcanzar estados de meditación.
 Asimismo, la experiencia de canto grupal y más aún cuando los practicantes se disponen de manera circular, permite acceder a sensaciones incomparables de quietud mental, conexión y unidad.
\n
Mientras que culturas orientales y ancestrales conocían con mayor profundidad la influencia positiva del canto y el sonido sobre los centros energéticos, el mundo occidental recién está comenzando a comprender y demostrar mediante estudios científicos, que la práctica de cantar tiene efectos benéficos para el sistema inmunológico, además de mejorar notablemente el estado de ánimo, la voluntad y los bloqueos emocionales de quienes se entregan a este maravilloso arte.
\n
Las prácticas de canto meditativo Hala Ken Music se desarrollan sobre acompañamiento de Shruti box o Swarpety, instrumento originario de la india, que produce una nota o acorde pedal constante, éste, establece un punto de referencia tonal y vibratorio sobre el cual se realizan las vocalizaciones, produciendo, al manifestarse simultáneamente con la vibración de cada voz, un estímulo vibracional particular para cada intervalo armónico en el cuerpo de los asistentes
\n
El resultado al concluir la práctica, una sensación de bienestar y reseteo mental digna de experimentar, un flujo de pensamientos muy leve, o casi nulo y un estado de plena conciencia y presencia que nos permite continuar con nuestra vida cotidiana como si fuéramos un instrumento recién afinado.`}
            />
          }
          left={<div>{'Here must be carrousel'}</div>}
        />
        <Separator />
      </div>
    );
  }
}

export default TallerContent;
