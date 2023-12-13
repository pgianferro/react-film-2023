<>
      <div className="relative h-screen">
        <Netflixloginviewbg />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-stone-950 p-8 rounded-md shadow-md w-96 bg-opacity-90">
            <h3 className="text-3xl text-default-800 mb-5">Inicia sesión</h3>
            <form action="" onSubmit={handleSubmit}>
              <div>
                {/* Utiliza componentes Input u otros elementos de formulario según sea necesario */}
                <Input className='mb-4'
                  type="email"
                  label="Email"
                  placeholder="Ingresa tu correo electrónico"
                  required
                />
                <Input
                  type="password"
                  label="Contraseña"
                  name="password"
                  placeholder="Ingresa tu contraseña"
                  required
                />
                <ButtonTest />
                <Remember></Remember>
              </div>
            </form>
            <div className="mt-6 text-sm text-gray-500">
              <Suscbutton />
            </div>
            <div className="mt-4 text-xs text-gray-500">
              Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot.
            </div>
          </div>
        </div>
        {/* Sección inferior, información extra. */}
        <div>
          <Footer></Footer>
        </div>
      </div>
    </>