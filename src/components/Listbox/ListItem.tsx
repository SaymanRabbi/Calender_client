
import styles from '@/styles/components/Menu/ListItem.module.scss';
import { OutlineButton } from '../Buttons';
import { ButtonSmall } from '../Typography';

type Props = {
  text: string;
  selected: boolean;
  onClick?: VoidFunction;
  icon?: JSX.Element ;
};

export default function ListItem({ text, selected, onClick, icon }: Props) {
  // eslint-disable-next-line no-console
  console.log(icon)
  return (
    <button
      onClick={onClick}
      className={`${icon && 'flex justify-center !px-0'} ${styles['list-item']} ${selected ? styles['list-item--selected'] : styles['list-item--hover']
        }`}
    >
      {
        icon ? <OutlineButton text={text} icon={icon} /> : <ButtonSmall>{text}</ButtonSmall>
      }

    </button>
  );
}

ListItem.defaultProps = {
  onClick: undefined,
  icon: null
};
