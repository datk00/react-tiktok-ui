import { useState, useRef, useEffect } from 'react';

import HeadlessTippy from '@tippyjs/react/headless'; // different import path!

import { ClearIcon, LoadingIcon, SearchIcon } from '../../../../Icon';
import { Wrapper as SearchPopper } from '../../../../Popper';
import AccountItem from '../../../../AccountItem/AccountItem';

import styles from './Search.module.scss';
import classNames from 'classnames/bind';

import { useDebounce } from '../../../../../hooks';

const cx = classNames.bind(styles);

function Search() {
    const [inputValue, setInputValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [focusInput, setFocusInput] = useState(true);
    const [loading, setLoading] = useState(false);

    const valueDebounced = useDebounce(inputValue, 500);

    useEffect(() => {
        if (!valueDebounced.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
                        valueDebounced,
                    )}&type=less`,
                );
                const data = await response.json();
                setSearchResult(data.data);
                // console.log(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [valueDebounced]);

    const inputRef = useRef();

    console.log(inputValue);

    const handleClear = () => {
        setInputValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleCLickOutside = () => {
        setFocusInput(false);
    };

    return (
        <HeadlessTippy
            visible={focusInput && searchResult.length > 0}
            interactive
            appendTo={document.body}
            render={(attrs) => (
                <div className={cx('search-popper')} tabIndex="-1" {...attrs}>
                    <SearchPopper>
                        <span className={cx('title-search')}>Accounts</span>
                        {searchResult.map((item) => {
                            return <AccountItem key={item.id} data={item} />;
                        })}
                    </SearchPopper>
                </div>
            )}
            onClickOutside={handleCLickOutside}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={inputValue}
                    placeholder="Search"
                    spellCheck={false}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                    onFocus={() => {
                        setFocusInput(true);
                    }}
                />
                {!!inputValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <ClearIcon width="16" height="16" classes={cx('clear-img')} />
                    </button>
                )}
                {loading && <LoadingIcon width="16" height="16" classes={cx('loading')} />}
                <button className={cx('search-btn')}>
                    <SearchIcon classes={cx('search-img')} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
