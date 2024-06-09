import classes from './Card.module.scss';
import Image from './Image';

export function Card(props: CardProps): JSX.Element {
  const { imgUrl, title } = props;

  return (
    <div className={classes.container}>
      <Image alt={title} className={classes.image} src={imgUrl} />
      <h3 className={classes.title}>{title}</h3>
    </div>
  );
}

export interface CardProps {
  readonly imgUrl: string;
  readonly title: string;
}
