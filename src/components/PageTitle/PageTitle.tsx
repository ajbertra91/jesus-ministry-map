import { useEffect } from 'react';

const SITE_NAME = 'Jesus Ministry Map';

type PageTitleProps = {
  title: string;
};

const PageTitle = ({ title }: PageTitleProps) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} | ${SITE_NAME}`;
    return () => {
      document.title = previousTitle;
    };
  }, [title]);

  return null;
};

export default PageTitle;
