import Figure from 'react-bootstrap/Figure';
import localization from '../assets/logo/localizacion.png'

function Ubicacion() {
  return (
    <Figure className='locali-1'>
      <Figure.Image
        width={900}
        height={900}
        alt="1710x1800"
        src= {localization}
      />
      <Figure.Caption className='loc-1'>
        <h2>
          Nos encontramos ubicados en:
        </h2>
        <h4>Dirección: Av. Libertador Bernanrdo O'higgins #1050</h4>
      </Figure.Caption>
    </Figure>
  );
}

export default Ubicacion;