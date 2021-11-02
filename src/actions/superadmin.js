export const FETCH_ASSOCIATIONS = 'FETCH_ASSOCIATIONS';
export const SAVE_ASSOCIATIONS_LIST = 'SAVE_ASSOCIATIONS_LIST';

export const fetchAssociations = () => ({
  type: FETCH_ASSOCIATIONS,
});

export const saveAssociationsList = (associations) => ({
  type: SAVE_ASSOCIATIONS_LIST,
  associations: associations,
});
