import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm, FormActions } from '../../contexts/FormContext';
import * as Style from './styles';
import { Template } from '../../components/Template';
import { SelectOption } from '../../components/SelectOption';

export function FormStep2() {
  const history = useHistory();
  const { state, dispatch } = useForm();

  function setNivel(nivel: number) {
    dispatch({
      type: FormActions.setNivel,
      payload: nivel,
    });
  }

  function handleNextStep() {
    if (state.nome !== '') {
      history.push('/passo3');
    } else {
      toast.warning('O Nome deve estar preenchido!', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  useEffect(() => {
    if (state.nome === '') {
      toast.warning('Primeiramente informe o seu Nome no Passo 1 do Formulário!', {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      
      history.push('/');
    } else {
      dispatch({
        type: FormActions.setPassoAtual,
        payload: 2
      });
    }
  }, [dispatch, history, state.nome]);

  return (
    <Template>
      <Style.Container>
        <p>Passo {state.passoAtual}/3</p>
        <h1>{state.nome}, o quê melhor descreve você?</h1>
        <p>Escolha a opção que melhor condiz com o seu estado atual, profissionalmente!</p>
        <hr />
        
        <SelectOption
          title="Sou Iniciante!"
          description="Comecei a programar há menos de 2 anos!"
          icon="🥳"
          selected={state.nivel === 0}
          onClick={() => setNivel(0)}
        />
        <SelectOption
          title="Sou Programador!"
          description="Já programo há 2 anos ou mais!"
          icon="😎"
          selected={state.nivel === 1}
          onClick={() => setNivel(1)}
        />

        <Link className="backButton" to="/">Voltar</Link>
        <button onClick={handleNextStep}>Próximo</button>
      </Style.Container>
    </Template>
  );
}