export const  Navbar=({onClick,light})=>{
        return (
          <div>
            <nav
              style={{
                width: "100%",
                height: "50px",
                backgroundColor: "blue",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h2 style={{color:"white"}}>Todo List</h2>{" "}
              </div>
              <div>
                <button
                  onClick={() => {
                    if (light) {
                      onClick(false);
                    } else {
                      onClick(true);
                    }
                  }}
                >
                  {light ? "Dark" : "Light"}
                </button>
              </div>
            </nav>
          </div>
        );   
}