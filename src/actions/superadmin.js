export const FETCH_ASSOCIATIONS = 'FETCH_ASSOCIATIONS';
export const SAVE_ASSOCIATIONS = 'SAVE_ASSOCIATIONS';

export const fetchAssociations = () => ({
  type: FETCH_ASSOCIATIONS,
});

export const saveAssociations = (associations) => ({
  type: SAVE_ASSOCIATIONS,
  associations: associations,
});
