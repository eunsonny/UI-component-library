import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from '../components/Select';
import Option from '../components/Option';
import OptionList from '../components/OptionList';

describe('Select Component', () => {
	it('커스텀 placeholder가 없고, 선택된 옵션 값이 없을 경우 => 기본 placeholder인 "선택"이 노출된다.', () => {
		render(
			<Select selectedOption={undefined}>
				<OptionList>
					<Option data={{ label: '하나', value: 1 }} />
					<Option data={{ label: '둘', value: 2 }} />
					<Option data={{ label: '셋', value: 3 }} />
				</OptionList>
			</Select>
		);

		const select = screen.getByRole('selectButton');
		expect(select).toHaveTextContent('선택');
	});

	it('커스텀 placeholder가 있고, 선택된 옵션 값이 없을 경우 => 지정된 placeholder가 노출된다.', () => {
		render(
			<Select selectedOption={undefined} placeholder={'값을 선택해 주세요.'}>
				<OptionList>
					<Option data={{ label: '하나', value: 1 }} />
					<Option data={{ label: '둘', value: 2 }} />
					<Option data={{ label: '셋', value: 3 }} />
				</OptionList>
			</Select>
		);

		const select = screen.getByRole('selectButton');
		expect(select).toHaveTextContent('값을 선택해 주세요.');
	});

	it('defaultOption 값이 있을 경우, 커스텀 placeholder가 있어도 defaultOption의 값을 노출한다.', () => {
		render(
			<Select
				selectedOption={undefined}
				defaultOption={{ label: '하나', value: 1 }}
				placeholder={'값을 선택해 주세요.'}
			>
				<OptionList>
					<Option data={{ label: '하나', value: 1 }} />
					<Option data={{ label: '둘', value: 2 }} />
					<Option data={{ label: '셋', value: 3 }} />
				</OptionList>
			</Select>
		);

		const select = screen.getByRole('selectButton');
		expect(select).toHaveTextContent('하나');
	});

	it('선택된 옵션 값이 있을 경우, 해당 값을 노출한다.', () => {
		render(
			<Select
				selectedOption={{ label: '셋', value: 3 }}
				defaultOption={{ label: '하나', value: 1 }}
			>
				<OptionList>
					<Option data={{ label: '하나', value: 1 }} />
					<Option data={{ label: '둘', value: 2 }} />
					<Option data={{ label: '셋', value: 3 }} />
				</OptionList>
			</Select>
		);

		const select = screen.getByRole('selectButton');
		expect(select).toHaveTextContent('셋');
	});

	it('선택된 옵션 값이 있을 경우, 해당 값을 노출한다.', () => {
		render(
			<Select
				selectedOption={{ label: '셋', value: 3 }}
				defaultOption={{ label: '하나', value: 1 }}
			>
				<OptionList>
					<Option data={{ label: '하나', value: 1 }} />
					<Option data={{ label: '둘', value: 2 }} />
					<Option data={{ label: '셋', value: 3 }} />
				</OptionList>
			</Select>
		);

		const select = screen.getByRole('selectButton');
		expect(select).toHaveTextContent('셋');
	});

	it('선택된 옵션 값이 있을 경우, 해당 값을 노출한다.', async () => {
		const user = userEvent.setup();
		render(
			<Select
				selectedOption={undefined}
				// defaultOption={{ label: '하나', value: 1 }}
				placeholder={'값을 선택해 주세요.'}
			>
				<OptionList>
					<Option data={{ label: '하나', value: 1 }} />
					<Option data={{ label: '둘', value: 2 }} />
					<Option data={{ label: '셋', value: 3 }} />
				</OptionList>
			</Select>
		);

		const select = screen.getByRole('selectButton')
		await user.click(select);

		const options = screen.getAllByTestId('selectOption')
		expect(options[0]).toHaveTextContent('하나');
		// expect(Number(options.length)).toHaveLength(3)
		console.log(options.length)
	});
});
