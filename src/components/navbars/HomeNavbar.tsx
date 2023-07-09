import { Navbar, Button, Menu } from "react-daisyui";
const HomeNavbar = () => {
  return (
    <div className="flex w-full component-preview p-4 pb-40 items-center justify-center gap-2 font-sans">
      <Navbar>
        <div className="flex-1 ">
          <Button color="ghost" className="normal-case text-xl">
            Chirps
          </Button>
        </div>
        <div className="flex-none">
          <Menu horizontal className="p-0">
            <Menu.Item>
              <a>Item 1</a>
            </Menu.Item>
            <Menu.Item tabIndex={0}>
              <a>Parent</a>
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
