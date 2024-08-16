'use client'
import { ChangeEvent, FormEvent, useEffect } from 'react';
import { FloatingInput } from '@/Components/Forms';
import { Spinner } from '@/Components/Common';
import ErrorAlert from '../alerts/ErrorAlert';

interface Config {
	labelText: string;
	labelId: string;
	type: string;
	value: string;
	link?: {
		linkText: string;
		linkUrl: string;
	};
	required?: boolean;
}

interface Props {
	config: Config[];
	isLoading: boolean;
	btnText: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (event: FormEvent<HTMLFormElement>) => void;
	errors? : any
}

export default function Form({
	config,
	isLoading,
	btnText,
	onChange,
	onSubmit,
	errors,
}: Props) {

	console.log(errors);
	
	return (
		<form className='space-y-6' onSubmit={onSubmit}>
			{
				errors?.hasOwnProperty('non_field_errors')?
					<ul className='list-disc'>
						{
							errors['non_field_errors']?.map((i:string)=>(
								<li className='text-red-500'>{i}</li>
							))
						}
					</ul>
				:null
			}
			{
				errors?.detail?
					<ErrorAlert 
						text={errors.detail}
					/>
				:null
			}
			{config.map(input => (
				<FloatingInput
					label={input.labelText}
					key={input.labelId}
					labelId={input.labelId}
					type={input.type}
					onChange={(e:ChangeEvent<HTMLInputElement>)=>onChange(e)}
					value={input.value}
					required={input.required}
					errors={errors?.hasOwnProperty(input.labelId) ? errors[input.labelId]: []}
				/>
			))}

			<div>
				<button
					type='submit'
					className='flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
					disabled={isLoading}
				>
					{isLoading ? <Spinner sm /> : `${btnText}`}
				</button>
			</div>
		</form>
	);
}