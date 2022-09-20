import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import * as searchServices from '~/services/searchService';
import { Wrapper as PopperWrapper } from '~/combonents/Popper';
import AccountItem from '~/combonents/AccountItem';
import styles from './Search.module.scss';
import { useDebounce } from '~/combonents/hooks';
const cx = classNames.bind(styles);
function Search() {
    const [searchResult, setsearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState();
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const debounceValue = useDebounce(searchValue, 500);
    useEffect(() => {
        if (!debounceValue) {
            setsearchResult([]);
            return;
        }

        const fetchApI = async () => {
            setLoading(true);
            const result = await searchServices.search(debounceValue);
            setsearchResult(result);
            setLoading(false);
        };
        fetchApI();
    }, [debounceValue]);
    const inputRef = useRef();
    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleOnchange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    return (
        // Using a wrapper <div> or tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div
                        className={cx('Search-result')}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Account</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Tìm kiếm tài khoảng và video"
                        spellCheck={false}
                        onChange={handleOnchange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button
                            className={cx('clear')}
                            onClick={() => {
                                setSearchValue('');
                                setsearchResult([]);
                                inputRef.current.focus();
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && (
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />
                    )}
                    <button
                        className={cx('search-btn')}
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
