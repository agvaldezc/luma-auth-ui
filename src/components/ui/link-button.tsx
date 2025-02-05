import { ReactNode } from 'react';
import { Link } from 'react-router';
import { Button } from './button';

type LinkButtonProps = {
  href: string;
  children: ReactNode;
};

export const LinkButton = ({ href, children }: LinkButtonProps) => {
  return (
    <Button asChild variant="link">
      <Link to={href} className="link">
        {children}
      </Link>
    </Button>
  );
};
