'use client';

interface categoryProps {
  children: string;
  id: string;
  style: object;
  clickHandler: (id: string, category: string) => void;
}
export default function CategoryLink({
  style,
  children,
  id,
  clickHandler,
}: categoryProps) {
  return (
    <li
      style={style}
      id={id}
      className="nav-item nav-link"
      onClick={(e: React.MouseEvent<HTMLLIElement>) => {
        clickHandler((e.target as HTMLLIElement).id, children);
      }}
    >
      {children}
    </li>
  );
}
