import { useState } from 'react';
import Tippy from '@tippyjs/react/headless'; // different import path!

import { Wrapper as OptionMorePoppper } from '../Popper';
import OptionItem from './OptionItem';
import Header from './Header';

import classNames from 'classnames/bind';
import style from './Menu.module.scss';

const cx = classNames.bind(style);
function Menu({ data = {}, children, w }) {
    const [history, setHistory] = useState([{ data }]);
    const current = history[history.length - 1];

    return (
        <div className="wrapper">
            <Tippy
                // visible={true}
                delay={[0, 700]}
                interactive
                appendTo={document.body}
                onHide={() => {
                    setHistory((prev) => prev.slice(0, 1));
                }}
                render={(attrs) => (
                    <div style={{ width: w }} className={cx('option-popper')} tabIndex="-1" {...attrs}>
                        <OptionMorePoppper FadeIn>
                            <div className={cx('container-options')}>
                                {current.title && (
                                    <Header
                                        clickBack={() => {
                                            setHistory((prev) => {
                                                return prev.slice(0, -1);
                                            });
                                        }}
                                    >
                                        {current.title}
                                    </Header>
                                )}
                                {current.data.map((item, index) => {
                                    let propsOptionItem = {
                                        IconElement: item.IconElement,
                                        name: item.name,
                                        [item.type === undefined ? 'nameBold' : 'nameNormal']: true,
                                        [`border${item.border}`]: true,
                                        onClick: item.onClick,
                                    };
                                    if (item.childrenOptions) {
                                        propsOptionItem.onClick = () => {
                                            setHistory([...history, item.childrenOptions]);
                                        };
                                    }
                                    return (
                                        <div className={cx('pd')}>
                                            <OptionItem key={index} {...propsOptionItem} />
                                        </div>
                                    );
                                })}
                            </div>
                        </OptionMorePoppper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default Menu;
