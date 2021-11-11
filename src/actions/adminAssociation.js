export const GET_ASSOCIATION_INFORMATIONS = 'GET_ASSOCIATION_INFORMATIONS';
export const SAVE_ASSOCIATION = 'SAVE_ASSOCIATION';

export const getAssociationInformations = () => ({
  type: GET_ASSOCIATION_INFORMATIONS,
});

export const saveAssociations = (associations) => ({
  type: SAVE_ASSOCIATION,
  associations: associations,
});
