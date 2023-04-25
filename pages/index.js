import Link from "next/link";

export default function Home() {
  return (
    <div className="wrapper">
      {/* NAV */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light small">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              href="/"
              className="nav-link"
              data-widget="pushmenu"
              role="button"
            >
              <i className="fas fa-bars" />
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <div className="user-block small mr-2">
            <Link href="/profile">
              <img
                src="/img/nextjs.png"
                className="img-circle img-bordered-sm"
              />
            </Link>
          </div>
        </ul>
      </nav>
      {/* NAV end */}

      {/* SIDEBAR */}
      <aside className="main-sidebar sidebar-dark-white">
        <a className="brand-link">
          <img
            src="img/nextjs.png"
            className="brand-image img-circle elevation-3"
          />
          <span className="brand-text text-gray-light">N A LTE</span>
        </a>

        <div className="sidebar small">
          <nav className="mt-2">
            <ul className="nav nav-sidebar flex-column mt-3">
              <li className="nav-item">
                <Link href="/" className="nav-link text-white">
                  <i className="nav-icon fa fa-sm fa-home"></i>
                  <p>Home</p>
                </Link>
              </li>
            </ul>

            <ul className="nav nav-sidebar flex-column mt-3">
              <li className="nav-item">
                <Link href="/othermenu1" className="nav-link">
                  <i className="nav-icon fa fa-sm fa-truck-monster"></i>
                  <p>Other menus</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/othermenu2" className="nav-link">
                  <i className="nav-icon fa fa-sm fa-truck"></i>
                  <p>Other menus</p>
                </Link>
              </li>
            </ul>

            <ul className="nav nav-sidebar flex-column mt-3">
              <li className="nav-item">
                <Link href="/logout" className="nav-link">
                  <i className="nav-icon fa fa-sm fa-power-off"></i>
                  <p>Logout</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      {/* SIDEBAR end */}

      {/* CONTENT */}
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row">
              {/* 2cols : 4 + 8 */}
              <div className="col-sm-4">
                <h4>Title Page</h4>
              </div>

              <div className="col-sm-8">
                <ol className="breadcrumb float-sm-right text-gray-light">
                  <li className="breadcrumb-item">
                    <i className="fa fa-sm fa-folder ml-2 mr-2"></i>
                    Module
                  </li>
                  <li className="breadcrumb-item">Controller</li>
                  <li className="breadcrumb-item">Action</li>
                </ol>
              </div>
              {/* 2cols end */}
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card bg-gray">
                  <div className="card-body">Card - body only</div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="card bg-gray-light">
                  <div className="card-header">Card title</div>
                  <div className="card-body">Card body</div>
                  <div className="card-footer">Card footer</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* CONTENT */}

      {/* FOOTER */}
      <footer className="main-footer bg-gray-light">
        <span className="float-right d-none d-sm-block">
          <small>Copyright APPname ©2023</small>
        </span>
      </footer>
      {/* FOOTER end */}
    </div>
  );
}
