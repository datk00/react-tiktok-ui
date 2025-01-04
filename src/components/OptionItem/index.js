import classNames from 'classnames/bind';
import styles from './OptionItem.module.scss';
import images from '../../assets/images';

const cx = classNames.bind(styles);

function OptionItem({ icon, children }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('icon')} src={images[icon]} alt="icon-action"></img>
            <span className={cx('nameOption')}>{children}</span>
        </div>
    );
}

export default OptionItem;
