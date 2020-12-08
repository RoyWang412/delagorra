import styled from 'styled-components/native';
import { SafeAreaView, StatusBar as StatusBarUI } from 'react-native';
import { color } from 'styled-system';

import { backIcon } from '~/resources';
import { Box, Text, IconButton } from '~/components/ui';
import { Colors } from '~/utils/theme';
import { hitSlopArea } from '~/utils/utils';

export const Container = styled(SafeAreaView)`
  shadow-color: ${Colors.black};
  shadow-offset: 0 4px;
  shadow-opacity: 0.03;
  shadow-radius: 4px;
  elevation: ${6};
`;

export const Content = styled(Box).attrs({
  flexDirection: 'row',
  alignItems: 'center',
  height: 44,
})``;

export const StatusBar = styled(StatusBarUI)`
  ${color}
`;

export const Title = styled(Text).attrs({
  fontSize: 17,
  fontStyle: 'semibold',
  numberOfLines: 1,
  textAlign: 'center',
  flex: 1,
})``;

export const Left = styled(Box).attrs({
  width: 60,
})``;

export const Right = styled(Left).attrs({})``;

export const BackButton = styled(IconButton).attrs({
  source: backIcon,
  hitSlop: hitSlopArea(5),
  pl: 17,
  iconStyle: { width: 12, aspectRatio: 10 / 17, height: undefined },
})``;
