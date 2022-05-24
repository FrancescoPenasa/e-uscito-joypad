import { Fragment, useState } from "react";

import ListTransition from "../CustomHooks/ListTransition";
import classes from "./EpisodeItem.module.css";

import { ReactComponent as PlusIcon } from "../icons/ICN_Plus.svg";
import EpisodeContent from "./EpisodeContent/EpisodeContent";

const EpisodeItem = (props) => {
  const [active, setActive] = useState(false);
  const activeHandler = () => {
    setActive(!active);
    props.onActive(props.index, active);
    console.log(props);
  };

  // if (props.involved) console.log("ok", props.index);

  return (
    <Fragment>
      <ListTransition className={`${classes.card} ${active && classes.active}`} onClick={activeHandler}>
        <img className={classes.cover} src={props.cover} alt={`cover dell'episodio ${props.numero}`} />
        <div className={classes.textBox}>
          <p className={classes.number}>{props.numero}.</p>
          <p className={classes.title}>{props.titolo}</p>
          <div className={classes.additionalInfo}>
            <p className={classes.releaseDate}>{props.uscita.replaceAll("-", ".")} </p>
            <p>&middot;</p>
            <p className={classes.duration}>{(props.durata / 60).toFixed(0)} min.</p>
          </div>
          <div className={classes.actions}>
            <PlusIcon />
          </div>
        </div>
      </ListTransition>
      {props.involved ? (
        <li className={classes.adding}>
          <EpisodeContent giochi={props.giochi} />
        </li>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default EpisodeItem;
