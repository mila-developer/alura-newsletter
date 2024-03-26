const Form = ({ onSubmit }) => {
  const safeSubmit = event => {
    event.preventDeafult()
    event.stopPropagation()
    const name = event.target[0].value
    const email = event.target[1].value
    onSubmit({ name, email })
  }

  return <form onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center gap-10 -mt-20">
    <input type="text" placeholder="Insira seu nome..." />
    <input type="email" placeholder="Insira seu e-mail..." />
    <button type="submit" className="bg-alura-100 dark_bg-dark-200 rounded-full text-gray-200 uppercase py-1 px-5">Seguir</button>
  </form>
}

export default Form