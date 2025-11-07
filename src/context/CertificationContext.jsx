import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CertificationContext = createContext();
const CertificationDispatchContext = createContext();

const certificationReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CERTIFICATIONS':
      return { ...state, certifications: action.payload, loading: false };
    case 'ADD_CERTIFICATION':
      return { ...state, certifications: [...state.certifications, action.payload] };
    case 'UPDATE_CERTIFICATION':
      return {
        ...state,
        certifications: state.certifications.map(cert =>
          cert.id === action.payload.id ? action.payload : cert
        )
      };
    case 'DELETE_CERTIFICATION':
      return {
        ...state,
        certifications: state.certifications.filter(
          cert => cert.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export const CertificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(certificationReducer, {
    certifications: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    const stored = localStorage.getItem('certifications');
    if (stored) {
      dispatch({ type: 'SET_CERTIFICATIONS', payload: JSON.parse(stored) });
    } else {
      dispatch({ type: 'SET_CERTIFICATIONS', payload: [] });
    }
  }, []);

  useEffect(() => {
    if (!state.loading) {
      localStorage.setItem('certifications', JSON.stringify(state.certifications));
    }
  }, [state.certifications, state.loading]);

  return (
    <CertificationContext.Provider value={state}>
      <CertificationDispatchContext.Provider value={dispatch}>
        {children}
      </CertificationDispatchContext.Provider>
    </CertificationContext.Provider>
  );
};

export const useCertificationState = () => useContext(CertificationContext);
export const useCertificationDispatch = () => useContext(CertificationDispatchContext);
