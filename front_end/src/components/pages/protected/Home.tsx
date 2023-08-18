import { useEffect } from 'react';
import './Home.scss';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getResturants } from '../../../features/returant/resturantAction';
import { ResturantInterface } from '../../../common/interfaces';

export default function Home() {
    const dispatch = useAppDispatch()
    const resturantState = useAppSelector((state) => state.resturant)

    useEffect(() => {
        dispatch(getResturants())
    }, [])

    const showResturants = () => {
        if (resturantState.loading) {
            return (
                <p>Loading</p>
            )
        }
        if (resturantState.success) {
            return ((resturantState.resturantInfo as ResturantInterface[]).map((resturant: ResturantInterface) => {
                return <div className='resturant' key={resturant.id}>{resturant.name}</div>
            }))
        }

        return <p>Something went wrong!</p>

    }

    return (

        <div className='home'>
            Home page. Hi user

            <div>
                {showResturants()}
            </div>


        </div>
    )
}