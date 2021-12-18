import { useEffect } from 'preact/hooks';

export const Title = ({ text }) => {
  useEffect(() => {
    document.title = text;
  }, [text]);
  return null;
};

export default Title;
