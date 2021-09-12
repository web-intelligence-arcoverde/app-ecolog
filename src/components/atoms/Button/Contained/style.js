import styled from 'styled-components/native';
import {COLORS} from '../../../../constants/theme';

export const Button = styled.TouchableOpacity`
  width: 100%;
  margin-top: 30px;
  height: 56px;
  background-color: ${COLORS.green};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: ${COLORS.white};
`;
