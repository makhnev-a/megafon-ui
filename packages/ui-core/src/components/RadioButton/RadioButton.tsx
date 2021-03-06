import * as React from 'react';
import * as PropTypes from 'prop-types';
import './RadioButton.less';
import cnCreate from 'utils/cnCreate';

export interface IRadioButtonProps {
    /** Radio button value */
    value: string;
    /** Radio button name */
    name?: string;
    /** Size of radio button label */
    textSize?: 'small' | 'medium';
    /** Disabled state of radio button */
    isDisabled?: boolean;
    /** Checked state of radio button */
    isChecked?: boolean;
    /** Custom class name */
    className?: string;
    children?: React.ReactNode;
    /** OnChange handler */
    onChange?: (value: string) => void;
}

const cn = cnCreate('mfui-beta-radio-button');
class RadioButton extends React.Component<IRadioButtonProps> {
    static propTypes = {
        value: PropTypes.string.isRequired,
        name: PropTypes.string,
        textSize: PropTypes.oneOf(['small', 'medium']),
        isDisabled: PropTypes.bool,
        isChecked: PropTypes.bool,
        className: PropTypes.string,
        children: PropTypes.node,
        onChange: PropTypes.func,
    };

    static defaultProps: Partial<IRadioButtonProps> = {
        textSize: 'medium',
        isDisabled: false,
    };

    handleChange = () => {
        const { onChange, value } = this.props;

        onChange && onChange(value);
    }

    render() {
        const { isChecked, isDisabled, name, value, textSize, children } = this.props;
        const checkedProp = isChecked !== undefined ? { checked: isChecked } : {};

        return (
            <div className={cn()}>
                <label
                    className={cn('label', {
                        disabled: isDisabled,
                    })}
                >
                    <input
                        {...checkedProp}
                        className={cn('input')}
                        type="radio"
                        name={name}
                        value={value}
                        onChange={this.handleChange}
                        disabled={isDisabled}
                    />
                    <div className={cn('custom-input')} />
                    {children && <div className={cn('text', { 'size': textSize })}>{children}</div>}
                </label>
            </div>
        );
    }
}

export default RadioButton;
