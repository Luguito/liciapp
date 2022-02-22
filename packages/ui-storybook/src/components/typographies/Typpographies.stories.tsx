import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Header1, Header2, Header3, Title, Subtitle, Caption, Pretitle, Paragraph, Label, Link } from './Typpographies.styled';
import { FontColors } from './Typpographies.types';

storiesOf('General', module)
    .addDecorator(withKnobs)
    .addDecorator(withInfo)
    .add('Header 1', () => {
        const txt = text('Header 1', 'Lorem ipsu lorem ipsu');

        return (
            <div>
                <Header1>{txt}</Header1>
            </div>
        );
    })
    .add('Header 2', () => {
        const txt = text('Header 2', 'Lorem ipsu lorem ipsu');

        return (
            <div>
                <Header2>{txt}</Header2>
            </div>
        );
    })
    .add('Header 3', () => {
        const txt = text('Header 3', 'Lorem ipsu lorem ipsu');

        return (
            <div>
                <Header3>{txt}</Header3>
            </div>
        );
    })
    .add('Title', () => {
        const txt = text('Title', 'Lorem ipsu lorem ipsu');

        return (
            <div>
                <Title>{txt}</Title>
            </div>
        );
    })
    .add('Subtitle', () => {
        const txt = text('Subtitle', 'Lorem ipsu lorem ipsu');

        return (
            <div>
                <Subtitle>{txt}</Subtitle>
            </div>
        );
    })
    .add('Strong Subtitle', () => {
        const txt = text('Strong Subtitle', 'Lorem ipsu lorem ipsu');

        return (
            <div>
                <Subtitle strong>{txt}</Subtitle>
            </div>
        );
    })
    .add('Strong Subtitle', () => {
        const txt = text('Strong Subtitle', 'Lorem ipsu lorem ipsu');

        return (
            <div>
                <Subtitle strong>{txt}</Subtitle>
            </div>
        );
    })
    .add('Caption', () => {
        const txt = text('Caption', 'Lorem ipsu lorem ipsu');

        return (
            <div>
                <Caption>{txt}</Caption>
            </div>
        );
    })
    .add('Strong Caption', () => {
        const txt = text('Strong Caption', 'Lorem ipsu lorem ipsu');

        return (
            <div>
                <Caption strong>{txt}</Caption>
            </div>
        );
    })
    .add('Label', () => {
        const txt = text('Label', 'Lorem ipsu lorem ipsu');

        return (
            <div>
                <Label>{txt}</Label>
            </div>
        );
    })
    .add('Strong Label', () => {
        const txt = text('Strong Label', 'Lorem ipsu lorem ipsu');

        return (
            <div>
                <Label strong>{txt}</Label>
            </div>
        );
    })
    .add('Pre-title', () => {
        const txt = text('Pre-title', 'Lorem ipsu lorem ipsu');

        return (
            <div>
                <Pretitle>{txt}</Pretitle>
            </div>
        );
    })
    .add('Paragraph', () => {
        const txt = text('Paragraph', 'Lorem ipsu lorem ipsu');
        const color = select('Color', {
            'primary': 'primary',
            'secondary': 'secondary',
            'hint': 'hint',
            'error': 'error',
            'success': 'success',
            'action': 'action',
            'overDark': 'overDark',
        }, 'primary');

        return (
            <div>
                <Paragraph
                    small={boolean('Small', false)}
                    strong={boolean('Strong', false)}
                    fontColor={color as FontColors}
                >{txt}</Paragraph>
            </div>
        );
    })
    .add('Link', () => {
        const txt = text('Link', 'Lorem ipsu lorem ipsu');

        return (
            <div>
                <Link href="http://google.com" target="blank">{txt}</Link>
            </div>
        );
    });
