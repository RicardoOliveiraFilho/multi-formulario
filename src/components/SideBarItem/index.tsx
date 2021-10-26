import { Link } from 'react-router-dom';
import { ReactComponent as ProfileIcon } from '../../svgs/profile.svg';
import { ReactComponent as BookIcon } from '../../svgs/book.svg';
import { ReactComponent as MailIcon } from '../../svgs/mail.svg';
import * as Style from './styles';

type SideBarItemProps = {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
}

export function SideBarItem({ title, description, icon, path, active}: SideBarItemProps) {
  return (
    <Style.Container>
      <Link to={path}>
        <Style.Details>
          <Style.Title>{title}</Style.Title>
          <Style.Description>{description}</Style.Description>
        </Style.Details>
        <Style.IconArea active={active}>
          {icon === 'profile' && (
            <ProfileIcon fill="white" width={24} height={24} />
          )}

          {icon === 'book' && (
            <BookIcon fill="white" width={24} height={24} />
          )}

          {icon === 'mail' && (
            <MailIcon fill="white" width={24} height={24} />
          )}
        </Style.IconArea>
        <Style.Point active={active}></Style.Point>
      </Link>
    </Style.Container>
  );
}