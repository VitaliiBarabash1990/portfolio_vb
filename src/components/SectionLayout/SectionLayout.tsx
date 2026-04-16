import React, {ReactNode} from 'react';

interface SectionLayoutProps {
  children: ReactNode;
  id: string;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({children, id}) => {
  return (
    <section id={id} className="section">
      <div className="container">{children}</div>
    </section>
  );
};

export default SectionLayout;
