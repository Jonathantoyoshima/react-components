import React from 'react'
import { render, screen } from 'assets/test-utils'
import { Button } from './Button'

test('Deve conter um botão continuar', () => {
    render(<Button>continuar</Button>)

    const buttonIncrement = screen.getByRole('button', { name: /continuar/i })
    expect(buttonIncrement).toBeInTheDocument()
})

// test('Deve exibir texto ao clicar ', () => {
//     const handleClick = vi.fn()
//     render(<Button onClick={handleClick} />)

//     const buttonText = screen.getByRole('button', { name: /continuar/i })

//     fireEvent.click(buttonText)
//     expect(handleClick).toBeCalledTimes(1)
// })
