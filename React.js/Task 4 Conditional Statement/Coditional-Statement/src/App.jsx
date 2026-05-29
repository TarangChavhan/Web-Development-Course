function App(){
  const student = ["User1","User2","User3","User4"]
  const Employe=[{
    id:1,
    name:"Tarang",
    age:19,
    Department:"CSE"
  },
  {
    id:2,
    name:"Om",
    age:20,
    Department:"Electrical"
  },
  {
    id:3,
    name:"Yash",
    age:22,
    Department:"IT",
  },
  {
    id:4,
    name:"Suraj",
    age:24,
    Department:"Electrical"
  }
]
  return(
    <div>
      <h1>Array is</h1>
      {
        student.map((student,index)=>(
          <h1 key={index}>{student}</h1>
        ))
      }
      <h1>Object is :-</h1>
      {
        Employe.map((Employe)=>(
          <h2 key={Employe.id}>Name: {Employe.name}, age: {Employe.age}, Department: {Employe.Department}.</h2>
        ))
      }
      <h1>Hello This is Condiation is React</h1>
    </div>
  )
}
export default App;