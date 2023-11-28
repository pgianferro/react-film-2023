import React from 'react'

//Le pasamos un rest operator en los parámetros y un spread operator en el botón para poder pasarle varias propiedades al botón
const AppButton = ({children, ...props}) => {
  return (
    <button {...props}>{children}</button>
  )
}

export default AppButton