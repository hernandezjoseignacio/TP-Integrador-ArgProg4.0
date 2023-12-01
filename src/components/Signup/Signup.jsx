import './Signup.css'

export function Signup() {
  return (
    <div className='Signup'>
      <form className="form">
        <div className="flex">
          <label>
            <input required="" placeholder="" type="text" class="input" />
            <span>Nombre</span>
          </label>

          <label>
            <input required="" placeholder="" type="text" class="input" />
            <span>Apellido</span>
          </label>
        </div>

        <label>
          <input required="" placeholder="" type="email" class="input" />
          <span>email</span>
        </label>

        <label>
          <input required="" type="tel" placeholder="" class="input" />
          <span>Telefono</span>
        </label>
        <label>
          <input required="" type="password" placeholder="" class="input" />
          <span>Contraseña</span>
        </label>
        <label>
          <input required="" type="confirm-password" placeholder="" class="input" />
          <span>Confirme Contraseña</span>
        </label>
        

        <button className="fancy" href="#">
          <span className="top-key"></span>
          <span className="text">Registrarse</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </button>
      </form>
    </div>
  )
}