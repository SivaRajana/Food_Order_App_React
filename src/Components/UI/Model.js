import ReactDom from "react-dom";
import { Fragment } from "react/cjs/react.production.min";
import classes from "./Model.module.css";


const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onHideCart}></div>
}

const Overlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
}

const Model = props => {
    const portalTargetNode = document.getElementById("overlays");
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onHideCart={props.onHideCart} />, portalTargetNode)}
            {ReactDom.createPortal(<Overlay>{props.children}</Overlay>, portalTargetNode)}
        </Fragment>
    );

}

export default Model;