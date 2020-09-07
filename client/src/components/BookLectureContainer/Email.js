import React from 'react';
import { Email, Item, Span, A} from 'react-html-email';

export default function InlineLink(children) {
    const {formData} = children;
    const {age, firstName, lastName, email, phone, lectureType, notes} = formData;
    console.log(age, firstName, lastName, email, phone, lectureType, notes);
    return (
        <Email title='Fond-page'>
            <Item>
                Hello !
                {/* <A style={{ paddingLeft: 10 }}  href='https://mailtrap.io'>Click me!</A> */}
            </Item>
            <Item>
                {/* {children} */}
            </Item>
        </Email>
    )
};