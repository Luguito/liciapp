import React from 'react';
import { Tabs } from './tabs';
import { shallow } from 'enzyme';

const mocktTabs = [{
        key: '1',
        headComponent: () => <div>1</div>,
        contentComponent: <div>content 1</div>
    },{
        key: '2',
        headComponent: () => <div>2</div>,
        contentComponent: <div>content 2</div>
    },{
        key: '3',
        headComponent: () => <div>3</div>,
        contentComponent: <div>content 3</div>
    },
];

describe('Basic', () => {
    it('Should be valid snapshot', () => {
        const comp = shallow(<Tabs />)
        expect(comp).toMatchSnapshot()
    });

    it ('Show correct tabs', () => {
        const tabs = shallow(<Tabs tabs={mocktTabs} onChange={() => {}}/>)

        expect(tabs.find('#tab_1')).toHaveLength(1);
        expect(tabs.find('#tab_2')).toHaveLength(1);
        expect(tabs.find('#tab_3')).toHaveLength(1);
    });

    it ('Show correct tab content', () => {
        const tabs = shallow(<Tabs tabs={mocktTabs} onChange={() => {}}/>)
        tabs.find('#tab_2').simulate('click');
        expect(tabs.text()).toMatch('content 2');
    });
});
