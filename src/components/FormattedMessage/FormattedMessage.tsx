import type { IntlMessageID } from 'i18n/messages';
import { FormattedMessage as ReactFormattedMessage } from 'react-intl';

type FormatedMessageProps = {
  id: IntlMessageID;
  defaultMessage?: string;
  values?: Record<string, React.ReactNode>;
  children?: () => React.ReactNode;
};

const FormattedMessage = (props: FormatedMessageProps) => (
  <ReactFormattedMessage {...props} />
);

export default FormattedMessage;
