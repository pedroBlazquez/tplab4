import React from 'react';
import { Cabecera } from 'components/styled/Titles.js';
import Article from 'components/styled/Article.js';
import Separator from 'components/styled/Separator.js';

class Home extends React.Component {

  render () {
    return (
      <div>
        <Cabecera>{'Quienes Somos'}</Cabecera>
        <Article>
        <p>Somos una productora dedicada a la creación de propuestas artísticas que apuntan a la integración y participación del público.
          Buscamos mediante nuestras propuestas que las personas descubran y liberen al creador que todos llevamos dentro.
        </p>
        <p>
          El arte es mucho mas que un entretenimiento... es magia, manifestación de la divinidad a nuestro alcance. 
          El sonido, la vibración, el movimiento, las imágenes, producen sensaciones difícilmente explicables con la razón o las palabras. 
        </p>
        <p>
          La creación es el poder divino en nuestras manos; Activarlo y manifestarlo nos expande y embellece el mundo a nuestro alrededor.
        </p>
        <p>
          En HALA KEN creamos sobre estos conceptos, combinando expresiones artísticas y herramientas ancestrales y modernas
          para expandir y armonizar a la humanidad.
        </p>
      </Article>
      <Separator />
        {'Here should be our Social Media'}
      </div>
    );
  }
}

export default Home;