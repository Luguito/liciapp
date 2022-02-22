import React, { useState, useEffect, FunctionComponent, ReactElement, memo } from 'react';
import { TabsProps, TabProps } from './tabs.d';
import {
    TabHeader,
    LineSelector,
    TabsContainer,
    MenuContainer,
    ContentContainer
} from './tabs.styled';
import { TabsDefaultValues, TabsPropTypes } from './tabs.prop-types';

export const Tab: FunctionComponent<TabProps> = () => <div></div>;

const TabsComponent: FunctionComponent<TabsProps> = ({ onChange, children, defaultSelected }) => {
    const tabs = React.Children.toArray(children);
    const [selectedKey, setSelectedKey] = useState<number>(0);

    useEffect(() => {
        defaultSelected && setSelectedKey(defaultSelected);
    }, [defaultSelected]);

    // Call onChange
    useEffect(() => {
        tabs.length
        && onChange
        && onChange(tabs[selectedKey].props);
    }, [selectedKey]);

    return (
        <TabsContainer>
            <MenuContainer>
                {!!tabs.length && tabs.map((tab: ReactElement, indexKey: number) => {
                    const isSelected: boolean = indexKey === selectedKey;

                    return (
                        <TabHeader
                            key={`tab_${indexKey}`}
                            id={`tab_${indexKey}`}
                            isSelected={indexKey === selectedKey}
                            onClick={() => setSelectedKey(indexKey)}
                        >
                            {tab.props.headComponent(isSelected)}
                            <LineSelector isSelected={isSelected} index={selectedKey}/>

                        </TabHeader>
                        );
                    })
                }
            </MenuContainer>
            <ContentContainer index={selectedKey}>
                {!!tabs.length && tabs[selectedKey].props.children}
            </ContentContainer>
        </TabsContainer>
    );
};

TabsComponent.propTypes = TabsPropTypes;
TabsComponent.defaultProps = TabsDefaultValues;

export const Tabs = memo(TabsComponent);
