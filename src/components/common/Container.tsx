import styles from "./Container.module.scss";
import cx from "classnames";
const Container = (props: any) => {
    return (
        <>
            <div className={cx([styles.container, props.className])}>
                {props.children}
            </div>
        </>
    );
}

export default Container;
