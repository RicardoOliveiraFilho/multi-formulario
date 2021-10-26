import * as Style from './styles';

type SelectOptionProps = {
  title: string;
  description: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
}

export function SelectOption({ title, description, icon, selected, onClick }: SelectOptionProps) {
  return (
    <Style.Container selected={selected} onClick={onClick}>
      <Style.Icon>{icon}</Style.Icon>
      <Style.Details>
        <Style.Title>{title}</Style.Title>
        <Style.Description>{description}</Style.Description>
      </Style.Details>
    </Style.Container>
  );
}