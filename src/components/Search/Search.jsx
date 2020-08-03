import React, { Component, Fragment } from 'react';
import styles from './Search.module.scss'


export default class Search extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.overlay1 = React.createRef() 
    //     this.overlay2 = React.createRef() 
    //     this.search = React.createRef() 
    //     this.input = React.createRef() 
    // }

    // componentDidMount() {
    //     const overlay1 = document.querySelector('.overlay1');
    //     const overlay2 = document.querySelector('.overlay2');
    //     const search = document.querySelector('.search');
    //     const input = document.querySelector('.input');
    //     debugger
    //     overlay1.addEventListener('click', () => {
    //         search.classList.toggle('active');
    //         if (search.classList.contains('active')) {
    //             setTimeout(() => {
    //                 input.focus();
    //             }, 200)
    //         }
    //     })
    //     search.addEventListener('click', () => {
    //         if (search.classList.contains('active')) {
    //             setTimeout(() => {
    //                 input.focus();
    //             }, 200)
    //         }
    //     })
    //     overlay2.addEventListener('click', (e) => {
    //         input.value = '';
    //         input.focus();
    //         search.classList.remove('searching')
    //     })
    //     document.body.addEventListener('click', (e) => {
    //         if (!search.contains(e.target) && input.value.length === 0) {
    //             search.classList.remove('active');
    //             search.classList.remove('searching');
    //             input.value = '';
    //         }
    //     })
    //     input.addEventListener('keyup', (e) => {
    //         if (e.keyCode === 13) {
    //             input.blur();
    //         }
    //     })
    //     input.addEventListener('input', () => {
    //         if (input.value.length > 0) {
    //             search.classList.add('searching')
    //         } else {
    //             search.classList.remove('searching')
    //         }
    //     })
    //     input.value = '';
    //     input.blur();
    // }

    render() {

        return (
            <div className={styles.input} type="text">

                <input className={styles.input} type="text" />
                <svg viewBox="0 0 700 100" className={styles.magnifyingGlass}>
                    <path
                        className={styles.magnifyingGlassPath}
                        d="m 59.123035,59.123035 c -10.561361,10.56136 -27.684709,10.56136 -38.24607,0 -10.56136,-10.561361 -10.56136,-27.684709 0,-38.24607 10.561361,-10.56136 27.684709,-10.56136 38.24607,0 10.56136,10.561361 10.56136,27.684709 0,38.24607 l 28.876965,28.876965 c 6.304625,7.101523 5.754679,-0.187815 13.07143,-0.5 h 582.04101" />
                    <path
                        className={styles.x}
                        d="m 673.46803,25.714286 -37.17876,38.816532 c 0,0 -5.08857,5.60515 -5.68529,11.841734 -1.06622,11.143538 13.02902,11.127448 13.02902,11.127448" />
                    <path
                        className={styles.x}
                        d="m 635.08021,25.714286 37.17876,38.816532 c 0,0 5.08857,5.60515 5.68529,11.841734 1.06622,11.143538 -13.02902,11.127448 -13.02902,11.127448" />
                </svg>
                <div className={styles.overlay1}></div>
                <div className={styles.overlay2}></div>
            </div>
        );
    }
}



