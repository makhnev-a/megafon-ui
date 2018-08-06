import * as React from 'react';

interface Props {
    href?: string;
    children?: JSX.Element[] | Element[] | JSX.Element | string | Element;
    target?: '_self' | '_blank' | '_parent' | '_top';
    className?: string;
    onClick?(e: React.SyntheticEvent<EventTarget>): void;
}

class Link extends React.Component<Props, {}> {

    static defaultProps = {
        href: '#',
        target: '_blank',
    };

    render() {
        const { target, children, ...rest } = this.props;

        return (
            <a target={target} {...rest}>
                {children}
            </a>
        );
    }

}

export default Link;