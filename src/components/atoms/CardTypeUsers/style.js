import styled from 'styled-components/native';
import {COLORS} from '../../../constants';

export const Container = styled.View`
  display: flex;
  border-color: ${({selected}) => (selected ? `${COLORS.green}` : '#fff')};
  border-width: 3px;
  margin-bottom: 6px;
  border-radius: 8px;
  padding-top: 6px;
  padding-bottom: 6px;
`;
