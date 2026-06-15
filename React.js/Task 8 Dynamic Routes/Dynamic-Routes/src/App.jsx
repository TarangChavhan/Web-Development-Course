import UserDetails from "./UserDetails";
import UserList from "./UserList";

function App(){
  return(
    <div>
      <h1>Hello</h1>


    <Routes>


    <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/users/:id' element={<UserDetails />} />
         

         <Route path='in'>
         <Route path='/in/user'>
         <Route path="/in/user/login" element={<Login />} />
         <Route path="/in/user/about" element={<About />} />
         </Route>
         </Route>

        </Route>

        <Route path="/college" element={<College />}>
          <Route index element={<Student />} />
          <Route path='department' element={<Department />} />
          <Route path='detail' element={<Details />} />

        </Route>

        <Route path='/*' element={<PageNotFound />} />
        {/* <Route path='/*' element={<Navigate to="/" />} /> */}




      </Routes>



    </div>
  )
}
export default App;