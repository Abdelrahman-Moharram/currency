import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { setAuth, finishInitialLoad, setLogout } from '@/redux/features/authSlice';
import { useVerifyMutation } from '@/redux/features/authApiSlice';

export default function useVerify() {
	const dispatch = useAppDispatch();

	const [verify] = useVerifyMutation();

	useEffect(() => {
		verify(undefined)
			.unwrap()
			.then((data:any) => {
				dispatch(setAuth(data?.access));
			})
			.catch(()=>{
				dispatch(setLogout())
			})
			.finally(() => {
				dispatch(finishInitialLoad());
			});
	}, [dispatch, verify]);
}