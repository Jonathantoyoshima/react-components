interface IButton {
    children: React.ReactNode
}

export const Button: React.FC<IButton> = ({ children }) => {
    return <button>{children}</button>
}
