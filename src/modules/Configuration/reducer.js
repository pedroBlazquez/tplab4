const initialState = {
  siteMap: {
    links: [
      {
        to: 'inicio',
        text: 'inicio'
      },
      {
        to: 'talleres',
        text: 'talleres'
      },
      {
        to: 'eventos',
        text: 'eventos'
      },
      {
        to: 'entradas',
        text: 'entradas'
      },
      {
        to: 'contacto',
        text: 'contacto'
      },
    ]
  }
};

export default function (state = initialState, action = {}) {
  switch(action.type) {
    default:
      return state;
  }
}
