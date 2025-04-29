import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <section className='layout-wrapper'>
        <main>
            <Outlet />
        </main>
    </section>
  )
}

export default Layout