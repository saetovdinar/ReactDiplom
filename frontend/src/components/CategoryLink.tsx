'use client';

interface categoryProps {
  children: string
  id: string
  clickHandler: (id: string) => void
}
export default function CategoryLink({children, id, clickHandler}:categoryProps ) {
  
    return (
        
          <li id={id} className="nav-item nav-link" onClick={(e: React.MouseEvent<HTMLLIElement>) => clickHandler((e.target as HTMLLIElement).id )}>
            {children}
          </li>
        
    )
}
   
   
 