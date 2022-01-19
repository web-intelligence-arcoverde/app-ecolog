import styled from 'styled-components/native';
import {COLORS} from '../../../constants';

export const Container = styled.TouchableOpacity`
  height: 120px;
  border-radius: 10px;
  width: 100%;
  background-color: #f6f6f6;
  flex-direction: row;
  border-color: ${COLORS.silver};
  border-width: 1px;
  align-items: center;
  justify-content: space-between;
`;
