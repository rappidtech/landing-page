import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { 
    classPeriod, 
    classPeriodButton, 
    containerCenter 
} from './styles'

interface ToggleButtonExampleProps {
  pricePeriod: string;
  setPricePeriod: (value: string) => void;
}

const ToggleButtonExample: React.FC<ToggleButtonExampleProps> = ({ pricePeriod, setPricePeriod, }) =>  {
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Mensual', value: '1' },
    { name: 'Anual', value: '2' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setRadioValue(newValue);

    const newPricePeriod = newValue === '1' ? 'mensual' : 'anual';
    setPricePeriod(newPricePeriod);
  };

  return (
    <div style={containerCenter}>
        <ButtonGroup style={classPeriod}>
            {radios.map((radio, idx) => (
                <ToggleButton
					style={{
						...classPeriodButton, 
						backgroundColor: radioValue === radio.value ? "#A84AC9" : "#fff",
						color: radioValue === radio.value ? "#fff" : "#000",
						fontWeight: "bold",
					}} 
					key={idx}
					id={`radio-${idx}`}
					type="radio"
					variant={idx % 2 ? 'month' : 'year'}
					name="radio"
					value={radio.value}
					checked={radioValue === radio.value}
					onChange={handleChange}
				>
				{radio.name}
            </ToggleButton>
            ))}
        </ButtonGroup>
    </div>
  );
}

export default ToggleButtonExample;