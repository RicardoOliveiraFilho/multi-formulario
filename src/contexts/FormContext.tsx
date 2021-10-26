import { createContext, ReactNode, useContext, useReducer } from 'react';

type StateType = {
  passoAtual: number;
  nome: string;
  nivel: 0 | 1;
  email: string;
  github: string;
}

type ActionType = {
  type: FormActions;
  payload: any;
}

type ContextType = {
  state: StateType;
  dispatch: (action: ActionType) => void;
}

type FormProviderProps = {
  children: ReactNode;
}

const dadosIniciais: StateType = {
  passoAtual: 0,
  nome: '',
  nivel: 0,
  email: '',
  github: ''
}

const FormContext = createContext<ContextType | undefined>(undefined);

export enum FormActions {
  setPassoAtual,
  setNome,
  setNivel,
  setEmail,
  setUrlGithub
}

function formReducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case FormActions.setPassoAtual:
      return { ...state, passoAtual: action.payload };
    case FormActions.setNome:
      return { ...state, nome: action.payload };
    case FormActions.setNivel:
      return { ...state, nivel: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setUrlGithub:
      return { ...state, github: action.payload };
    default:
      return state;
  }
}

export function FormProvider({ children }: FormProviderProps) {
  const [state, dispatch] = useReducer(formReducer, dadosIniciais);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error('useForm deve ser usado apenas dentro do escopo do FormProvider');
  }

  return context;
}