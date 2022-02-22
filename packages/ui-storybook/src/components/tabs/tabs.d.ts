import PropTypes from 'prop-types';
import { LoanProposal } from '@addi-domains/originations';
import { TabsPropTypes, TabsDefaultValues } from './tabs.prop-types';

export interface TabProps {
    proposal: LoanProposal;
    tabKey: string | number;
    headComponent: (isSelected: boolean) => React.ReactNode;
}

export type TabsProps =  PropTypes.InferProps<typeof TabsPropTypes, typeof TabsDefaultValues>;
