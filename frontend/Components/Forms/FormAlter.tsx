import React, { ChangeEvent, FormEvent } from 'react'
import { Spinner } from '../Common';
import FloatingInput from './FloatingInput';

interface inputConfigs{
  labelId: string;
	type: string;
	onChange: (e:ChangeEvent<HTMLInputElement>) => void;
	value: string;
	label: string;
	required?: boolean;
}
interface Props {
	inputs: inputConfigs[];
	isLoading: boolean;
	btnText: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
const FormWithFloatingInputs = ({
	inputs,
	isLoading,
	btnText,
	onChange,
	onSubmit,
}: Props) => {

  return (
    <form className='space-y-6' onSubmit={onSubmit}>
			{inputs.map(input => (
				<FloatingInput
					key={input.labelId}
					labelId={input.labelId}
					type={input.type}
					onChange={(e:ChangeEvent<HTMLInputElement>)=>onChange(e)}
					value={input.value}
					required={input.required}
          label={input.label}
  			/>

			))}

			<div>
				<button
					type='submit'
					className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
					disabled={isLoading}
				>
					{isLoading ? <Spinner sm /> : `${btnText}`}
				</button>
			</div>
		</form>
  )
}

export default FormWithFloatingInputs
