
export const Link = ()=> {
  const arr = [
    {title: "Services"},
    {title: "Projects"},
    {title: "About"}
  ]
  return (
    <>
      {arr.map((title)=> <span className="link-names" key={title.title}>{title.title}</span>)}
    </>
  )
}