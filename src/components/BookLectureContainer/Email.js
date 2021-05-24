/* eslint-disable no-unused-vars */
import React from 'react';
import { Email, Item, Span } from 'react-html-email';

export default function InlineLink(children) {
  const { formData } = children;
  const {
    age,
    firstName,
    lastName,
    email,
    phone,
    lectureType,
    notes,
  } = formData;
  return (
    <Email title="Fond-page">
      <Item>Hello !</Item>
      <Item>
        <Span>Client first name: {firstName}</Span>
      </Item>
    </Email>
  );
}
