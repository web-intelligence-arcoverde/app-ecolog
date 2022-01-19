import styled from 'styled-components/native';
import {COLORS} from '../../../constants/theme';

export const Title = styled.Text`
  font-size: ${({size}) => (size ? size : '22')}px;
  font-weight: bold;
  color: ${({color}) => (color ? `${COLORS[color]}` : `${COLORS.black}`)};
`;

export const Description = styled.Text`
  font-size: ${({size}) => (size ? size : '16')}px;
  text-align: ${({align}) => (align ? `${align}` : 'center')};
  color: ${({color}) => (color ? `${COLORS[color]}` : `${COLORS.silver}`)};
`;

export const Label = styled.Text`
  font-size: ${({size}) => (size ? size : '14')}px;
  color: ${({color}) => (color ? `${COLORS[color]}` : `${COLORS.black}`)};
  font-weight: ${({weight}) => (weight ? `${weight}` : 'normal')};
`;
