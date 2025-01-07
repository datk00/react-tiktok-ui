import classNames from 'classnames/bind';
import styles from './OptionItem.module.scss';
import images from '../../../assets/images';

const cx = classNames.bind(styles);

function OptionItem({ icon, name, nameNormal = true, nameBold = false, borderTop = false, onClick = () => {} }) {
    const nameClasses = cx('nameOption', {
        nameNormal,
        nameBold,
    });
    return (
        <div className={cx('wrapper', { borderTop })} onClick={onClick}>
            {icon && <img className={cx('icon')} src={images[icon]} alt="icon-action"></img>}
            <span className={nameClasses}>{name}</span>
        </div>
    );
}

export default OptionItem;
