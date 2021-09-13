import styled from 'styled-components/native';
import {COLORS} from '../../../constants';

export const StyledContainer = styled.View`
  flex-direction: ${({direction}) => (direction ? direction : 'column')};
  background-color: ${({color}) =>
    color ? `${COLORS[color]}` : 'transparent'};
  justify-content: ${({justify}) => (justify ? justify : 'flex-start')};
  align-items: ${({align}) => (align ? align : 'flex-start')};
  width: ${({width}) => (width ? width : '100')}%;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  flex-direction: column;
  background-color: ${({color}) => (color ? `${COLORS[color]}` : COLORS.white)};
  justify-content: ${({justify}) => (justify ? justify : 'flex-start')};
  align-items: ${({align}) => (align ? align : 'flex-start')};
`;
