import {render, screen} from '@testing-library/react'
import Main from './Main'

test('renders the landing page', ()=>{
    render(<Main/>);
    expect(screen.getByRole('img')).toBeInTheDocument()
})