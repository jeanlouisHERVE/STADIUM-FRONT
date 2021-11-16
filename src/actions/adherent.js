// === action types
// SUPERADMIN
export const UPDATE_ADHERENT_FIELD = 'UPDATE_ADHERENT_FIELD';
export const SUBMIT_ADHERENT = 'SUBMIT_ADHERENT';

// ADHERENT
export const UPDATE_DOCUMENT_ADHERENT = 'UPDATE_ADHERENT_FIELD';
export const SUBMIT_DOCUMENT_ADHERENT = 'SUBMIT_DOCUMENT_ADHERENT';

// === action creators super Admin
export const updateAdherentField = (value, name) => ({
  type: UPDATE_ADHERENT_FIELD,
  value: value,
  name: name,
});

export const submitAdherent = () => ({
  type: SUBMIT_ADHERENT,
});

// === actions creators Adherent
export const updateDocumentAdherent = (rulesOfProcedure, medicalCertificate, picture) => ({
  rulesOfProcedure: rulesOfProcedure,
  medicalCertificate: medicalCertificate,
  picture: picture,
});

export const submitDocumentAdherent = () => ({
  type: SUBMIT_DOCUMENT_ADHERENT,
});
