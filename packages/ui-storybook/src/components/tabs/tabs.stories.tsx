import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Tabs, Tab } from './tabs';
import { TabsStory } from './tabs.styled';

storiesOf('Visualization', module)
    .addDecorator(withKnobs)
    .addDecorator(withInfo)
    .add('Tab Basic', () => {
        const callback = action('Tab selected => ');

        const tabs: any= [{
                key: 1,
                headComponent: () => 1,
                contentComponent: <div>'content 1'</div>
            },{
                key: 2,
                headComponent: () => 2,
                contentComponent: <div>'content 2'</div>
            },{
                key: 3,
                headComponent: () => 3,
                contentComponent: <div>'content 3'</div>
            },
        ];

        return (
            <TabsStory>
                <Tabs onChange={callback} defaultSelected={2}>
                    {tabs.map((tab: any) =>
                        <Tab proposal={tab.proposal} key={tab.key} tabKey={tab.key} headComponent={tab.headComponent}>
                            {tab.contentComponent}
                        </Tab>)
                    }
                </Tabs>
            </TabsStory>
        );
    }, {
        info: 'Tabs basic component'
    });
