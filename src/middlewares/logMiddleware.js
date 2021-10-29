// middleware (redux) : il est placé en entrée du store, il voit passer toutes les
// actions avant qu'elles arrivent au store. C'est comme ça qu'on utilise une API
// dans un store Redux.
// Il réagit à certaines actions, par exemple en envoyant une requête vers une API

// on veut logguer chaque action qui passe
/* triple fléchée : on a trois informations disponibles :
- le store
- next : fonction qui permettra de passer l'action "au suivant"
- action : l'action qui arrive au store, avant d'arriver au store
*/
const logMiddleware = (store) => (next) => (action) => {
  // console.log('logMiddleware', action);

  // on transmet l'action au suivant : le middleware suivant, ou le reducer
  next(action);
};

export default logMiddleware;
