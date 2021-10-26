import { ReactNode } from 'react';
import * as Style from './styles';
import { useForm } from '../../contexts/FormContext';
import { Header } from '../Header';
import { SideBarItem } from '../SideBarItem';

type TemplateProps = {
  children: ReactNode;
}

export function Template({ children }: TemplateProps) {
  const { state } = useForm();

  return (
    <Style.Container>
      <Style.Content>
        <Header />

        <Style.Main>
          <Style.SideBarArea>
            <SideBarItem
              title="Pessoal"
              description="Se Identifique!"
              icon="profile"
              path="/"
              active={state.passoAtual === 1}
            />

            <SideBarItem
              title="Profissional"
              description="Informe seu Nível!"
              icon="book"
              path="/passo2"
              active={state.passoAtual === 2}
            />

            <SideBarItem
              title="Contato"
              description="Como te achar!"
              icon="mail"
              path="/passo3"
              active={state.passoAtual === 3}
            />
          </Style.SideBarArea>
          <Style.PageStepArea>
            {children}
          </Style.PageStepArea>
        </Style.Main>
      </Style.Content>
    </Style.Container>
  );
}