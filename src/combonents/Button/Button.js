import Proptypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(style);
function Button({
    to,
    href,
    primary = false,
    outline = false,
    rounded = false,
    angular = false,
    disabled = false,
    text = false,
    leftIcon,
    rightIcon,
    smail = false,
    large = false,
    children,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    // remove event listener when btn disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        disabled,
        rounded,
        angular,
        text,
        smail,
        large,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: Proptypes.string,
    href: Proptypes.string,
    primary: Proptypes.bool,
    outline: Proptypes.bool,
    rounded: Proptypes.bool,
    angular: Proptypes.bool,
    disabled: Proptypes.bool,
    text: Proptypes.bool,
    leftIcon: Proptypes.node,
    rightIcon: Proptypes.node,
    smail: Proptypes.bool,
    large: Proptypes.bool,
    children: Proptypes.node.isRequired,
    className: Proptypes.string,
    onClick: Proptypes.func,
};

export default Button;
