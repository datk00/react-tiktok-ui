import styles from './Popper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Wrapper({ appearFadeIn = false, children }) {
    const classes = cx('wrapper', {
        appearFadeIn,
    });
    return <div className={classes}>{children}</div>;
}

export default Wrapper;
