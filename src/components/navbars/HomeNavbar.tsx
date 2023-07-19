import { Navbar, Button, Menu, Link } from "react-daisyui";
import { NavbarBrand } from "reactstrap";
const HomeNavbar = () => {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans bg-slate-950">
      <Navbar>
        <div className="flex-1 ">
          <a href="/" className="flex">
            <img
              src="/src/assets/images/logo/dark/logo-50.png"
              alt="logo"
              width={50}
              height={50}
            />
            <h1 className="text-3xl text-primary font-bold pl-2 pt-1">
              Chirps
            </h1>
          </a>
        </div>
        <div className="flex-none">
          <Menu horizontal className="p-0 text-primary font-medium">
            <Menu.Item>
              <a>Item 1</a>
            </Menu.Item>
            <Menu.Item tabIndex={0}>
              <Menu.Details label="Label">
                <Menu className="p-2 bg-base-100">
                  <Menu.Item>
                    <a>Submenu 1</a>
                  </Menu.Item>
                  <Menu.Item>
                    <a>Submenu 2</a>
                  </Menu.Item>
                  <Menu.Item>
                    <a>Submenu 3</a>
                  </Menu.Item>
                </Menu>
              </Menu.Details>
              {/* <Menu className="p-2 bg-base-100">
                <Menu.Item>
                  <a>Submenu 1</a>
                </Menu.Item>
                <Menu.Item>
                  <a>Submenu 2</a>
                </Menu.Item>
                <Menu.Item>
                  <a>Submenu 3</a>
                </Menu.Item>
              </Menu> */}
            </Menu.Item>
            <Menu.Item>
              <a>Item 3</a>
            </Menu.Item>
          </Menu>
        </div>
      </Navbar>
    </div>
  );
};

export default HomeNavbar;
