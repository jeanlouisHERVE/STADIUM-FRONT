import './styles.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import AsideNavbar from '../../components/AsideNavbar';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Field from '../../components/Field';
import FieldDate from '../../components/FieldDate';
import FieldTime from '../../components/FieldTime';

const SuperAdminModifyEvent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [eventData, setEventData] = useState({});

  // const [eventName, setEventName] = useState('');
  // const [eventStartDate, setEventStartDate] = useState('');
  // const [eventEndDate, setEventEndDate] = useState('');
  // const [eventSchedule, setEventSchedule] = useState('');
  // const [eventPlace, setEventPlace] = useState('');
  // const [eventMaxParticipant, setMaxParticipant] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  const { eventId } = useParams();
  useEffect(() => {
    axios.get(
      // URL
      `http://ec2-54-197-70-206.compute-1.amazonaws.com/api/v1/backoffice/superadmin/events/${eventId}`,
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
  console.log(eventData);

  // handleSubmit() => requete axios pour sauvegarder les données
  // de l'event avec ce qui est présent dans eventData
  //
  const handleEventModifySubmit = (e) => {
    e.preventDefault();

    axios.patch(
      // URL
      `http://ec2-54-197-70-206.compute-1.amazonaws.com/api/v1/backoffice/superadmin/events/${eventId}`,
      {
        name: eventData.name,
        schedule: eventData.schedule,
        place: eventData.place,
        maxParticipants: eventData.maxParticipants,
        startDate: eventData.startDate.replaceAll('/', '-'),
        endDate: eventData.endDate.replaceAll('/', '-'),
      },
      // 'https://sym-stadium.herokuapp.com/api/v1/backoffice/superadmin/events',
      // paramètres
    )
      .then((response) => {
        console.log(response.data);
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
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="dashboard-superadmin-adherent-add">
        <div className="aside-navbar">
          <AsideNavbar />
        </div>
        <h1>DashboardSuperAdminEventMODIFY</h1>
        {!isLoading && (
          <form className="dashboard-superadmin-event-add-form" onSubmit={handleEventModifySubmit}>
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
            <button className="dashboard-superadmin-event-button" type="submit">Envoyer</button>
          </form>
        )}
      </div>
    </>
  );
};

// == Export
export default SuperAdminModifyEvent;
