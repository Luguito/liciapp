import React, { useState, useEffect, memo } from 'react';
import { TabHeader, LineSelector, TabsContainer, MenuContainer, ContentContainer } from './tabs.styled';
import { TabsDefaultValues, TabsPropTypes } from './tabs.prop-types';
export const Tab = () => React.createElement("div", null);
const TabsComponent = ({ onChange, children, defaultSelected }) => {
    const tabs = React.Children.toArray(children);
    const [selectedKey, setSelectedKey] = useState(0);
    useEffect(() => {
        defaultSelected && setSelectedKey(defaultSelected);
    }, [defaultSelected]);
    // Call onChange
    useEffect(() => {
        tabs.length
            && onChange
            && onChange(tabs[selectedKey].props);
    }, [selectedKey]);
    return (React.createElement(TabsContainer, null,
        React.createElement(MenuContainer, null, !!tabs.length && tabs.map((tab, indexKey) => {
            const isSelected = indexKey === selectedKey;
            return (React.createElement(TabHeader, { key: `tab_${indexKey}`, id: `tab_${indexKey}`, isSelected: indexKey === selectedKey, onClick: () => setSelectedKey(indexKey) },
                tab.props.headComponent(isSelected),
                React.createElement(LineSelector, { isSelected: isSelected, index: selectedKey })));
        })),
        React.createElement(ContentContainer, { index: selectedKey }, !!tabs.length && tabs[selectedKey].props.children)));
};
TabsComponent.propTypes = TabsPropTypes;
TabsComponent.defaultProps = TabsDefaultValues;
export const Tabs = memo(TabsComponent);
//# sourceMappingURL=tabs.js.map