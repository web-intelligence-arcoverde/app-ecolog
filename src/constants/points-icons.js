import AssociacaoIcon from 'assets/icons/associacao.svg';
import EmpresaIcon from 'assets/icons/empresa.svg';
import PapelIcon from 'assets/icons/papel.svg';
import PlasticoIcon from 'assets/icons/plastico.svg';
import VidroIcon from 'assets/icons/empresa.svg';

const Icons = {
  plastico: PlasticoIcon,
  papel: PapelIcon,
  associacao: AssociacaoIcon,
  empresa: EmpresaIcon,
  vidro: VidroIcon,
  default: EmpresaIcon,
};

const iconsTypes = type => {
  return Icons[type] || Icons['default'];
};

export default iconsTypes;
