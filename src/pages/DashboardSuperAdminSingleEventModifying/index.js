import './styles.scss';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { useParams, Redirect } from 'react-router-dom';
import api from '../../utils/axios';
import AsideNavbarSuperAdmin from '../../components/AsideNavbarSuperAdmin';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Field from '../../components/Field';
import FieldDate from '../../components/FieldDate';
import FieldTime from '../../components/FieldTime';


const SuperAdminModifyEvent = () => {
  // Local state for the component
  const [isOpen, setIsOpen] = useState(false);
  const [isModified, setIsModified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [eventData, setEventData] = useState({});

  // Ids that we get in the url
  const { eventId, assoId } = useParams();

  // Toggle is for the navbar
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // At the load of the component we get the event data from its id passing in url
  useEffect(() => {
    api.get(
      // URL
      `/api/v1/backoffice/superadmin/events/${eventId}`,
      // 'https://sym-stadium.herokuapp.com/api/v1/backoffice/superadmin/events',
      // paramètres
    )
      .then((response) => {
        setEventData({
          ...response.data,
          startDate: moment(response.data.startDate).format('DD/MM/YYYY'),
          endDate: moment(response.data.endDate).format('DD/MM/YYYY'),
          schedule: moment(response.data.schedule).format('HH:mm'),
        });

        setIsLoading(false);
        // on veut traiter la réponse en modifiant le state => dispatch une action
        // qui sera traitée par le reducer
        // const actionSuccess = successLogin(response.data.pseudo);
        // store.dispatch(actionSuccess);
      })
      .catch((error) => {
        console.warn(error);
        // TODO mettre en place une nouvelle action (par exemple ERROR_LOGIN),
        // qui serait traitée par le reducer
        // On aurait une case dans le state pour piloter l'affichage d'un
        // message d'erreur sur l'application
      });
  }, []);

  // handleSubmit() => requete axios pour sauvegarder les données
  // de l'event avec ce qui est présent dans eventData
  // When the form is submited, we send a patch request
  // to the api to apply the modification in the database
  const handleEventModifySubmit = (e) => {
    e.preventDefault();

    api.patch(
      // URL
      `/api/v1/backoffice/superadmin/events/${eventId}`,
      {
        name: eventData.name,
        schedule: eventData.schedule,
        place: eventData.place,
        maxParticipants: eventData.maxParticipants,
        startDate: eventData.startDate.replaceAll('/', '-'),
        endDate: eventData.endDate.replaceAll('/', '-'),
      },
    )
      .then((response) => {
        // "Flag" to know if the event has been edited
        setIsModified(true);
        // on veut traiter la réponse en modifiant le state => dispatch une action
        // qui sera traitée par le reducer
        // const actionSuccess = successLogin(response.data.pseudo);
        // store.dispatch(actionSuccess);
      })
      .catch((error) => {
        console.warn(error);
        // TODO mettre en place une nouvelle action (par exemple ERROR_LOGIN),
        // qui serait traitée par le reducer
        // On aurait une case dans le state pour piloter l'affichage d'un
        // message d'erreur sur l'application
      });
  };

  const updateField = (value, identifier) => {
    setEventData({
      ...eventData,
      [identifier]: value,
    });
  };

  // If the event is edited we redirect
  if (isModified) {
    return <Redirect to={`/backoffice/superadmin/associations/${assoId}/event/${eventId}`} />;
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="dashboard-superadmin-event-modify">
        <div className="aside-navbar">
          <AsideNavbarSuperAdmin />
        </div>
        <div className="dashboard-superadmin-event-modify-container">
          <h1>Modifier un événement</h1>
          {!isLoading && (
            <form className="dashboard-superadmin-event-modify-form" onSubmit={handleEventModifySubmit}>
              <Field
                identifier="name"
                placeholder="Coupe de Quidditch"
                label="Nom"
                changeField={(identifier, newValue) => {
                  updateField(newValue, identifier);
                }}
                value={eventData.name}
              />
              <FieldDate
                type="D - M - Y"
                identifier="startDate"
                placeholder="20/08/2021"
                label="Date de début"
                changeField={(identifier, newValue) => {
                  // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
                  updateField(newValue, identifier);
                }}
                value={eventData.startDate}
                // value={eventData.startDate}
              />
              <FieldTime
                type="HH:MM"
                identifier="schedule"
                placeholder="14:00"
                label="Heure de début"
                changeField={(identifier, newValue) => {
                  // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
                  updateField(newValue, identifier);
                }}
                value={eventData.schedule}
              />
              <FieldDate
                type="D - M - Y"
                identifier="endDate"
                placeholder="21/08/2021"
                label="Date de fin"
                changeField={(identifier, newValue) => {
                  // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
                  updateField(newValue, identifier);
                }}
                value={eventData.endDate}
              />
              <Field
                identifier="place"
                placeholder="Scotland"
                label="Emplacement"
                changeField={(identifier, newValue) => {
                  // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
                  updateField(newValue, identifier);
                }}
                value={eventData.place}
              />
              <Field
                identifier="maxParticipants"
                placeholder="92"
                label="Nombre de participants maximum"
                changeField={(identifier, newValue) => {
                  // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
                  updateField(newValue, identifier);
                }}
                value={Number(eventData.maxParticipants)}
              />
              <button className="dashboard-superadmin-event-modify-button" type="submit">Envoyer</button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

// == Export
export default SuperAdminModifyEvent;
