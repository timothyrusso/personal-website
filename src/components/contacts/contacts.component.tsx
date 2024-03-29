import { Contacts } from './contacts.style';
import { Link } from '../projects/projects.style';

export const ContactsComponent = () => {
  return (
    <Contacts>
      <h2>Want to talk?</h2>
      <Link href="mailto:russotimothy@live.it" target="_blank">
        Email
      </Link>{' '}
      ·{' '}
      <Link
        href="https://www.linkedin.com/in/russotimothysoftwareengineer/"
        target="_blank"
      >
        LinkedIn
      </Link>{' '}
      ·{' '}
      <Link
        href="https://docs.google.com/document/d/1cNIQyn6GO5usEu9Hs_lQVgJPxMxgYiiw5ZGZX69TjqI/edit"
        target="_blank"
      >
        Resume
      </Link>
    </Contacts>
  );
};
