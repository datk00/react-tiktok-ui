import classNames from 'classnames/bind';
import styles from './OptionItem.module.scss';

const cx = classNames.bind(styles);

function OptionItem({
    IconElement,
    name,
    nameNormal = true,
    nameBold = false,
    borderTop = false,
    hoverText = false,
    mgLeft = false,
    hoverBackground = false,
    onClick = () => {},
}) {
    const nameClasses = cx('nameOption', {
        nameNormal,
        nameBold,
        hoverBackground,
        mgLeft,
    });
    return (
        <div className={cx('wrapper', { borderTop, hoverText })} onClick={onClick}>
            {IconElement && <IconElement classes={cx('icon')} />}
            <span className={nameClasses}>{name}</span>
        </div>
    );
}

export default OptionItem;
