import React from 'react';
// import classes from '*.module.css';
import styles from '../../../components/Nav/Nav.module.scss'

export default class Toggle extends React.Component {
    state = {
        on: false,
    };

    Toggle = () => {
        this.setState({
            on: !this.state.on
        });
    };

    render() {
        const {render} = this.props;
        return (
            <div className={styles.toggleWrap}>
                {render({
                    on: this.state.on,
                    Toggle: this.Toggle
                })}
            </div>
        );
    }
}
