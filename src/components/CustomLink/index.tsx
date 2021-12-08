import { useMatch, useResolvedPath } from "react-router";
import { Link } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

export const CustomLink = ({ children, to, ...props }: LinkProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  const style = {color: match ? "#D3D6DD" : "#323C4A", borderLeft: match ? "5px solid #D3D6DD": "none"}
  return (
    <span>
      <Link style={style} to={to} {...props}>
        {children}
      </Link>
    </span>
  );
};
