import CarSvg from '../assets/svg/car.svg';
import SpeedSvg from '../assets/svg/speed.svg';
import ForceSvg from '../assets/svg/force.svg';
import PeopleSvg from '../assets/svg/people.svg';
import EnergySvg from '../assets/svg/energy.svg';
import HybridSvg from '../assets/svg/hybrid.svg';
import GasolineSvg from '../assets/svg/gasoline.svg';
import ExchangeSvg from '../assets/svg/exchange.svg';
import AccelerationSvg from '../assets/svg/acceleration.svg';

export function getAccessoryIcon(type: string) {
  switch (type) {
    case 'speed': return SpeedSvg
    case 'turning_diameter': return ForceSvg
    case 'seats': return PeopleSvg 
    case 'electric_motor': return EnergySvg
    case 'hybrid_motor': return HybridSvg 
    case 'gasoline_motor': return GasolineSvg
    case 'exchange': return ExchangeSvg 
    case 'acceleration': return AccelerationSvg 
    default: return CarSvg
  }
}