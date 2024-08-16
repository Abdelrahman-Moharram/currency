import React, { ChangeEvent } from 'react';
import FloatingInput from './FloatingInput';

interface Props {
	labelId: string;
	type: string;
	onChange: (e:ChangeEvent<HTMLInputElement>) => void;
	value: string;
	children: React.ReactNode;
	link?: {
		linkText: string;
		linkUrl: string;
	};
	required?: boolean;
}

export default function Input({
	labelId,
	type,
	onChange,
	value,
	required = false,
}: Props) {
	return (
		<div>
			{/* <div className='flex justify-between align-center'>
				<label
					htmlFor={labelId}
					className='block text-sm font-medium leading-6 text-gray-900'
				>
					{children}
				</label>
				{link && (
					<div className='text-sm'>
						<Link
							className='font-semibold text-indigo-600 hover:text-indigo-500'
							href={link.linkUrl}
						>
							{link.linkText}
						</Link>
					</div>
				)}
			</div> */}
			<div className='mt-2'>
				<FloatingInput
					label={labelId}
					labelId={labelId}
					type={type}
					onChange={onChange}
					value={value}
					required={required}
				/>
			</div>
		</div>
	);
}